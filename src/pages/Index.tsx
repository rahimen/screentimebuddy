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
              The Power of Accountability: What The Experts Say
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              Accountability is a proven driver of habit change and performance. World-class experts agree that 
              sharing your goals and progress with others can unlock lasting results.
            </p>
          </div>
          <ExpertQuotes />
        </div>
      </section>

      {/* Science Behind Section */}
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              The Science Behind Screen Time Buddy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Leveraging the science of accountability to keep you focused.
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