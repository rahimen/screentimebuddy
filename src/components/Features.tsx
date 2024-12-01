import { Clock, Share2, LineChart, Bell } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Clock,
    title: "Connect",
    description: "Partner with someone you trust to keep each other accountable for screen time goals.",
  },
  {
    icon: Share2,
    title: "Share",
    description: "Your screen time data is automatically shared with your buddy daily or weekly.",
  },
  {
    icon: LineChart,
    title: "Track",
    description: "View insights and progress over time to understand your digital habits better.",
  },
  {
    icon: Bell,
    title: "Notify",
    description: "Get gentle reminders and celebrate achievements with your accountability partner.",
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