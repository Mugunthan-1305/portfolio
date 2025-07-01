
import { motion } from 'framer-motion';
import { Code, Database, Cloud, Smartphone } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "Expert in React, Vue.js, Angular with modern CSS frameworks"
    },
    {
      icon: Database,
      title: "Backend & Databases",
      description: "Node.js, Express.js, MongoDB, MySQL, PostgreSQL"
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description: "AWS, Vercel, GitHub Actions, CI/CD pipelines"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "React Native, responsive design, PWA development"
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
      {/* Gradient Background */}
      <div className="absolute top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">About Me</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate Full-Stack Developer with a drive for innovation and excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Personal Story */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="glass-morphism p-8 rounded-2xl"
          >
            <h2 className="text-3xl font-bold text-gradient mb-6">My Journey</h2>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Currently pursuing my Bachelor of Engineering in Electronics and Communication 
                at Annamalai University, I've cultivated a passion for creating innovative 
                digital solutions that make a real impact.
              </p>
              <p>
                With expertise in modern web technologies like React, Node.js, and cloud platforms, 
                I've successfully built and deployed scalable applications including gaming platforms, 
                data visualization tools, and collaborative systems.
              </p>
              <p>
                My experience spans from frontend magic with React and Vue.js to backend prowess 
                with Node.js and database management, always focusing on clean, efficient, and 
                user-centered solutions.
              </p>
            </div>
          </motion.div>

          {/* Stats & Education */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            <div className="glass-morphism p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-4">Education</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold text-white">Bachelor of Engineering</h4>
                  <p className="text-gray-400">Electronics and Communication</p>
                  <p className="text-gray-500">Annamalai University • CGPA: 6.85</p>
                  <p className="text-gray-500">Expected May 2024</p>
                </div>
                <div>
                  <h4 className="font-semibold text-white">Diploma in ECE</h4>
                  <p className="text-gray-400">AVC Polytechnic College</p>
                  <p className="text-gray-500">CGPA: 7.27 • July 2017 - April 2021</p>
                </div>
              </div>
            </div>

            <div className="glass-morphism p-6 rounded-2xl">
              <h3 className="text-2xl font-bold text-gradient mb-4">Quick Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">90+</div>
                  <div className="text-gray-400 text-sm">LeetCode Problems</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">5+</div>
                  <div className="text-gray-400 text-sm">Major Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">2+</div>
                  <div className="text-gray-400 text-sm">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">10+</div>
                  <div className="text-gray-400 text-sm">Technologies</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center text-gradient mb-12">What I Do Best</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="glass-morphism p-6 rounded-2xl text-center group hover:animate-glow transition-all duration-300"
                >
                  <motion.div
                    className="mb-4 mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon size={32} className="text-primary" />
                  </motion.div>
                  <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
