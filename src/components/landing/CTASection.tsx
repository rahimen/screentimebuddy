import { useState } from "react";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container px-4 mx-auto text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            Limited Beta Access Closing Soon!
          </h2>
          <p className="text-base md:text-lg text-muted-foreground mb-8">
            Join the exclusive group of early adopters who will shape the future of digital wellness.
            Don't wait—spots are limited!
          </p>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap"
              >
                Join Beta Waitlist
              </button>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Limited spots available. Join now to secure your place!
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;