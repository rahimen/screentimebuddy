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
    <div className="mb-8 animate-fade-up" style={{ animationDelay: `${index * 100}ms` }}>
      <p className="text-lg font-medium mb-4">{index + 1}. {question}</p>
      <RadioGroup 
        value={value} 
        onValueChange={onChange} 
        className="grid grid-cols-1 md:grid-cols-5 gap-3"
      >
        {options.map((option) => (
          <div
            key={option.value}
            className={`flex items-center justify-center p-4 rounded-lg border transition-all ${
              value === option.value
                ? "border-accent bg-accent/10"
                : "border-border hover:border-accent/50"
            }`}
          >
            <RadioGroupItem
              value={option.value}
              id={`q${index}-${option.value}`}
              className="hidden"
            />
            <Label
              htmlFor={`q${index}-${option.value}`}
              className="cursor-pointer text-sm font-medium"
            >
              {option.label}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default CIUSQuestion;