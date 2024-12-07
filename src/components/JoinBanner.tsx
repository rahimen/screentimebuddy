import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const users = [
  "/lovable-uploads/501e99c1-46c8-4a11-b9e5-e7d783c90872.png",
  "/lovable-uploads/72a5907a-9668-4cb5-80eb-880d932e4393.png",
  "/lovable-uploads/a89e2a64-f187-4d81-826e-e78e665e58e8.png",
  "/lovable-uploads/8b35450b-a4aa-4361-bbe3-99f2bb5e90b3.png"
];

const JoinBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center gap-2 mb-8"
    >
      <div className="flex -space-x-3">
        {users.map((avatar, index) => (
          <Avatar key={index} className="w-8 h-8 border-2 border-white">
            <AvatarImage src={avatar} alt={`User ${index + 1}`} />
          </Avatar>
        ))}
      </div>
      <p className="text-sm font-medium">
        Join <span className="text-accent font-bold">1,000+</span> already using the ScreenTimeBuddy app
      </p>
    </motion.div>
  );
};

export default JoinBanner;