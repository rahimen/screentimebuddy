import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface CIUSQuestionProps {
  question: string;
  value: string;
  onChange: (value: string) => void;
  index: number;
}

const CIUSQuestion = ({ question, value, onChange, index }: CIUSQuestionProps) => {
  const options = [
    { value: "0", label: "Never" },
    { value: "1", label: "Rarely" },
    { value: "2", label: "Sometimes" },
    { value: "3", label: "Often" },
    { value: "4", label: "Very Often" },
  ];

  return (
    <div className="mb-8">
      <p className="text-lg font-medium mb-4">{index + 1}. {question}</p>
      <RadioGroup value={value} onValueChange={onChange} className="flex flex-col space-y-2">
        {options.map((option) => (
          <div key={option.value} className="flex items-center space-x-2">
            <RadioGroupItem value={option.value} id={`q${index}-${option.value}`} />
            <Label htmlFor={`q${index}-${option.value}`}>{option.label}</Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CIUSQuestion;