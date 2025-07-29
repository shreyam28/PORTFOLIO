import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "US Housing Market App",
    description:
      "Interactive dashboard for U.S. real estate trends with state-level filtering and dynamic visualizations using Shiny for Python.",
    tech: ["Python", "Shiny", "Plotly", "Pandas"],
    github: "https://github.com/shreyam28/Shiny_US_Housing_App",
    demo: "#",
    image: "/images/Housing.jpg",
  },
  {
    title: "YouTube Clone",
    description:
      "Fully responsive YouTube-like frontend with video grid, search, and state-managed routing using Redux Toolkit.",
    tech: ["React", "Tailwind CSS", "Redux Toolkit"],
    github: "https://github.com/shreyam28/Youtube-Clone",
    demo: "#",
    image: "/images/Youtube-Clone.jpg",
  },
  {
    title: "Travel Dashboard",
    description: "A fully responsive and interactive Travel Agency Dashboard built using React, Tailwind CSS, and Syncfusion UI components. This admin dashboard provides real-time insights into travel bookings, customer analytics, destination management, and revenue metrics.",
    tech: ["React-Router", "Tailwinfd CSS", "Sentry", "Appwrite", "Syncfusion"],
    github: "https://github.com/shreyam28/travel-agency-dashboard",
    demo: "#",
    image: "/images/Travel-dashboard.jpg",
  },
  {
    title: "Clothing Store Portfolio",
    description:
      "Portfolio website for a women's clothing store showcasing collections with smooth animations and reusable components.",
    tech: ["React", "Tailwind CSS"],
    github: "https://github.com/shreyam28/mytalorzone",
    demo: "https://chic-moonbeam-ed936c.netlify.app/",
    image: "/images/Clothing.jpg",
  },
];

export const ProjectsSection = () => {
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
    <section id="projects" className="py-20">
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
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent projects that showcase my skills in
              Full-stack development, UI/UX design and Data Science.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <Card className="group h-full card-gradient border hover:shadow-glow transition-all duration-500 overflow-hidden">
                  {/* Project Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl font-bold group-hover:text-gradient transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex-1">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="text-xs px-2 py-1 hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter className="flex gap-3">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="flex-1 hover:shadow-glow transition-all duration-300"
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>

                    <Button
                      size="sm"
                      asChild
                      className="flex-1 hero-gradient text-white border-0 hover:shadow-glow transition-all duration-300"
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="hover:shadow-glow transition-all duration-300"
              asChild
            >
              <a href="https://github.com/shreyam28" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                View All Projects
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};