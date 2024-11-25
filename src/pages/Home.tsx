import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Full Stack Developer specializing in building exceptional digital experiences
              </p>
              <div className="flex space-x-4">
                <Link
                  to="/projects"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center"
                >
                  View Projects <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg"
                >
                  Contact Me
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 50 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
                alt="Developer workspace"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What I Do</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <Code className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Web Development</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Building responsive websites with modern technologies
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <Briefcase className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">Consulting</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Technical consulting for your digital projects
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
            >
              <Award className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Creating beautiful and intuitive user interfaces
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;