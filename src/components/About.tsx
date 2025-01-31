import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolio-config";

export const About = () => {
  const { personal, about } = portfolioConfig;
  
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          About Me
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="prose lg:prose-xl"
          >
            <ul className="list-disc text-left text-gray-600 leading-relaxed space-y-2 pl-6">
              {about.summary.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center space-x-2">
                <span className="text-primary">📍</span>
                <span>{personal.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">📧</span>
                <a href={`mailto:${personal.email}`} className="text-primary hover:text-secondary transition-colors">
                  {personal.email}
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-primary">📱</span>
                <a href={`tel:${personal.phone}`} className="text-primary hover:text-secondary transition-colors">
                  {personal.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};