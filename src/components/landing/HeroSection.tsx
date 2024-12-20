import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import PhoneMockup from "@/components/PhoneMockup";
import { useToast } from "@/components/ui/use-toast";

const HeroSection = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  
  // Replace this URL with your Google Form submission URL
  const formUrl = "https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse";
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Submitting email:", email);

    try {
      // Google Forms requires form field names like "entry.1234567890"
      // Replace ENTRY_ID with your actual form field ID
      const formData = new FormData();
      formData.append('entry.ENTRY_ID', email);
      
      // Using no-cors mode as Google Forms doesn't support CORS
      await fetch(formUrl, {
        method: "POST",
        mode: "no-cors",
        body: formData,
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-12 md:py-20">
      <div className="container px-4 mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <span className="inline-block px-4 py-1.5 mb-4 md:mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
              Beta Access Opening Soon
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance leading-tight">
              Break Free from Endless Scrolling—With the Power of{" "}
              <span className="text-accent">Accountability!</span>
            </h1>
            <p className="text-lg font-medium text-accent mb-4 md:mb-6">
              Pair up with a buddy (friend or matched by us) to track your screen time, set goals, and build habits that last—all automatically.
            </p>
            <ul className="text-base md:text-lg text-muted-foreground mb-6 md:mb-8 space-y-3">
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-1 w-4 h-4 text-accent shrink-0" />
                <span>Effortless Tracking: Syncs with your phone's built-in tools.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-1 w-4 h-4 text-accent shrink-0" />
                <span>Total Privacy: Your data is secure and only shared with your buddy.</span>
              </li>
              <li className="flex items-start gap-2">
                <ChevronRight className="mt-1 w-4 h-4 text-accent shrink-0" />
                <span>Buddy Your Way: Invite a friend or let us match you.</span>
              </li>
            </ul>

            <form onSubmit={handleSubmit} className="max-w-md">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email for early access"
                  className="flex-1 px-4 py-3 rounded-lg border bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center justify-center gap-2 whitespace-nowrap disabled:opacity-50"
                >
                  {isLoading ? "Submitting..." : (
                    <>
                      Reserve My Beta Spot
                      <ChevronRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Spots are limited—don't miss your chance to take control of your screen time!
              </p>
            </form>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative order-first md:order-last"
          >
            <PhoneMockup />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;