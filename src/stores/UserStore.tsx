// stores/UserStore.ts
import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User } from '@supabase/supabase-js';
import { createBrowserClient } from '@supabase/ssr';

interface UserStore {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  login: (userData: User) => void;
  logout: () => void;
  setLoading: (isLoading: boolean) => void;
  initialize: () => Promise<void>;
  signOut: () => Promise<void>;
}

const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      loading: true,

      login: (userData: User) => {
        set({ user: userData, isAuthenticated: true, loading: false });
      },

      logout: () => {
        set({ user: null, isAuthenticated: false, loading: false });
      },

      setLoading: (isLoading: boolean) => {
        set({ loading: isLoading });
      },

      initialize: async () => {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        // Get current user
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (session?.user) {
          set({ user: session.user, isAuthenticated: true, loading: false });
        } else {
          set({ loading: false });
        }

        // Listen for auth state changes
        supabase.auth.onAuthStateChange((event, session) => {
          if (session?.user) {
            set({ user: session.user, isAuthenticated: true });
          } else {
            set({ user: null, isAuthenticated: false });
          }
        });
      },

      signOut: async () => {
        const supabase = createBrowserClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
        );

        await supabase.auth.signOut();
        set({ user: null, isAuthenticated: false });
      },
    }),
    {
      name: 'user-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);

export default useUserStore;
