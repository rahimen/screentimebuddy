import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import CIUSQuestion from "./CIUSQuestion";

const questions = [
  "How often do you find it difficult to stop using the internet when you are online?",
  "How often do you neglect your everyday commitments because you prefer to go online?",
  "How often do you feel tense, irritated, or stressed if you cannot use the internet for as long as you want?",
  "How often do you feel that you use the internet more often or for longer than intended?",
  "How often do you fail to reduce your internet use, even though you intend to?"
];

const CIUSQuestionnaire = () => {
  const [answers, setAnswers] = useState<string[]>(Array(5).fill(""));
  const [showResults, setShowResults] = useState(false);
  const [email, setEmail] = useState("");
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const handleAnswer = (index: number, value: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  const calculateScore = () => {
    return answers.reduce((sum, value) => sum + parseInt(value || "0"), 0);
  };

  const getInterpretation = (score: number) => {
    if (score < 7) {
      return "Your results indicate that your internet use is within a healthy range.";
    }
    return "Your results suggest you may have problematic internet use. Consider reflecting on your online habits or seeking further guidance.";
  };

  const progress = (answers.filter(a => a !== "").length / questions.length) * 100;

  const handleSubmit = () => {
    if (answers.some(a => a === "")) {
      toast.error("Please answer all questions before submitting.");
      return;
    }
    setShowEmailCapture(true);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email to see your results.");
      return;
    }
    // Here you would typically send the email to your backend
    console.log("Email submitted:", email);
    setShowEmailCapture(false);
    setShowResults(true);
    toast.success("Results are ready!");
  };

  const handleShare = () => {
    const score = calculateScore();
    const text = `My CIUS Score: ${score}/20\n${getInterpretation(score)}`;
    
    if (navigator.share) {
      navigator.share({
        title: 'My CIUS Results',
        text: text
      }).catch(() => {
        navigator.clipboard.writeText(text);
        toast.success("Results copied to clipboard!");
      });
    } else {
      navigator.clipboard.writeText(text);
      toast.success("Results copied to clipboard!");
    }
  };

  const score = calculateScore();

  return (
    <Card className="glass p-8 max-w-2xl mx-auto animate-fade-up relative">
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-2">Compulsive Internet Use Scale (Short CIUS)</h3>
        <Progress value={progress} className="mb-4" />
      </div>

      {!showResults && !showEmailCapture ? (
        <>
          {questions.map((question, index) => (
            <CIUSQuestion
              key={index}
              question={question}
              value={answers[index]}
              onChange={(value) => handleAnswer(index, value)}
              index={index}
            />
          ))}
          <Button 
            onClick={handleSubmit}
            className="w-full mt-6 bg-accent hover:bg-accent/90"
          >
            Submit
          </Button>
        </>
      ) : (
        <div className={`space-y-6 ${showEmailCapture ? 'blur-[2px]' : ''}`}>
          <h4 className="text-xl font-semibold">Your Results</h4>
          <p className="text-4xl font-bold text-accent mb-6">Score: {score}/20</p>
          <p className="text-lg mb-6 leading-relaxed">{getInterpretation(score)}</p>
          <p className="text-sm text-muted-foreground italic">
            This test is for informational purposes only and does not constitute a professional diagnosis.
          </p>
          <div className="flex gap-4 mt-8">
            <Button onClick={() => setShowResults(false)} variant="outline" className="flex-1">
              Take Test Again
            </Button>
            <Button onClick={handleShare} className="flex-1 bg-accent hover:bg-accent/90">
              Share Results
            </Button>
          </div>
        </div>
      )}

      {showEmailCapture && (
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm flex items-center justify-center p-8">
          <Card className="w-full max-w-md p-6">
            <h4 className="text-xl font-semibold mb-4">Your Results Are Ready!</h4>
            <p className="text-muted-foreground mb-6">
              Enter your email to see your personalized CIUS results and receive tips for managing screen time.
            </p>
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Button type="submit" className="w-full bg-accent hover:bg-accent/90">
                Show My Results
              </Button>
            </form>
          </Card>
        </div>
      )}
    </Card>
  );
};

export default CIUSQuestionnaire;