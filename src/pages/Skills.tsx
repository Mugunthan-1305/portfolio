
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { Float, Text } from '@react-three/drei';
import { Suspense, useState } from 'react';

const SkillSphere = ({ position, skill, color }: { 
  position: [number, number, number], 
  skill: string, 
  color: string 
}) => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh position={position}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} />
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {skill}
        </Text>
      </mesh>
    </Float>
  );
};

const Skills3D = () => {
  const skills = [
    { name: 'React', position: [-2, 1, 0] as [number, number, number], color: '#61dafb' },
    { name: 'Node.js', position: [2, -1, 0] as [number, number, number], color: '#68a063' },
    { name: 'TypeScript', position: [0, 2, -1] as [number, number, number], color: '#3178c6' },
    { name: 'MongoDB', position: [-1, -2, 1] as [number, number, number], color: '#47a248' },
    { name: 'AWS', position: [3, 0, -2] as [number, number, number], color: '#ff9900' },
  ];

  return (
    <div className="h-96 w-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <spotLight position={[-10, -10, -10]} angle={0.3} />
        <Suspense fallback={null}>
          {skills.map((skill, index) => (
            <SkillSphere
              key={index}
              position={skill.position}
              skill={skill.name}
              color={skill.color}
            />
          ))}
        </Suspense>
      </Canvas>
    </div>
  );
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend');
  
  const skillCategories = {
    frontend: {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'Vue.js', level: 85 },
        { name: 'Angular', level: 75 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'HTML5/CSS3', level: 95 }
      ]
    },
    backend: {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Django', level: 70 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'SQL', level: 85 }
      ]
    },
    database: {
      title: 'Databases & Cloud',
      skills: [
        { name: 'MongoDB', level: 88 },
        { name: 'MySQL', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'AWS', level: 75 },
        { name: 'Vercel', level: 90 },
        { name: 'GitHub Actions', level: 80 }
      ]
    },
    tools: {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git/GitHub', level: 92 },
        { name: 'Docker', level: 70 },
        { name: 'Webpack', level: 75 },
        { name: 'Jest', level: 80 },
        { name: 'Socket.io', level: 85 },
        { name: 'REST APIs', level: 90 }
      ]
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen py-20 px-6"
    >
      {/* Gradient Backgrounds */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">My Skills</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        {/* 3D Skills Visualization */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-16 glass-morphism rounded-2xl p-8"
        >
          <h2 className="text-3xl font-bold text-center text-gradient mb-8">Interactive Skills Universe</h2>
          <Skills3D />
          <p className="text-center text-gray-400 mt-4">
            Drag to rotate • These are my core technologies
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => (
            <motion.button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'gradient-blur text-white'
                  : 'glass-morphism text-gray-300 hover:text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass-morphism p-8 rounded-2xl"
        >
          <h2 className="text-3xl font-bold text-gradient mb-8 text-center">
            {skillCategories[activeCategory as keyof typeof skillCategories].title}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="space-y-2"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{skill.name}</span>
                  <span className="text-primary text-sm">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Skills;
