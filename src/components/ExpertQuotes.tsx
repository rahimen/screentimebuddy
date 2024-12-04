import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const quotes = [
  {
    author: "James Clear",
    title: "Author of Atomic Habits",
    quote: "Get an accountability partner. Ask someone to watch your behavior. Create a habit contract. Make the costs of your bad habits public and painful.",
  },
  {
    author: "BJ Fogg",
    title: "Author of Tiny Habits",
    quote: "Simplicity changes behavior. The easier a behavior is to do, the more likely it is to become habit.",
  },
  {
    author: "Charles Duhigg",
    title: "Author of The Power of Habit",
    quote: "Once you understand that habits can change, you have the freedom—and the responsibility—to remake them.",
  },
  {
    author: "Gretchen Rubin",
    title: "Author of Better Than Before",
    quote: "Accountability is the secret weapon for habit change.",
  },
  {
    author: "Robin Sharma",
    title: "Author of The 5 AM Club",
    quote: "All change is hard at first, messy in the middle, and gorgeous at the end.",
  },
  {
    author: "Andrew Huberman",
    title: "Neuroscientist, Host of Huberman Lab Podcast",
    quote: "When we involve others in our goals—through accountability—we activate circuits in the brain that increase motivation and sustain focus over time.",
    avatar: "/lovable-uploads/43aadf9f-0faa-4e52-ac4e-01032612d66e.png"
  },
];

const ExpertQuotes = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {quotes.map((quote, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="glass p-6 rounded-2xl flex flex-col"
        >
          <div className="flex-1">
            <p className="text-lg mb-4 italic">"{quote.quote}"</p>
          </div>
          <div className="flex items-center gap-3">
            {quote.avatar && (
              <Avatar className="w-12 h-12 border-2 border-accent">
                <AvatarImage src={quote.avatar} alt="Expert avatar" />
              </Avatar>
            )}
            <div>
              <h4 className="font-semibold text-accent">{quote.author}</h4>
              <p className="text-sm text-muted-foreground">{quote.title}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExpertQuotes;