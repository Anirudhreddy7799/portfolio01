import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolio-config";

export const Skills = () => {
  const { skills } = portfolioConfig;

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Technical Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-lg"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-4">{skillGroup.category}</h3>
              <div className="space-y-2">
                {skillGroup.items.map((skill, idx) => (
                  <div key={idx} className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-2"></span>
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};