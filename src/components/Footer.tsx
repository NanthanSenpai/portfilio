import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Available for freelance opportunities
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:your.email@example.com"
               className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;