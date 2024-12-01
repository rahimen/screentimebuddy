import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Smartphone, Users, Check, ChevronRight, Share2, LineChart, Bell } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

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
                Coming Soon
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">
                Stay Accountable. Reduce Screen Time.{" "}
                <span className="text-accent">Together.</span>
              </h1>
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
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 rounded-lg border bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-accent"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 bg-accent text-white rounded-lg font-medium hover:bg-accent/90 transition-colors flex items-center gap-2"
                  >
                    Get Early Access
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* iPhone 14/15 Mockup */}
              <div className="relative mx-auto max-w-[300px] aspect-[9/19.5]">
                {/* Phone Frame */}
                <div className="absolute inset-0 w-full h-full bg-black rounded-[3rem] p-3 shadow-2xl">
                  {/* Dynamic Island */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-[35px] bg-black rounded-b-3xl z-20" />
                  {/* Screen Content */}
                  <div className="absolute inset-0 w-full h-full rounded-[2.5rem] overflow-hidden bg-white">
                    <img
                      src="/lovable-uploads/923f6c12-4c21-43e9-8501-8740fa0acf81.png"
                      alt="Delivery tracking interface showing order status and map"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
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

          <div className="grid md:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-2xl hover-scale"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
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

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="glass p-6 rounded-2xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10" />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                  </div>
                </div>
                <p className="text-muted-foreground">{testimonial.quote}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Don't miss out—sign up for early access today!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the waitlist and be among the first to experience ScreenTimeBuddy when we launch.
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
                  Join Waitlist
                </button>
              </div>
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

const features = [
  {
    icon: Users,
    title: "Connect",
    description: "Partner with someone you trust to keep each other accountable for screen time goals.",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Your screen time data is automatically shared with your buddy daily or weekly.",
  },
  {
    icon: LineChart,
    title: "Track",
    description: "View insights and progress over time to understand your digital habits better.",
  },
  {
    icon: Bell,
    title: "Notify",
    description: "Get gentle reminders and celebrate achievements with your accountability partner.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Product Designer",
    quote: "Accountability transformed how I use my phone. Can't wait for ScreenTimeBuddy to launch!",
  },
  {
    name: "Michael Rodriguez",
    title: "Software Engineer",
    quote: "Having a buddy system for screen time is genius. This is exactly what I needed.",
  },
  {
    name: "Emma Thompson",
    title: "Content Creator",
    quote: "As someone who struggles with phone addiction, this app gives me hope for better habits.",
  },
];

export default Index;