
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'RetroRift - Gaming Fusion Thrills',
      description: 'A dynamic, user-friendly gaming platform that integrates the RAW.G API to deliver a vast library of gaming data with technical status.',
      tech: ['React', 'Redux', 'JavaScript', 'RAW.G API', 'Axios'],
      image: '/lovable-uploads/28500e91-cdda-4c76-8fc1-959cdd4652a1.png',
      liveLink: '#',
      githubLink: '#',
      features: [
        'Interactive UI with React components',
        'Efficient state management with Redux',
        'Real-time data fetching with Axios',
        'Responsive gaming platform design'
      ]
    },
    {
      title: 'Smart Schema Explorer',
      description: 'A collaborative NoSQL schema visualizer with live editing for MongoDB database management and performance optimization.',
      tech: ['Angular', 'Tailwind CSS', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/600/400',
      liveLink: '#',
      githubLink: '#',
      features: [
        'Live schema visualization',
        'Collaborative editing features',
        'MongoDB integration',
        'Performance optimization tools'
      ]
    },
    {
      title: 'Foodies-Restaurant Platform',
      description: 'A comprehensive restaurant platform with ReactJS component-based architecture and optimized user experience.',
      tech: ['React', 'Redux', 'JavaScript', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      liveLink: '#',
      githubLink: '#',
      features: [
        'Component-based architecture',
        'Responsive design with Tailwind',
        'State management with Redux',
        'Enhanced user experience'
      ]
    },
    {
      title: 'Tour-and-Travel Platform',
      description: 'Responsive tour and travel platform built with modern web technologies for enhanced user exploration experience.',
      tech: ['React', 'Redux', 'JavaScript', 'Tailwind CSS'],
      image: '/api/placeholder/600/400',
      liveLink: '#',
      githubLink: '#',
      features: [
        'Interactive travel exploration',
        'Responsive design',
        'Modern UI/UX',
        'Performance optimized'
      ]
    },
    {
      title: 'Cook.io - Epicurean Navigator',
      description: 'An intuitive recipe meal-planning web application with comprehensive database integration and interactive features.',
      tech: ['HTML', 'CSS', 'JavaScript', 'Edaman API'],
      image: '/api/placeholder/600/400',
      liveLink: '#',
      githubLink: '#',
      features: [
        'Recipe discovery and exploration',
        'Meal planning functionality',
        'API integration for recipes',
        'User-friendly interface'
      ]
    },
    {
      title: 'Patient Program Portal',
      description: 'A secure backend system for managing patient records with role-based access and SQL indexing for performance.',
      tech: ['Node.js', 'MySQL', 'JWT Auth'],
      image: '/api/placeholder/600/400',
      liveLink: '#',
      githubLink: '#',
      features: [
        'Secure patient data management',
        'Role-based authentication',
        'Optimized database queries',
        'Healthcare compliance'
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-6"
    >
      {/* Gradient Backgrounds */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 -right-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">My Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of innovative solutions built with cutting-edge technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
              className="glass-morphism rounded-2xl overflow-hidden group"
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                rotateX: 5,
                rotateY: 5,
              }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-800 to-gray-900">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-500/20"
                  animate={{
                    opacity: hoveredProject === index ? 0.8 : 0.3,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      scale: hoveredProject === index ? 1.1 : 1,
                      rotate: hoveredProject === index ? 5 : 0,
                    }}
                    className="text-6xl"
                  >
                    {index === 0 ? '🎮' : index === 1 ? '🗄️' : index === 2 ? '🍕' : index === 3 ? '✈️' : index === 4 ? '👨‍🍳' : '🏥'}
                  </motion.div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      whileHover={{ scale: 1.1 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + techIndex * 0.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Features */}
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: hoveredProject === index ? 'auto' : 0,
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden mb-4"
                >
                  <ul className="space-y-1 text-sm text-gray-400">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2">
                        <span className="w-1 h-1 bg-primary rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Action Buttons */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 gradient-blur rounded-full text-white text-sm font-semibold hover:scale-105 transition-transform"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Eye size={16} />
                    Live Demo
                  </motion.a>
                  <motion.a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass-morphism rounded-full text-gray-300 text-sm font-semibold hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center mt-16"
        >
          <div className="glass-morphism p-8 rounded-2xl">
            <h2 className="text-3xl font-bold text-gradient mb-4">Interested in Working Together?</h2>
            <p className="text-gray-300 mb-6">
              I'm always excited to collaborate on innovative projects and bring ideas to life.
            </p>
            <motion.a
              href="/contact"
              className="inline-block gradient-blur px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
