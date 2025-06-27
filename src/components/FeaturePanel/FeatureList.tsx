import { motion, Variants } from "framer-motion";
import { FeatureItem } from "./FeatureItem";
import { Zap, ShieldCheck, Rocket } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Experience blazing-fast performance and instant load times with our optimized infrastructure.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description: "Your data is protected with end-to-end encryption and industry-leading security protocols.",
  },
  {
    icon: Rocket,
    title: "Scalable Architecture",
    description: "Grow your application without limits. Our platform scales with you, from MVP to enterprise.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

export function FeatureList() {
  return (
    <motion.div
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {features.map((feature, index) => (
        <FeatureItem
          key={index}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </motion.div>
  );
}