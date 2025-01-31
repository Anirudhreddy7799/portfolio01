import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolio-config";

export const Projects = () => {
  const { projects } = portfolioConfig;

  if (!projects) {
    return <div>No projects available</div>; // Fallback UI
  }

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Featured Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-800">{project.name}</h3>
              <p className="text-gray-600 mt-2">{project.description}</p>
              <ul className="mt-4 space-y-2">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span className="text-gray-600">{highlight}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};