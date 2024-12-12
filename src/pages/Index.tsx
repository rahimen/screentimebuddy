import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import ExpertQuotes from "@/components/ExpertQuotes";
import CIUSSection from "@/components/CIUS/CIUSSection";
import HeroSection from "@/components/landing/HeroSection";
import CTASection from "@/components/landing/CTASection";
import Footer from "@/components/landing/Footer";
import JoinBanner from "@/components/JoinBanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <JoinBanner />

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
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

      <CIUSSection />

      {/* Expert Quotes Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Follow the Advice of World-Class Experts in Habit Building and Performance
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              ScreenTimeBuddy integrates principles from the world's top habit and performance experts
              to help you achieve your goals. Here's what they say about the power of accountability
              and building better habits.
            </p>
          </div>
          <ExpertQuotes />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Why Accountability Works for Screen Time Management
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of others who are taking control of their digital habits.
            </p>
          </div>
          <Testimonials />
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;