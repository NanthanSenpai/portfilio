import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Coffee, Code2, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    'JavaScript/TypeScript',
    'React.js',
    'Node.js',
    'Python',
    'SQL',
    'AWS',
    'Docker',
    'Git',
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-20"
    >
      {/* About Hero */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I'm a passionate developer with over 5 years of experience in building web applications.
              I love creating elegant solutions to complex problems and am constantly learning new technologies.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Code2 className="w-5 h-5 text-blue-600 mr-2" />
                <span>5+ Years Coding</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-5 h-5 text-blue-600 mr-2" />
                <span>10+ Countries</span>
              </div>
              <div className="flex items-center">
                <Coffee className="w-5 h-5 text-blue-600 mr-2" />
                <span>1000+ Coffees</span>
              </div>
              <div className="flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                <span>Always Learning</span>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1522252234503-e356532cafd5?auto=format&fit=crop&w=800&q=80"
              alt="Developer at work"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-gray-50 dark:bg-gray-800 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg text-center"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold">Senior Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">Company Name • 2020 - Present</p>
            <p className="mt-4">
              Led development of multiple high-impact projects and mentored junior developers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-bold">Full Stack Developer</h3>
            <p className="text-gray-600 dark:text-gray-400">Previous Company • 2018 - 2020</p>
            <p className="mt-4">
              Developed and maintained various web applications using modern technologies.
            </p>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;