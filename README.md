# Phoenix

Welcome to **Phoenix Real Estate**, a modern real estate platform built with **Next.js**, **Tailwind CSS**, and **Supabase**. This site allows users to browse, list, and manage real estate properties efficiently, with real-time features powered by Supabase.

![Phoenix](https://github.com/king101-bit/Phoenix/blob/main/Phoenix.png)

---

## 🚀 Features

- **Responsive Design**: Optimized for mobile, tablet, and desktop.
- **Property Listings**: Browse, search, and filter properties by price, location, etc.
- **User Authentication**: Secure sign up, login, and profile management via Supabase.
- **Real-time Updates**: Live syncing of property data and user interactions.
- **Admin Panel**: Role-based access to manage listings.
- **Dark Mode**: Toggle between light and dark themes.

---

## 🛠️ Technologies Used

- **Next.js** – React framework for SSR and SSG.
- **Tailwind CSS** – Utility-first CSS framework.
- **Supabase** – Backend for authentication and database (PostgreSQL).
- **PostgreSQL** – Powerful, open-source relational database.

---

## 🧰 Installation

### Prerequisites

- Node.js (v14 or later)
- `pnpm` installed globally (`npm install -g pnpm`)

### Setup Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/king101-bit/Phoenix

2. **Navigate into the project**

    ```bash
    cd Phoenix

3. **Install dependencies**
   bash

       pnpm install 

4. **Configure environment variables**
- Create a .env.local file in the root directory and add your Supabase credentials:
   bash

      NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
      NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
  
- You can get these keys from your Supabase project dashboard.
  
5. **Run the development server**
       bash

       pnpm run dev

   
## 🧭 Feature Walkthrough
### 🏘️ Property Listings

Users can browse through property listings, each with information like price, location, image, and description.
### 🔐 User Authentication

Phoenix uses Supabase for secure login, registration, and session handling.
### 🛠️ Admin Panel

Admins have exclusive access to add, update, and delete listings.
### 🔄 Real-time Data

Supabase subscriptions provide real-time updates to the listings.
### 🌙 Dark Mode

Users can toggle light/dark mode from the interface.
### 🚀 Deployment

Phoenix can be deployed on platforms like Vercel or Netlify.
Deploy on Vercel
Go to Vercel and sign in with your GitHub account.
Click Import Project and select the Phoenix repository.
Add the following environment variables in your project settings:

   bash
   
        NEXT_PUBLIC_SUPABASE_URL

        NEXT_PUBLIC_SUPABASE_ANON_KEY

Click Deploy and wait for the build to finish.

🤝 Contributing

We welcome contributions!

Fork this repository.

**Create a new branch:**
    bash
        
        git checkout -b feature-name

**Make your changes and commit them:**
bash
    
    git commit -am 'Add feature'

**Push to your branch:**
bash

    git push origin feature-name

    Open a pull request and describe your changes.

