import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Rocket, Users } from "lucide-react";

const features = [
  {
    icon: Code,
    title: "Clean Code",
    description: "I write maintainable, scalable code following best practices and industry standards.",
  },
  {
    icon: Palette,
    title: "Design Focus",
    description: "Creating intuitive user experiences with attention to detail and aesthetic appeal.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing applications for speed, accessibility, and excellent user experience.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working effectively with teams, stakeholders, and clients to deliver successful projects.",
  },
];

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I'm a passionate full-stack developer 
              creating digital solutions that make a difference.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">
                  Crafting Digital Experiences
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a dedicated full-stack developer who loves turning complex problems
                  into simple, beautiful, and intuitive solutions. With expertise in modern
                  web technologies and a keen eye for design, I create applications that
                  not only function flawlessly but also provide exceptional user experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies,
                  contributing to open-source projects, or mentoring aspiring developers.
                  I believe in continuous learning and staying updated with the latest
                  industry trends and best practices.
                </p>
              </div>

              
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 card-gradient rounded-xl shadow-card border hover:shadow-glow transition-all duration-300 text-center"
                >
                  <div className="w-12 h-12 hero-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};