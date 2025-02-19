"use client";
import { FiMenu, FiX, FiUser, FiCode, FiFolder, FiMail, FiTool, FiZap, FiUsers, FiMapPin, FiMessageCircle } from 'react-icons/fi';
import { motion, AnimatePresence } from "framer-motion";
import { FaJs, FaNodeJs, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiPostgresql, SiPrisma, SiSequelize, SiTypeorm, SiMysql, SiMongodb, SiAndroid, SiTailwindcss } from "react-icons/si";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillWechat } from "react-icons/ai";
import { useState, useEffect } from 'react';

const skills = [
  { name: "JavaScript", icon: <FaJs />, color: "#F7DF1E" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
  { name: "React", icon: <FaReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#F4EBD9" },
  { name: "NestJS", icon: <SiNestjs />, color: "#E0234E" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
  { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#10A7F9" },
  { name: "Prisma", icon: <SiPrisma />, color: "#05F08A" },
  { name: "Sequelize", icon: <SiSequelize />, color: "#52B0E7" },
  { name: "TypeORM", icon: <SiTypeorm />, color: "#FE2C2C" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479A1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "React Native", icon: <SiAndroid />, color: "#3DDC84" },
];

  export default function Home() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleSubmit = (e:any) => {
      e.preventDefault();
      e.target.reset(); 
    };

  const titles = ["Desenvolvedor de Software Full Stack", "Franca - São Paulo | Brasil "];
  const [currentTitle, setCurrentTitle] = useState(titles[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => 
        prev === titles[0] ? titles[1] : titles[0]
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Navbar */}
      <motion.nav
  className="flex font-geist-mono justify-between items-center p-6 fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] "
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  {/* Logo */}
  <motion.div
    className="flex items-center space-x-2 text-2xl font-bold font-jura text-white"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    <div className="relative group">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex"
      >

        
        {"Víctor Santucci".split("").map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.1,
              delay: index * 0.05 + 0.3
            }}
            className="relative bg-gradient-to-r from-[#1DB954] to-cyan-400 bg-clip-text text-transparent"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#1DB954] to-cyan-400 group-hover:w-full transition-all duration-500" />
    </div>
    <motion.span
      className="text-xl ml-2"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        delay: 1.5,
        type: "spring",
        stiffness: 300,
        damping: 10
      }}
    >
      <span className="text-[#1DB954] animate-pulse">{"</>"}</span>
    </motion.span>
  </motion.div>

  {/* Menu Desktop */}
  <div className="hidden lg:flex space-x-10 text-base">
    {[
      { link: '#sobre', icon: <FiUser />, text: 'Sobre' },
      { link: '#skills', icon: <FiCode />, text: 'Habilidades' },
      { link: '#projects', icon: <FiFolder />, text: 'Projetos' },
      { link: '#contact', icon: <FiMail />, text: 'Contato' }
    ].map((item, index) => (
      <motion.a
        key={index}
        href={item.link}
        className="relative px-4 py-2 group flex items-center space-x-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 + index * 0.1 }}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(item.link)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {/* Ícone */}
        <motion.div
          className="text-[#1DB954] group-hover:text-white transition-colors duration-300"
          whileHover={{ rotate: 360, scale: 1.2 }}
        >
          {item.icon}
        </motion.div>

        {/* Texto */}
        <span className="relative z-10 text-white group-hover:text-[#1DB954] transition-colors">
          {item.text}
        </span>
        
        {/* Efeito Hover Futurista */}
        <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#1DB954] to-cyan-400 group-hover:w-full transition-all duration-500" />
      </motion.a>
    ))}
  </div>

  {/* Menu Mobile */}
  <div className="lg:hidden">
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
      className="text-2xl p-2 relative group"
    >
      {isMenuOpen ? (
        <FiX className="text-[#1DB954]" />
      ) : (
        <FiMenu className="text-white" />
      )}
      <div className="absolute inset-0 rounded-full bg-[#1DB954] opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
    </button>

    {/* Menu Overlay */}
    {isMenuOpen && (
      <motion.div
        className="fixed inset-0 bg-black/90 backdrop-blur-xl z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute right-6 top-20">
          <div className="flex flex-col items-end space-y-6 text-xl">
            {[
              { link: '#sobre', icon: <FiUser />, text: 'Sobre' },
              { link: '#skills', icon: <FiCode />, text: 'Habilidades' },
              { link: '#projects', icon: <FiFolder />, text: 'Projetos' },
              { link: '#contact', icon: <FiMail />, text: 'Contato' }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                className="relative px-4 py-2 group flex items-center space-x-2"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.link)?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                {/* Ícone */}
                <motion.div
                  className="text-[#1DB954] group-hover:text-white transition-colors duration-300"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                >
                  {item.icon}
                </motion.div>

                {/* Texto */}
                <span className="text-white group-hover:text-[#1DB954] transition-colors">
                  {item.text}
                </span>
                
                {/* Linha animada */}
                <div className="absolute bottom-0 right-0 w-0 h-[2px] bg-[#1DB954] group-hover:w-full transition-all duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    )}
  </div>
</motion.nav>


      {/* Ícones de mídia social */}
<motion.div
  className="fixed right-6 top-56 transform -translate-y-1/2 flex flex-col space-y-6 z-50 max-lg:hidden"
  initial={{ opacity: 0, x: 50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 1 }}
>
  {/* Ícones desktop */}
  <motion.a href="https://www.instagram.com/victorsantuccii" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#1DB954] transition-all duration-300" whileHover={{ scale: 1.2 }}>
    <AiFillInstagram />
  </motion.a>
  <motion.a href="https://www.linkedin.com/in/victorsantuccii" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#1DB954] transition-all duration-300" whileHover={{ scale: 1.2 }}>
    <AiFillLinkedin />
  </motion.a>
  <motion.a href="https://github.com/VictorSantuccii" target="_blank" rel="noopener noreferrer" className="text-2xl text-white hover:text-[#1DB954] transition-all duration-300" whileHover={{ scale: 1.2 }}>
    <AiFillGithub />
  </motion.a>
</motion.div>

{/* Ícones mobile no topo */}
{!isMenuOpen && (
  <motion.div
    className="lg:hidden absolute right-4 top-64 transform -translate-y-1/2 flex flex-col space-y-10 z-40"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <a href="https://github.com/VictorSantuccii" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#1DB954] transition-colors duration-300">
      <AiFillGithub />
    </a>
    <a href="https://www.linkedin.com/in/victorsantuccii" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#1DB954] transition-colors duration-300">
      <AiFillLinkedin />
    </a>
    <a href="https://www.instagram.com/victorsantuccii" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#1DB954] transition-colors duration-300">
      <AiFillInstagram />
    </a>
  </motion.div>
)}

     {/* Header Section */}
     <motion.div
  className="flex flex-col items-center justify-center h-screen text-center p-10 relative overflow-hidden"
  initial={{ opacity: 0, y: -50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>

<div className="absolute inset-0 overflow-hidden">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-[#1DB954] rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          x: [0, Math.random() * 100 - 50, 0],
          y: [0, Math.random() * 100 - 50, 0],
          opacity: [0.2, 0.8, 0.2],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: Math.random() * 5 + 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}

<div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-[#1d95b9] to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 20 + 10}%`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
          animate={{
            opacity: [0, 0.5, 0],
            background: [
              'linear-gradient(90deg, #1DB954 0%, transparent 100%)',
              'linear-gradient(90deg, transparent 0%, #1DB954 50%, transparent 100%)',
              'linear-gradient(90deg, transparent 0%, #1DB954 100%)'
            ]
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  </div>


  {/* Efeito de partículas de fundo */}
  {[...Array(50)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-[#1db9b172] rounded-full"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
      }}
      animate={{
        x: [0, Math.random() * 100 - 50, 0],
        y: [0, Math.random() * 100 - 50, 0],
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.5, 1]
      }}
      transition={{
        duration: Math.random() * 5 + 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  ))}

  {/* Efeito de grade digital */}
  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

  {/* Efeito de pulso central */}
  <motion.div
    className="absolute inset-0 flex items-center justify-center"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2 }}
  >
    <div className="absolute w-[200%] h-[200%] bg-radial-gradient(circle, #1DB954 0%, transparent 70%) animate-pulse opacity-10" />
    <div className="absolute w-[150%] h-[150%] bg-radial-gradient(circle, #1DB954 0%, transparent 70%) animate-pulse opacity-15 delay-1000" />
  </motion.div>

  {/* Nome e título */}
  <motion.h1
    className="text-5xl font-jura font-light mb-8 relative z-10"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
  >
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      Víctor Santucci
    </motion.span>
    <motion.span
      className="ml-2 text-[#1DB954]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {"</>"}
    </motion.span>
  </motion.h1>

  {/* Foto com efeitos */}
  <motion.div
    className="w-48 h-48 bg-gray-700 rounded-full mb-12 overflow-hidden relative z-10"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 1.5 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    <div className="absolute inset-0 rounded-full shadow-[0_0_20px_5px_rgba(29,185,84,0.3)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,#1DB954_98%)] opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
    <img
      src="/victor.jpeg"
      alt="Víctor Santucci"
      className="w-full h-full object-cover relative z-10"
    />
  </motion.div>

  {/* Efeito de alternância de texto */}
  <motion.div
    className="text-lg mb-8 relative z-10 font-jura"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <AnimatePresence mode="wait">
      <motion.span
        key={currentTitle}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center space-x-2"
      >
        {currentTitle === titles[0] ? (
          <>
            <span>Desenvolvedor Full Stack</span>
          </>
        ) : (
          <>
            <FiMapPin className="text-[#1DB954]" />
            <span>Franca - São Paulo | Brasil</span>
          </>
        )}
      </motion.span>
    </AnimatePresence>
  </motion.div>

  {/* Botão GitHub */}
  <motion.a
    href="https://github.com/VictorSantuccii"
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden group px-8 py-3 rounded-lg font-jura font-medium bg-gradient-to-r from-[#29E0C2]/80 to-[#18a848] text-white flex items-center gap-2"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 10px #29E7CD"
    }}
    whileTap={{ scale: 0.95 }}
    transition={{ type: "spring", stiffness: 400, damping: 10 }}
  >
    <AiFillGithub className="text-xl" />
    Ver meus trabalhos
    <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#1DB954_50%,transparent_75%)] bg-[length:400%_400%] opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-all duration-300" />
  </motion.a>
</motion.div>

{/* Seção Sobre Mim */}
<motion.section
  id="sobre"
  className="py-20 bg-[#000000] px-4 relative overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>

{[...Array(20)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-4 h-4 bg-[#1db95430] opacity-50"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 360}deg)`
      }}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  ))}

  

<motion.div
    className="absolute inset-0 flex items-center justify-center"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2 }}
  >
    <div className="absolute w-[200%] h-[200%] bg-radial-gradient(circle, #1DB954 0%, transparent 70%) animate-pulse opacity-10" />
  </motion.div>

  

  {/* Efeito de partículas de fundo */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-[#1DB954] rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.5, 1, 0.5],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: Math.random() * 3 + 1,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    ))}
  </div>

  

  {/* Efeito de grid digital */}
  <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>

  <div className="max-w-4xl mx-auto relative z-10">
    <motion.h2
      className="text-3xl font-geist-mono font-semibold text-center text-[#1DB954] mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      ../Sobre Mim
    </motion.h2>
    
    <motion.div
      className="text-lg font-geist-mono text-justify space-y-6 leading-relaxed"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {["Seja bem-vindo! Meu nome é Víctor Santucci, estudante de Engenharia de Software na UNIFACEF,",
        "e sou apaixonado por tecnologia e programação! Como desenvolvedor Full Stack,",
        "me dedico à construção de soluções eficientes. Adoro colaborar em projetos que",
        "possam sempre me desafiar, em busca de aprimorar minhas habilidades e também",
        "expandir meu conhecimento."].map((text, index) => (
          <motion.span
            key={index}
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.2 + 0.3
            }}
          >
            {text}
          </motion.span>
        ))}
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        {["Além disso, tenho experiência com uma variedade de tecnologias modernas do mercado,",
        "incluindo JavaScript, Node.js, TypeScript e PostgreSQL. Estou constantemente",
        "trabalhando para minha evolução como profissional, aprendendo e revisando estudos",
        "com novas ferramentas e frameworks para criar aplicações cada vez melhores."].map((text, index) => (
          <motion.span
            key={index}
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3,
              delay: index * 0.2 + 1.8
            }}
          >
            {text}
          </motion.span>
          
        ))}
      </motion.p>
      <motion.div 
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 max-w-6xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >




    {[
      {
        icon: <FiCode className="text-3xl" />,
        title: "Código Limpo",
        description: "Comprometido com princípios SOLID e Clean Architecture. Foco em legibilidade, manutenibilidade e boas práticas de desenvolvimento.",
        color: "#DEE0E3"
      },
      {
        icon: <FiTool className="text-3xl" />,
        title: "Resolução de Problemas",
        description: "Habilidade analítica para decompor desafios complexos. Abordagem sistemática com foco em soluções eficientes e escaláveis.",
        color: "#F7F06D"
      },
      {
        icon: <FiZap className="text-3xl" />,
        title: "Otimização de Performance",
        description: "Expertise em identificar gargalos e implementar melhorias. Domínio de técnicas de caching e algoritmos eficientes.",
        color: "#00E0FF"
      },
      {
        icon: <FiUsers className="text-3xl" />,
        title: "Trabalho em Equipe",
        description: "Comunicação clara e colaboração eficaz. Experiência em metodologias ágeis e integração contínua com times multidisciplinares.",
        color: "#FF00FF"
      }
    ].map((skill, index) => (
      <motion.div
        key={index}
        className="p-6 bg-[#0a0a0a]/90 backdrop-blur-sm rounded-xl border-2 border-[#1DB954]/20 hover:border-[#48E5C2]/50 transition-all duration-300 group relative overflow-hidden"
        whileHover={{ y: -10 }}
      >
        <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#124D69]/10 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#1DB954]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 flex items-center justify-center rounded-lg mb-4" style={{ backgroundColor: `${skill.color}20` }}>
            {skill.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2 font-geist-mono" style={{ color: skill.color }}>
            {skill.title}
          </h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            {skill.description}
          </p>
        </div>
      </motion.div>
    ))}
  </motion.div>
    </motion.div>
  </div>

  
</motion.section>



     
{/* Seção de Habilidades */}
<motion.section
  id="skills"
  className="py-20 bg-[#000000] relative overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="relative z-10">
    <motion.h2
      className="text-3xl font-geist-mono mb-10 font-semibold text-center text-[#1DB954] mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      ../Habilidades
    </motion.h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-auto max-w-6xl px-4 relative z-10">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="relative bg-[#0a0a0a]/90 text-white font-geist-mono py-6 px-6 rounded-lg overflow-hidden group cursor-pointer backdrop-blur-sm"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ 
            duration: 0.2, 
            delay: index * 0.1,
            type: "tween",
            stiffness: 100,
            damping: 15,
            ease: "easeOut"
          }}
        >
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[gray]/10 rounded-full blur-3xl"></div>



          {/* Efeito de gradiente animado com cor personalizada */}
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 animate-rotate"
            style={{
              background: `conic-gradient(from 90deg at 50% 50%, ${skill.color} 0%, #0F172A 50%, ${skill.color} 100%)`
            }}
          />
          
          {/* Borda sutil com cor da habilidade */}
          <div 
            className="absolute inset-0 border-2 rounded-lg transition-all duration-300"
            style={{ borderColor: `${skill.color}20` }}
          />
          
          {/* Conteúdo */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div 
              className="text-5xl mb-2 relative"
              style={{ color: skill.color }}
            >
              {skill.icon}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-300"
                style={{ backgroundColor: skill.color }}
              />
            </div>
            <span 
              className="text-sm font-medium relative mb-1"
              style={{ color: skill.color }}
            >
              {skill.name}
              <span 
                className="absolute -left-1 -right-1 h-[2px] bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                style={{ backgroundColor: skill.color }}
              />
            </span>
            {/* Nova informação adicionada */}
            <p className="text-xs text-gray-400 text-center px-2">
              Domínio avançado em desenvolvimento full-stack
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>

{/* Seção de Projetos */}
<motion.section
  id="projects"
  className="py-20 bg-[#000000] relative overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  {/* Efeito de partículas */}
  <div className="absolute inset-0">
    {[...Array(30)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-[#1DB954] rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0, 0.5, 0],
          scale: [1, 1.5, 1]
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
        }}
      />
    ))}
  </div>

  {[...Array(20)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-4 h-4 bg-[#1db95486] opacity-50"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 360}deg)`
      }}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  ))}


  <motion.h2
    className="text-3xl font-geist-mono font-semibold text-center text-[#1DB954] mb-12 relative z-10"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    ../Projetos
  </motion.h2>


  <div className="flex justify-center px-4">
    <motion.div
      className="relative w-full max-w-4xl bg-[#00000]/90 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-[#48E5C2]/30 hover:border-[#48E5C2]/60 transition-all duration-500 group"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      whileHover={{ y: -10 }}
    >

      {/* Efeito de grade holográfica */}

      {/* Efeito de brilho */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1DB954_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      
      {/* Efeito de grade holográfica */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay"></div>

      <div className="relative z-10 p-8">
        {/* Imagem do projeto */}
        <motion.div
          className="relative rounded-xl overflow-hidden border-2 border-[#48E5C2]/30 mb-6"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/petexpress.png" // Altere para o caminho da sua imagem
            alt="Projeto em Destaque"
            className="w-full h-64 object-cover"
          />
          {/* Overlay de gradiente */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </motion.div>

        {/* Conteúdo */}
        <div className="space-y-6 font-geist-mono">
          <motion.h3
            className="text-3xl font-bold text-[#A3F5EA]"
            initial={{ x: -20 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5 }}
          >
            PetExpress - Sistema de gerenciador de Pet Shop
          </motion.h3>
          
          <motion.p
            className="text-lg opacity-90 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Plataforma full-stack desenvolvida com Node.js, Sequelize e React e Vite, integrando:
            <ul className="list-disc list-inside mt-3 space-y-2">
              <li>Autenticação JWT</li>
              <li>API REST</li>
              <li>Banco de dados MySQL </li>
              <li>Interface feita com React e Vite</li>
              <li>Deploy com Docker e CI/CD</li>
            </ul>
          </motion.p>

          {/* Tecnologias */}
          <motion.div
            className="flex flex-wrap gap-4 font-poppins"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {['Node.js', 'Javascript', 'MySQL', 'Docker', 'Sequelize'].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#48E5C2]/10 text-[#48E5C2] rounded-full text-sm border border-[#1DB954]/30 hover:bg-[#1DB954]/20 transition-all"
              >
                #{tech}
              </span>
            ))}
          </motion.div>

          {/* Botões */}
<motion.div
  className="flex gap-4 mt-8 font-jura"
  initial={{ y: 20 }}
  animate={{ y: 0 }}
  transition={{ delay: 0.3 }}
>
  <a
    href="https://github.com/orgs/TypeBlast/repositories"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-6 py-3 bg-[#A3F5EA] text-black rounded-lg font-medium hover:bg-[#DFFFD6] transition-all"
  >
    <AiFillGithub className="text-xl" />
    Ver Código
  </a>
</motion.div>
        </div>
      </div>

      {/* Efeito de partículas flutuantes */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ffffff] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
            }}
          />
        ))}
      </div>
    </motion.div>
  </div>

  {/* Efeitos de brilho externo */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl"></div>
  </div>
</motion.section>

      
{/* Seção de Contato */}
<motion.section
        id="contact"
        className="py-20 bg-[#000000] relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Efeito de partículas flutuantes */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#1DB954] rounded-full"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2
              }}
            />
          ))}
        </div>

        {[...Array(20)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute w-4 h-4 bg-[#1db9542b] opacity-50"
      style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        transform: `rotate(${Math.random() * 360}deg)`
      }}
      animate={{
        opacity: [0.2, 0.8, 0.2],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  ))}

        

        
        {/* Efeito de circuito eletrônico no fundo */}
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10 animate-pulse"></div>

        <motion.h2
          className="text-3xl font-geist-mono font-semibold text-center text-[#1DB954] mb-8 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          ../Contato
        </motion.h2>

        <div className="max-w-2xl font-jura mx-auto px-4 relative z-10">
    <motion.form
      className="space-y-8"
      onSubmit={handleSubmit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
    >
      {[
        { field: 'nome', icon: <FiUser className="text-[#1DB954] mr-2" /> },
        { field: 'email', icon: <FiMail className="text-[#1DB954] mr-2" /> },
        { field: 'message', icon: <FiMessageCircle className="text-[#1DB954] mr-2" /> }
      ].map(({ field, icon }, index) => (
        <motion.div
          key={field}
          className="relative group"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + index * 0.1 }}
        >
          <label 
            htmlFor={field}
            className="block text-sm font-medium text-[#ffffff] mb-2 ml-1 transition-all duration-300 group-hover:ml-2"
          >
            <div className="flex items-center">
              {icon}
              {{
                nome: 'Nome',
                email: 'E-mail',
                message: 'Mensagem'
              }[field]}
            </div>
          </label>
    
    <div className="relative">
      {field === 'message' ? (
        <textarea
          id={field}
          name={field}
          rows={4}
          className="w-full px-4 py-3 bg-[#1c1c1c]/80 backdrop-blur-sm text-white rounded-lg border-2 border-[#1DB954]/30 focus:border-[#1DB954] focus:ring-2 focus:ring-[#1DB954]/50 transition-all duration-300 outline-none placeholder-[#1DB954]/50 relative z-20" // Adicione z-20 aqui
          placeholder={`Escreva alguma ${field === 'message' ? 'mensagem' : field}`}
          required
        />
      ) : (
        <input
          type={field === 'email' ? 'email' : 'text'}
          id={field}
          name={field}
          className="w-full px-4 py-3 bg-[#1c1c1c]/80 backdrop-blur-sm text-white rounded-lg border-2 border-[#1DB954]/30 focus:border-[#1DB954] focus:ring-2 focus:ring-[#1DB954]/50 transition-all duration-300 outline-none placeholder-[#1DB954]/50 relative z-20" // Adicione z-20 aqui
          placeholder={`Seu ${field === 'message' ? 'mensagem' : field}`}
          required
        />
      )}

      {/* Ajuste o z-index do efeito de brilho */}
      <div className="absolute inset-0 rounded-lg shadow-[0_0_15px_rgba(29,185,84,0.3)] opacity-0 group-hover:opacity-50 group-focus-within:opacity-100 transition-opacity duration-300 z-10"></div>
    </div>
  </motion.div>
))}

            <motion.div
              className="flex justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            >
       <button
        type="submit"
        className="px-8 py-3 bg-gradient-to-r from-[#1DB954] to-emerald-400 text-white rounded-lg font-medium relative overflow-hidden group transition-all duration-300 hover:shadow-[0_0_25px_rgba(29,185,84,0.5)]"
      >
        Enviar Mensagem
      </button>
            </motion.div>
          </motion.form>
        </div>

        {/* Efeito de scanlines */}
        <div className="absolute inset-0 bg-[url('/scanlines.png')] opacity-10 mix-blend-overlay"></div>

        {/* CSS Global */}
        <style jsx global>{`
          @keyframes wave {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 0.4; }
            50% { opacity: 0.8; }
          }

          @keyframes shine {
            0% { background-position: 200% 50% }
            100% { background-position: -200% 50% }
          }

          .animate-shine {
            animation: shine 2s linear infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #1DB954 }
          }

          .typing-animation {
            display: inline-block;
            position: relative;
            animation: typing 2s steps(15, end), blink-caret .75s step-end infinite;
            border-right: 2px solid #1DB954;
            white-space: nowrap;
            overflow: hidden;
          }

          .cursor-blink {
            animation: blink-caret 0.75s step-end infinite;
          }
          
          @keyframes matrix {
            0% { background-position: 0% 0%; }
            100% { background-position: 100% 100%; }
          }

          @keyframes particle-network {
            0% { transform: translate(0, 0); }
            50% { transform: translate(50px, 50px); }
            100% { transform: translate(0, 0); }
          }

          .animate-particle-network {
            animation: particle-network 10s infinite linear;
          }

          @keyframes circuit-flow {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          .animate-circuit-flow {
            animation: circuit-flow 3s linear infinite;
          }

          .bg-radial-gradient {
            background: radial-gradient(circle, #1DB954 0%, transparent 70%);
          }
          
          @keyframes rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes hologram {
            0% { background-position: 0% 50%; }
            100% { background-position: 100% 50%; }
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }
  
          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #1DB954 }
          }
          
          .typewriter {
            display: inline-block;
            position: relative;
          }
          
          .typewriter::after {
            content: "|";
            position: absolute;
            right: -5px;
            color: #1DB954;
            animation: blink-caret 0.75s step-end infinite;
          }

          
          .animate-wave {
            animation: wave 0.8s linear;
          }
          
          .animate-pulse {
            animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
          }
          
          .animate-matrix {
            animation: matrix 20s linear infinite;
          }
          
          .animate-rotate {
            animation: rotate 20s linear infinite;
          }
          
          .animate-hologram {
            animation: hologram 2s linear infinite;
          }

          input, textarea {
            background: rgba(28, 28, 28, 0.8) !important;
            backdrop-filter: blur(4px);
            transition: all 0.3s ease;
          }

          input:focus, textarea:focus {
            box-shadow: 0 0 15px rgba(29, 185, 84, 0.5);
            border-color: #1DB954 !important;
          }
        `}</style>
      </motion.section>




      <motion.footer 
  className="py-6 bg-[#0000006f] text-center relative overflow-hidden"
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, delay: 0.5 }}
>
  {/* Efeitos de fundo */}
  <div className="absolute inset-0">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-1 h-1 bg-[#1DB954] rounded-full"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        }}
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.2, 0.8]
        }}
        transition={{
          duration: Math.random() * 3 + 2,
          repeat: Infinity,
          delay: Math.random() * 2
        }}
      />
    ))}
  </div>

  {/* Texto com animação */}
  <motion.p
    className="text-sm text-[#ffffff] relative z-10 font-jura"
    initial={{ scale: 0.8 }}
    animate={{ scale: 1 }}
    transition={{ 
      type: "spring",
      stiffness: 100,
      damping: 10,
      repeatType: "mirror"
    }}
  >
    © {new Date().getFullYear()} Víctor Santucci. Todos os direitos reservados.
  </motion.p>

  {/* Efeito de borda animada */}
  <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#1DB954] to-transparent animate-pulse" />
</motion.footer>
    </div>
  );
}