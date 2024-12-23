import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const quotes = [
  {
    author: "James Clear",
    title: "Author of Atomic Habits",
    quote: "Get an accountability partner. Ask someone to watch your behavior. Create a habit contract. Make the costs of your bad habits public and painful.",
    avatar: "/lovable-uploads/879176e6-de38-436d-bd08-22e34f6df63a.png"
  },
  {
    author: "BJ Fogg",
    title: "Stanford Professor and Author of Tiny Habits",
    quote: "When people feel connected, they do more. Relationships create a social context that makes new habits stick.",
    avatar: "/lovable-uploads/2e29efe1-8ce3-4f98-a353-0586a66109b1.png"
  },
  {
    author: "Ryan Holiday",
    title: "Author of The Daily Stoic and The Obstacle is the Way",
    quote: "Surround yourself with people who have the habits you want to have yourself. You'll rise together.",
    avatar: "/lovable-uploads/9eb8fc3d-b21f-4bc9-99c3-905ff1dc299a.png"
  },
  {
    author: "Gretchen Rubin",
    title: "Author of Better Than Before",
    quote: "Accountability is the secret weapon for habit change.",
    avatar: "/lovable-uploads/ef46b67e-1efa-4484-b921-1bc22e28b4e5.png"
  },
  {
    author: "Robin Sharma",
    title: "Author of The Monk Who Sold His Ferrari",
    quote: "By developing relationships with those committed to constant improvement and the pursuit of the best that life has to offer, you will have plenty of company on your path to the top of whatever mountain you seek to climb.",
    avatar: "/lovable-uploads/eb4153fb-734b-4083-80d9-f009b5471801.png"
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