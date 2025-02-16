"use client";

import { FaExternalLinkAlt } from "react-icons/fa";
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion } from "framer-motion";
import { FaJs, FaNodeJs, FaReact, FaDocker, FaGitAlt } from "react-icons/fa";
import { SiTypescript, SiNextdotjs, SiNestjs, SiPostgresql, SiPrisma, SiSequelize } from "react-icons/si";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub, AiFillWechat } from "react-icons/ai";

// Lista de projetos
const projects = [
  { title: "Projeto 1", description: "Descrição do projeto 1." },
  { title: "Projeto 2", description: "Descrição do projeto 2." },
  { title: "Projeto 3", description: "Descrição do projeto 3." },
];

// Lista de habilidades com ícones
const skills = [
  { name: "JavaScript", icon: <FaJs />, color: "white" },
  { name: "TypeScript", icon: <SiTypescript />, color: "white" },
  { name: "Node.js", icon: <FaNodeJs />, color: "white" },
  { name: "React", icon: <FaReact />, color: "white" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "white" },
  { name: "Tailwind CSS", icon: <div className="bg-white text-black p-2 rounded">T</div>, color: "black" }, // Cor do hover ajustada
  { name: "NestJS", icon: <SiNestjs />, color: "white" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "white" },
  { name: "Docker", icon: <FaDocker />, color: "white" },
  { name: "Git", icon: <FaGitAlt />, color: "white" },
  { name: "Prisma", icon: <SiPrisma />, color: "white" },
  { name: "Sequelize", icon: <SiSequelize />, color: "white" },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSubmit = (e:any) => {
    e.preventDefault();
    e.target.reset(); 
  };


  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Navbar */}
      <motion.nav
  className="flex font-jura justify-between items-center p-6 bg-[#0000006f] fixed top-0 left-0 right-0 z-50 shadow-lg backdrop-blur-md"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <motion.div
    className="flex items-center space-x-2 text-3xl font-bold font-jura text-white"
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6 }}
  >
    {/* Efeito de digitação no nome */}
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
            {/* Efeito de brilho nas letras */}
           
          </motion.span>
        ))}
      </motion.div>
      
      {/* Efeito de borda animada */}
      <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#1DB954] to-cyan-400 group-hover:w-full transition-all duration-500" />
    </div>

    {/* Tag de fechamento animada */}
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


  {/* Menu Desktop (oculto em mobile) */}
  <div className="hidden lg:flex space-x-8 text-lg">
    {['#sobre', '#skills', '#projects', '#contact'].map((link, index) => (
      <motion.a
        key={index}
        href={link}
        className="relative px-4 py-2 group"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 + index * 0.1 }}
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="relative z-10">
          {(() => {
            switch(link) {
              case '#sobre': return 'Sobre';
              case '#skills': return 'Habilidades';
              case '#projects': return 'Projetos';
              case '#contact': return 'Contato';
            }
          })()}
        </span>
        
        {/* Efeito Hover High-Tech */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,#1DB954_50%,transparent_75%)] bg-[length:400%_400%] opacity-0 group-hover:opacity-100 group-hover:animate-shine" />
        </div>
        
        {/* Borda animada */}
        <div className="absolute inset-0 border border-[#1DB954] rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
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
      
      {/* Efeito de pulsação */}
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
            {['#sobre', '#skills', '#projects', '#contact'].map((link, index) => (
              <motion.a
                key={index}
                href={link}
                className="relative px-4 py-2 group"
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
                  setIsMenuOpen(false);
                }}
              >
                <span className="text-white group-hover:text-[#1DB954] transition-colors">
                  {(() => {
                    switch(link) {
                      case '#sobre': return 'Sobre';
                      case '#skills': return 'Habilidades';
                      case '#projects': return 'Projetos';
                      case '#contact': return 'Contato';
                    }
                  })()}
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
    className="lg:hidden fixed right-4 top-4 flex items-center space-x-4 z-40"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.5 }}
  >
    <a href="https://github.com/VictorSantuccii" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#1DB954]">
      <AiFillGithub />
    </a>
    <a href="https://www.linkedin.com/in/victorsantuccii" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#1DB954]">
      <AiFillLinkedin />
    </a>
    <a href="https://www.instagram.com/victorsantuccii" target="_blank" rel="noopener noreferrer" className="text-xl text-white hover:text-[#1DB954]">
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
  {/* Efeito de rede neural */}
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
    
    {/* Conexões entre partículas */}
    <div className="absolute inset-0">
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-[1px] bg-gradient-to-r from-[#1DB954] to-transparent"
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

  {/* Efeito de pulso central */}
  <motion.div
    className="absolute inset-0 flex items-center justify-center"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ duration: 2 }}
  >
    <div className="absolute w-[200%] h-[200%] bg-radial-gradient(circle, #1DB954 0%, transparent 70%) animate-pulse opacity-10" />
  </motion.div>

  {/* Conteúdo principal */}
  {/* Animação de digitação para "Víctor Santucci" */}
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

  {/* Espaço para a foto com animações */}
  <motion.div
    className="w-48 h-48 bg-gray-700 rounded-full mb-12 overflow-hidden relative z-10"
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.8, delay: 1.5 }}
    whileHover={{ scale: 1.1, rotate: 5 }}
  >
    {/* Efeito de brilho neon */}
    <div className="absolute inset-0 rounded-full shadow-[0_0_20px_5px_rgba(29,185,84,0.3)] opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
    
    {/* Efeito de digitalização */}
    <div className="absolute inset-0 bg-[linear-gradient(transparent_95%,#1DB954_98%)] opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
    
    {/* Coloque sua foto aqui */}
    <img
      src="/victor.jpeg"
      alt="Víctor Santucci"
      className="w-full h-full object-cover relative z-10"
    />
  </motion.div>

  {/* Animação de digitação para "Desenvolvedor de Software Full Stack" */}
  <motion.p
    className="text-lg mb-8 relative z-10"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <motion.span className="font-jura"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
    >
      Desenvolvedor de Software Full Stack 
    </motion.span>
  </motion.p>

  {/* Novo Botão GitHub Animado */}
  <motion.a
    href="https://github.com/VictorSantuccii"
    target="_blank"
    rel="noopener noreferrer"
    className="relative overflow-hidden group px-8 py-3 rounded-lg font-jura font-medium bg-gradient-to-r from-[#1DB954]/80 to-[#18a848] text-white flex items-center gap-2"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 25px rgba(29, 185, 84, 0.3)"
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
{/* Seção Sobre Mim */}
<motion.section
  id="sobre"
  className="py-20 bg-[#000000] px-4 relative overflow-hidden"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
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
      className="text-3xl font-jura font-semibold text-center text-[#1DB954] mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Sobre Mim
    </motion.h2>
    
    <motion.div
      className="text-lg font-jura text-justify space-y-6 leading-relaxed"
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
  {/* Efeito de partículas de fundo */}
  <div className="absolute inset-0 overflow-hidden">
    {[...Array(30)].map((_, i) => (
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
  </div>

  <div className="relative z-10">
    <motion.h2
      className="text-3xl font-jura mb-10 font-semibold text-center text-[#1DB954] mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      Habilidades
    </motion.h2>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center mx-auto max-w-6xl px-4 relative z-10">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="relative bg-[#0a0a0a]/90 text-white font-jura py-6 px-6 rounded-lg overflow-hidden group cursor-pointer backdrop-blur-sm"
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
          whileHover={{ 
            y: -15,
            scale: 1.05,
            backgroundColor: "#1c1c1c"
          }}
       
        >
          {/* Efeito de gradiente animado */}
          <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#1DB954_0%,#0F172A_50%,#1DB954_100%)] opacity-0 group-hover:opacity-20 animate-rotate"></div>
          
          {/* Borda sutil */}
          <div className="absolute inset-0 border-2 border-[#1DB954]/10 rounded-lg group-hover:border-[#1DB954]/40 transition-all duration-300"></div>
          
          {/* Conteúdo */}
          <div className="relative z-10 flex flex-col items-center justify-center">
            <div className={`text-5xl mb-2 text-[${skill.color}] group-hover:text-[#1DB954] transition-colors duration-300 relative`}>
              {skill.icon}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-[#1DB954] blur-lg transition-opacity duration-300"></div>
            </div>
            <span className="text-sm font-medium group-hover:text-[#1DB954] transition-colors duration-300 relative">
              {skill.name}
              <span className="absolute -left-1 -right-1 h-[2px] bg-[#1DB954] bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  </div>

  {/* Efeitos de brilho */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl"></div>
    <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#1DB954]/10 rounded-full blur-3xl"></div>
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

  <motion.h2
    className="text-3xl font-jura font-semibold text-center text-[#1DB954] mb-12 relative z-10"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    Projeto Destaque
  </motion.h2>

  <div className="flex justify-center px-4">
    <motion.div
      className="relative w-full max-w-4xl bg-[#1c1c1c]/90 backdrop-blur-lg rounded-2xl overflow-hidden border-2 border-[#1DB954]/30 hover:border-[#1DB954]/60 transition-all duration-500 group"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      whileHover={{ y: -10 }}
    >
      {/* Efeito de brilho */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1DB954_0%,transparent_70%)] opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
      
      {/* Efeito de grade holográfica */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10 mix-blend-overlay"></div>

      <div className="relative z-10 p-8">
        {/* Imagem do projeto */}
        <motion.div
          className="relative rounded-xl overflow-hidden border-2 border-[#1DB954]/30 mb-6"
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
        <div className="space-y-6">
          <motion.h3
            className="text-3xl font-bold text-[#1DB954]"
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
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {['Node.js', 'Javascript', 'MySQL', 'Docker', 'Sequelize'].map((tech, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-[#1DB954]/10 text-[#1DB954] rounded-full text-sm border border-[#1DB954]/30 hover:bg-[#1DB954]/20 transition-all"
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
    className="flex items-center gap-2 px-6 py-3 bg-[#1DB954] text-black rounded-lg font-medium hover:bg-[#18a848] transition-all"
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
            className="absolute w-1 h-1 bg-[#1DB954] rounded-full"
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

        {/* Efeito de circuito eletrônico no fundo */}
        <div className="absolute inset-0 bg-[url('/circuit-board.svg')] opacity-10 animate-pulse"></div>

        <motion.h2
          className="text-3xl font-jura font-semibold text-center text-[#1DB954] mb-8 relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Contato
        </motion.h2>

        <div className="max-w-2xl font-jura mx-auto px-4 relative z-10">
          <motion.form
            className="space-y-8"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {['nome', 'email', 'message'].map((field, index) => (
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
      {{
        nome: 'Nome',
        email: 'E-mail',
        message: 'Mensagem'
      }[field]}
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