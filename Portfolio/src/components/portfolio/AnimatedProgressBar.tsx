import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

interface AnimatedProgressBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

export const AnimatedProgressBar = ({ skill, percentage, delay = 0 }: AnimatedProgressBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);

  return (
    <div ref={ref} className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium text-foreground">{skill}</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: delay + 0.3, duration: 0.3 }}
          className="text-sm text-muted-foreground"
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="h-3 bg-secondary rounded-full overflow-hidden shadow-inner">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView && !hasAnimated ? { width: `${percentage}%` } : { width: 0 }}
          transition={{
            delay: delay,
            duration: 1.2,
          }}
          onAnimationComplete={() => setHasAnimated(true)}
          className="h-full skill-gradient rounded-full shadow-glow relative overflow-hidden"
        >
          {/* Shine effect */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "100%" } : { x: "-100%" }}
            transition={{
              delay: delay + 0.5,
              duration: 1,
            }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform skew-x-12"
          />
        </motion.div>
      </div>
    </div>
  );
};