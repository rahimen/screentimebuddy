import { Clock, Share2, LineChart, Bell } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Stay on Track with Real Accountability",
    description: "Share your daily screen time with a trusted buddy who motivates and supports you.",
  },
  {
    icon: LineChart,
    title: "Visualize Your Progress",
    description: "Simple charts and insights show where your time goes and how you're improving.",
  },
  {
    icon: Share2,
    title: "Build Habits That Stick",
    description: "Set goals and see real, measurable changes over time.",
  },
  {
    icon: Bell,
    title: "Get Support",
    description: "Celebrate achievements and stay motivated with your accountability partner.",
  },
];

const Features = () => {
  return (
    <div className="grid md:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="glass p-6 rounded-2xl hover-scale"
        >
          <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
            <feature.icon className="w-6 h-6 text-accent" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Features;