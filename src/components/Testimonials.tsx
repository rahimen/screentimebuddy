import { motion } from "framer-motion";

const sciencePoints = [
  {
    title: "Accountability significantly increases the likelihood of achieving your goals.",
    description: "Research by Dr. Gail Matthews at Dominican University found that people who write down their goals and share updates with a friend are 76% more likely to achieve them compared to 43% for those who don't. This highlights the powerful impact of combining written goals with accountability.",
    source: "Matthews, G. (2015), Dominican University Study on Accountability and Goal Setting."
  },
  {
    title: "Social pressure reduces distractions and improves focus.",
    description: "The presence of another person or awareness that someone is observing your progress can reduce distractions and improve performance by up to 32%.",
    source: "Zajonc, R. B. (1965), \"Social Facilitation,\" Science."
  },
  {
    title: "Precommitment improves results and builds stronger habits.",
    description: "Precommitting to specific goals creates a psychological commitment that drives better follow-through and builds lasting habits.",
    source: "Ariely, D., and Wertenbroch, K. (2002), \"Procrastination, Deadlines, and Performance,\" Psychological Science."
  },
  {
    title: "Accountability partners double the likelihood of long-term success.",
    description: "Research shows that having an accountability partner significantly increases the odds of maintaining long-term behavior changes, such as reducing screen time.",
    source: "American Society of Training and Development (ASTD)."
  }
];

const Testimonials = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <p className="text-muted-foreground">
          Research shows that accountability, social connection, and precommitment are powerful tools for improving focus and achieving goals. Here's what the science says:
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {sciencePoints.map((point, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="glass p-6 rounded-2xl"
          >
            <h4 className="font-semibold mb-3">{point.title}</h4>
            <p className="text-muted-foreground mb-4">{point.description}</p>
            <p className="text-sm text-muted-foreground italic">{point.source}</p>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <p className="text-muted-foreground">
          Screen Time Buddy combines these proven principles to make accountability simple and effective, empowering you to take control of your screen time habits.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;