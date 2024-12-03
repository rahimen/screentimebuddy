import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import PhoneMockup from "@/components/PhoneMockup";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const [email, setEmail] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {showAlert && (
        <Alert className="fixed top-4 right-4 w-auto bg-accent text-white animate-fade-in">
          <AlertDescription>Thanks for joining! We'll be in touch soon.</AlertDescription>
        </Alert>
      )}

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
        <div className="container px-4 mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-left"
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-accent/10 text-accent rounded-full">
                Beta Access Opening Soon
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
                Master Your Digital Habits—Effortlessly Stay Accountable with{" "}
                <span className="text-accent">ScreenTimeBuddy</span>
              </h1>
              <p className="text-lg font-medium text-accent mb-6">
                Limited spots available for the Beta—Don't miss out!
              </p>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Connect with a buddy and automatically share screen time updates.
                Build better digital habits through accountability.
              </p>
              <form onSubmit={handleSubmit} className="max-w-md">
                <div className="flex gap-2">
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
                    className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
                  >
                    Reserve Your Spot
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Sign up for Beta access today. Spots are filling fast!
                </p>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <PhoneMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Automating Accountability: A Seamless Way to Build Digital Discipline
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We've automated the proven practice of sharing screen time with a coach or friend,
              making it seamless and effective.
            </p>
          </div>
          <Features />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Accountability Works for Screen Time Management
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of others who are taking control of their digital habits.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Limited Beta Access Closing Soon!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the exclusive group of early adopters who will shape the future of digital wellness.
              Don't wait—spots are limited!
            </p>
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex gap-2">
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
                  className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors"
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

      {/* Footer */}
      <footer className="py-12 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground mb-4 md:mb-0">
              © 2024 ScreenTimeBuddy. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="mailto:contact@screentimebuddy.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;