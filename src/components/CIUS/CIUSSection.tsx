import { Card } from "@/components/ui/card";
import CIUSQuestionnaire from "./CIUSQuestionnaire";

const CIUSSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Introduction */}
          <div className="text-center animate-fade-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Assess Your Internet Usage
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The Compulsive Internet Use Scale (CIUS) is a research-backed tool designed by psychologists 
              to help you better understand your internet habits. Developed by Meerkerk et al. (2009) and 
              validated in numerous studies, including Milasauskiene et al. (2021), this scale is widely 
              regarded as a reliable measure of problematic internet use. Take the short CIUS test below 
              to assess your internet usage patterns and gain insights into your relationship with the internet.
            </p>
          </div>

          {/* Questionnaire */}
          <CIUSQuestionnaire />

          {/* References */}
          <Card className="glass p-6 animate-fade-up">
            <h3 className="text-lg font-semibold mb-4">References</h3>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>
                Meerkerk, G. J., Van Den Eijnden, R. J., Vermulst, A. A., & Garretsen, H. F. (2009). 
                The Compulsive Internet Use Scale (CIUS): Some psychometric properties. Cyberpsychology & Behavior, 12(1), 1-6.{" "}
                <a 
                  href="https://pubmed.ncbi.nlm.nih.gov/19072079/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  PubMed
                </a>
              </p>
              <p>
                Milasauskiene, Z., et al. (2021). The Compulsive Internet Use Scale: Reliability and 
                associations with mental health in Lithuanian medical students. Frontiers in Psychology, 12:685137.{" "}
                <a 
                  href="https://www.frontiersin.org/articles/10.3389/fpsyg.2021.685137/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Frontiers in Psychology
                </a>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CIUSSection;