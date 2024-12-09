import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
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
    setShowResults(true);
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
    <Card className="p-6 max-w-2xl mx-auto">
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Compulsive Internet Use Scale (Short CIUS)</h3>
        <Progress value={progress} className="mb-4" />
      </div>

      {!showResults ? (
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
            className="w-full mt-4"
          >
            Submit
          </Button>
        </>
      ) : (
        <div className="space-y-4">
          <h4 className="text-xl font-semibold">Your Results</h4>
          <p className="text-3xl font-bold text-accent mb-4">Score: {score}/20</p>
          <p className="text-lg mb-4">{getInterpretation(score)}</p>
          <p className="text-sm text-muted-foreground italic">
            This test is for informational purposes only and does not constitute a professional diagnosis.
          </p>
          <div className="flex gap-4 mt-6">
            <Button onClick={() => setShowResults(false)} variant="outline">
              Take Test Again
            </Button>
            <Button onClick={handleShare}>
              Share Results
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default CIUSQuestionnaire;