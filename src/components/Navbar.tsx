import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm z-50 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="text-2xl font-bold">
            Portfolio
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Home
            </NavLink>
            <NavLink to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              About
            </NavLink>
            <NavLink to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Projects
            </NavLink>
            <NavLink to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
              Contact
            </NavLink>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
              <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800">
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-900 p-4">
            <div className="flex flex-col space-y-4">
              <NavLink to="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Home
              </NavLink>
              <NavLink to="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                About
              </NavLink>
              <NavLink to="/projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Projects
              </NavLink>
              <NavLink to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                Contact
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;