import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";

const CTASection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Use the same webhook URL as HeroSection
  const webhookUrl = "https://hooks.zapier.com/hooks/catch/21046317/2spegb6/";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Submitting email to Zapier:", email);

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "cta_section"
        }),
      });

      setEmail("");
      toast({
        title: "Success!",
        description: "Thanks for joining! We'll be in touch soon.",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
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
                disabled={isLoading}
              />
              <button
                type="submit"
                disabled={isLoading}
                className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors whitespace-nowrap disabled:opacity-50"
              >
                {isLoading ? "Joining..." : "Join Beta Waitlist"}
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