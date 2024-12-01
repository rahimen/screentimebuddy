import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Product Designer",
    quote: "Accountability transformed how I use my phone. Can't wait for ScreenTimeBuddy to launch!",
  },
  {
    name: "Michael Rodriguez",
    title: "Software Engineer",
    quote: "Having a buddy system for screen time is genius. This is exactly what I needed.",
  },
  {
    name: "Emma Thompson",
    title: "Content Creator",
    quote: "As someone who struggles with phone addiction, this app gives me hope for better habits.",
  },
];

const Testimonials = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          className="glass p-6 rounded-2xl"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/10" />
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <p className="text-sm text-muted-foreground">{testimonial.title}</p>
            </div>
          </div>
          <p className="text-muted-foreground">{testimonial.quote}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Testimonials;