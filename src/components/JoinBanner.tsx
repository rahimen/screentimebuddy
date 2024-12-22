import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const users = [
  "/lovable-uploads/501e99c1-46c8-4a11-b9e5-e7d783c90872.png",
  "/lovable-uploads/72a5907a-9668-4cb5-80eb-880d932e4393.png",
  "/lovable-uploads/4d41540c-013a-449c-a8f2-6ab4e03bb2b8.png",
  "/lovable-uploads/8b35450b-a4aa-4361-bbe3-99f2bb5e90b3.png"
];

const JoinBanner = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center justify-center gap-2 py-8 px-4 bg-secondary/50 mt-8 mb-0"
    >
      <div className="flex -space-x-3">
        {users.map((avatar, index) => (
          <Avatar key={index} className="w-8 h-8 border-2 border-white">
            <AvatarImage src={avatar} alt={`User ${index + 1}`} />
          </Avatar>
        ))}
      </div>
      <p className="text-sm font-medium">
        Help shape the future of ScreenTimeBuddy as one of our exclusive beta users
      </p>
    </motion.div>
  );
};

export default JoinBanner;