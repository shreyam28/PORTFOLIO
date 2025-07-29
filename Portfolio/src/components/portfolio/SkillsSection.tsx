import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { AnimatedProgressBar } from "./AnimatedProgressBar";

const skills = [
  { name: "React & TypeScript", percentage: 90 },
  { name: "Node.js & Express", percentage: 88 },
  { name: "Python", percentage: 90 },
  { name: "MongoDB", percentage: 82 },
  { name: "Data Science", percentage: 83 },
  { name: "UI/UX Design", percentage: 85 },
  { name: "Kotlin", percentage: 90 },
  { name: "Next.js & Tailwind CSS", percentage: 85 },
];

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Skills & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm proficient in a wide range of technologies and tools that help me
              build robust, scalable, and beautiful applications.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-2 gap-8"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                className="p-6 card-gradient rounded-xl shadow-card border hover:shadow-glow transition-all duration-300"
              >
                <AnimatedProgressBar
                  skill={skill.name}
                  percentage={skill.percentage}
                  delay={index * 0.1}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Info */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 p-8 card-gradient rounded-xl shadow-card border"
          >
            <h3 className="text-xl font-semibold mb-4">
              Always Learning & Growing
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying current with the latest
              developments in web development, cloud technologies, and design trends.
              Currently exploring AI/ML integration and advanced animation techniques.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};