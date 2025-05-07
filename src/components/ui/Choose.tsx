import { Award, Shield, Star } from "lucide-react";

const Choose = () => {
  return (
    <>
      <section className="py-12 md:py-16 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Why Choose Us
            </h2>
            <p className="max-w-[700px] text-muted-foreground">
              We're committed to helping you find the perfect property
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Guidance</h3>
              <p className="text-muted-foreground">
                Our team of experienced agents will guide you through every step
                of the process.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Trusted Partners</h3>
              <p className="text-muted-foreground">
                We work with trusted partners to ensure a smooth and secure
                transaction.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm">
              <div className="p-3 rounded-full bg-primary/10 mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Selection</h3>
              <p className="text-muted-foreground">
                Access to exclusive properties that you won't find anywhere
                else.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Choose;
