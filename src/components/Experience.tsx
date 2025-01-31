import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolio-config";

export const Experience = () => {
  const { experience } = portfolioConfig;

  console.log(experience);

  if (!experience) {
    return <div>No experience available</div>; // Fallback UI
  }

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Professional Experience
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                <p className="text-primary font-medium mt-1">{exp.role}</p>
                <p className="text-gray-600 text-sm mt-1">{exp.period}</p>
                <ul className="mt-4 space-y-2">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span className="text-gray-600">{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};