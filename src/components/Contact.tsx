import { motion } from "framer-motion";
import { portfolioConfig } from "../config/portfolio-config";



export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-gray-600">
              I'm always interested in new opportunities and collaborations.
              Feel free to reach out me:
            </p>
            <div className="space-y-4">
              <a
                href={portfolioConfig.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                LinkedIn Profile
              </a>
              <a
                href={`mailto:${portfolioConfig.personal.email}`}
                className="block px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Email Me
              </a>
              <a
                href={`tel:${portfolioConfig.personal.phone}`}
                className="block px-6 py-3 bg-gray-800 text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Call me
              </a>
              {/*<a
                href="https://anirudhreddyk.com/postbot-main"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                Test01
              </a> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};