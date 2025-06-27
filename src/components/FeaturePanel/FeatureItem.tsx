import { motion, Variants } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

export function FeatureItem({ icon: Icon, title, description }: FeatureItemProps) {
  return (
    <motion.div variants={itemVariants}>
      <Card className="h-full">
        <CardHeader className="flex flex-row items-center gap-4 space-y-0 pb-2">
          <div className="bg-primary/10 p-2 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          <CardTitle className="text-lg">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}