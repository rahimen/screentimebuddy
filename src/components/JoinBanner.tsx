import { motion } from "framer-motion";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

const users = [
  "/lovable-uploads/3903b97a-df6a-41fd-934a-7964e6f48aa2.png",
  "/lovable-uploads/ae1d7260-d9e8-410f-b0eb-7c87789fe4f9.png",
  "/lovable-uploads/a89e2a64-f187-4d81-826e-e78e665e58e8.png",
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