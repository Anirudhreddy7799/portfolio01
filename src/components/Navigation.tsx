import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import React from 'react';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold text-gray-800">
            AR
          </a>
          <div className="hidden md:flex space-x-8">
            {["About", "Experience", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-primary transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
          <nav>
            <ul>
              {/* <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li> */}
              <li><Link to="/postbot-main">Postbot Main</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </motion.nav>
  );
};