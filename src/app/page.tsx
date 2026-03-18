"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiMenu,
  FiX,
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiMail,
  FiTool,
  FiZap,
  FiUsers,
  FiMapPin,
  FiMessageCircle,
  FiLayers,
  FiArrowLeft,
  FiArrowRight,
} from "react-icons/fi";
import {
  FaJs,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaJava,
  FaLinux,
} from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiSequelize,
  SiTypeorm,
  SiMysql,
  SiMongodb,
  SiAndroid,
  SiTailwindcss,
  SiSpring,
} from "react-icons/si";
import { AiFillInstagram, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const navSections = [
  { id: "home", label: "home", icon: <FiHome className="text-sm" /> },
  { id: "sobre", label: "sobre", icon: <FiUser className="text-sm" /> },
  {
    id: "habilidades",
    label: "habilidades",
    icon: <FiTool className="text-sm" />,
  },
  {
    id: "projects",
    label: "projetos",
    icon: <FiFolder className="text-sm" />,
  },
  { id: "contact", label: "contato", icon: <FiMail className="text-sm" /> },
];

const habilidades = [
  {
    name: "JavaScript",
    icon: <FaJs />,
    color: "#F7DF1E",
    description:
      "Manipulação de DOM, ES6+, async/await e integrações com APIs.",
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
    description:
      "Tipagem forte, interfaces, DTOs e organização de código escalável.",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#68A063",
    description:
      "Criação de APIs REST, autenticação e regras de negócio no backend.",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
    description:
      "Componentização, hooks, gerenciamento de estado e interfaces reativas.",
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    color: "#111827",
    description:
      "SSR/SSG, rotas, performance e construção de aplicações web modernas.",
  },
  {
    name: "NestJS",
    icon: <SiNestjs />,
    color: "#E0234E",
    description:
      "Arquitetura modular, controllers/services e APIs robustas com TypeScript.",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
    color: "#336791",
    description:
      "Modelagem relacional, consultas SQL e otimização básica de dados.",
  },
  {
    name: "Docker",
    icon: <FaDocker />,
    color: "#2496ED",
    description:
      "Containerização de aplicações e ambientes padronizados com Compose.",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F05032",
    description:
      "Versionamento com branches, pull requests e fluxo colaborativo.",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#06B6D4",
    description:
      "Construção de UI responsiva com utilitários e design consistente.",
  },
  {
    name: "Prisma",
    icon: <SiPrisma />,
    color: "#0F172A",
    description:
      "Modelagem de schema, migrations e acesso seguro ao banco de dados.",
  },
  {
    name: "Sequelize",
    icon: <SiSequelize />,
    color: "#3B82F6",
    description:
      "ORM para modelagem, relacionamentos e manipulação de dados SQL.",
  },
  {
    name: "TypeORM",
    icon: <SiTypeorm />,
    color: "#EF4444",
    description:
      "Entidades, repositories e integração de banco em aplicações Node.",
  },
  {
    name: "MySQL",
    icon: <SiMysql />,
    color: "#4479A1",
    description:
      "Estruturação de banco relacional e queries para sistemas web.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#16A34A",
    description: "Modelagem orientada a documentos e operações CRUD em NoSQL.",
  },
  {
    name: "React Native",
    icon: <SiAndroid />,
    color: "#22C55E",
    description:
      "Apps mobile com componentes reutilizáveis e integração com APIs.",
  },
  {
    name: "Linux",
    icon: <FaLinux />,
    color: "#111827",
    description:
      "Uso de terminal, comandos essenciais e ambiente de desenvolvimento em Linux.",
  },
  {
    name: "Java",
    icon: <FaJava />,
    color: "#EA580C",
    description:
      "POO, coleções, boas práticas e base para desenvolvimento corporativo.",
    learning: true,
  },
  {
    name: "Spring Boot",
    icon: <SiSpring />,
    color: "#6DB33F",
    description:
      "Construção de APIs REST, injeção de dependência e camadas de serviço.",
    learning: true,
  },
  {
    name: "Padrões de Software",
    icon: <FiTool />,
    color: "#0284C7",
    description:
      "Aplicação de SOLID, Repository, Factory e Strategy no dia a dia.",
  },
  {
    name: "Arquitetura de Software",
    icon: <FiLayers />,
    color: "#0F766E",
    description:
      "Clean Architecture, separação de camadas e organização escalável.",
  },
];

const projects = [
  {
    title: "MovieDataX",
    image: "/moviedatax.png",
    description:
      "Hub inteligente para explorar filmes e o que realmente importa no cinema.",
    technologies: [
      "TMDB API",
      "Genkit",
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "React",
    ],
    demo: "https://moviedatax.vercel.app/",
    code: "https://moviedatax.vercel.app/",
  },
  {
    title: "LogicBridge - Conversor Lógico",
    image: "/logicbridge.png",
    description:
      "Transforme frases do português em fórmulas lógicas e vice-versa com uma ponte inteligente.",
    technologies: [
      "Next.js",
      "Supabase",
      "OAuth",
      "Tailwind",
      "Gemini",
      "Genkit",
    ],
    demo: "https://logicbridge.vercel.app/",
    code: "https://github.com/trabalhoMarcio/logicBridge",
  },
  {
    title: "PetExpress - Sistema Pet Shop",
    image: "/petexpress.png",
    description:
      "Plataforma full-stack para gestão de Pet Shops com agendamento e controle de clientes.",
    technologies: ["Node.js", "React", "MySQL", "Docker", "Sequelize", "Vite"],
    demo: "https://petexpress-typeblast.vercel.app/",
    code: "https://github.com/orgs/TypeBlast/repositories",
  },
  {
    title: "EcoCash - Controle Financeiro",
    image: "/ecocash.png",
    description:
      "Aplicação web para gestão financeira pessoal com autenticação e sincronização em nuvem.",
    technologies: [
      "Next.js",
      "Firebase",
      "Tailwind CSS",
      "Firestore",
      "Vercel",
      "Google Auth",
    ],
    demo: "https://ecocash.vercel.app/",
    code: "https://github.com/VictorSantuccii/ecocash-firebase",
  },
  {
    title: "Aston Martin Concept",
    image: "/astonmartin.png",
    description: "Website conceitual para marca de automóveis de luxo.",
    technologies: ["Next.js", "React", "Tailwind CSS", "React-icons", "Vercel"],
    demo: "https://astonmartin-santucci.vercel.app/",
    code: "https://github.com/VictorSantuccii/astonmartin",
  },
];

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/VictorSantuccii",
    icon: <AiFillGithub className="text-xl" />,
    accent: "from-slate-800 to-slate-600",
    soft: "bg-slate-50 border-slate-200 text-slate-700",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/victorsantuccii",
    icon: <AiFillLinkedin className="text-xl" />,
    accent: "from-sky-600 to-blue-500",
    soft: "bg-sky-50 border-sky-200 text-sky-700",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/victorsantuccii",
    icon: <AiFillInstagram className="text-xl" />,
    accent: "from-pink-500 to-fuchsia-500",
    soft: "bg-pink-50 border-pink-200 text-pink-700",
  },
];

const reveal = {
  initial: { opacity: 0, y: 26 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.55 },
};

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <motion.div className="mb-8 md:mb-10 text-center" {...reveal}>
      <p className="mx-auto mb-2 md:mb-3 inline-flex rounded-full border border-[#7DD3FC]/60 bg-white/70 px-3 md:px-4 py-1 text-[10px] md:text-xs font-geist-mono uppercase tracking-[0.16em] md:tracking-[0.2em] text-[#0369A1] shadow-[0_6px_14px_rgba(14,165,164,0.12)]">
        {eyebrow}
      </p>
      <h2 className="font-jura text-2xl sm:text-3xl font-semibold text-slate-800 md:text-4xl leading-tight px-2">
        {title}
      </h2>
    </motion.div>
  );
}

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const typingMessages = [
    "Olá, meu nome é Victor Santucci </>",
    "Desenvolvedor Full Stack apaixonado por tecnologia",
    "Criando experiências web modernas e performáticas",
    "Vamos transformar ideias em projetos incríveis",
  ];

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    const offset = 110;
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: sectionTop - offset, behavior: "smooth" });

    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const nome = String(formData.get("nome") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const metodo = String(formData.get("metodo") ?? "whatsapp");

    if (metodo === "whatsapp") {
      const mensagemWhatsApp = `Olá, meu nome é ${nome} (${email}). ${message}`;
      const mensagemCodificada = encodeURIComponent(mensagemWhatsApp);
      window.open(
        `https://wa.me/5516991440887?text=${mensagemCodificada}`,
        "_blank",
      );
    } else {
      const assunto = encodeURIComponent(`Contato de ${nome}`);
      const corpo = encodeURIComponent(
        `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${message}`,
      );
      window.location.href = `mailto:victorsantuccii@gmail.com?subject=${assunto}&body=${corpo}`;
    }

    form.reset();
  };

  useEffect(() => {
    const currentMessage = typingMessages[messageIndex];
    const typingSpeed = isDeleting ? 38 : 78;

    let timeoutId: ReturnType<typeof setTimeout>;

    if (!isDeleting && typedText === currentMessage) {
      timeoutId = setTimeout(() => setIsDeleting(true), 1400);
    } else if (isDeleting && typedText === "") {
      setIsDeleting(false);
      setMessageIndex((prev) => (prev + 1) % typingMessages.length);
    } else {
      timeoutId = setTimeout(() => {
        const nextLength = typedText.length + (isDeleting ? -1 : 1);
        setTypedText(currentMessage.slice(0, nextLength));
      }, typingSpeed);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, isDeleting, messageIndex]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 18);

      const marker = window.scrollY + 150;
      let current = "home";

      navSections.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el && marker >= el.offsetTop) {
          current = section.id;
        }
      });

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F6F8FC] text-slate-800 pt-20 md:pt-24">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="hidden md:block absolute -top-32 -left-20 h-[30rem] w-[30rem] rounded-full bg-[#0EA5A4]/14 blur-3xl animate-pulse-slow" />
        <div className="hidden md:block absolute top-1/3 -right-20 h-[28rem] w-[28rem] rounded-full bg-[#38BDF8]/12 blur-3xl animate-pulse-slower" />
        <div className="hidden md:block absolute -bottom-24 left-1/3 h-[22rem] w-[22rem] rounded-full bg-[#0EA5A4]/10 blur-3xl animate-float-soft" />
        <div className="hidden md:block absolute inset-0 opacity-[0.45] bg-[radial-gradient(circle_at_10%_20%,rgba(14,165,164,0.10),transparent_32%),radial-gradient(circle_at_85%_78%,rgba(56,189,248,0.09),transparent_30%)] animate-drift-slow" />
        <div className="hidden md:block absolute inset-0 opacity-[0.28] bg-[linear-gradient(rgba(14,165,164,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.07)_1px,transparent_1px)] bg-[size:56px_56px] animate-tech-grid" />
        <div className="hidden md:block absolute inset-0 opacity-[0.22] bg-[radial-gradient(circle_at_center,rgba(14,165,164,0.16)_0%,transparent_45%),radial-gradient(circle_at_center,rgba(2,132,199,0.10)_0%,transparent_62%)] animate-orbit-soft" />
        <div className="hidden md:block absolute inset-0 opacity-[0.18] bg-[linear-gradient(120deg,transparent_22%,rgba(14,165,164,0.22)_38%,transparent_58%)] animate-scan-slow" />
        <div className="hidden md:block absolute inset-0 opacity-[0.20] bg-[radial-gradient(circle,rgba(14,165,164,0.26)_1px,transparent_1.5px)] bg-[size:34px_34px] animate-node-drift" />
        <div className="hidden md:block absolute inset-0 opacity-[0.16] bg-[linear-gradient(90deg,transparent_0%,rgba(56,189,248,0.20)_45%,transparent_80%)] animate-circuit-sweep" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(14,165,164,0.12),transparent_40%),linear-gradient(180deg,#F9FBFE_0%,#EFF5FC_45%,#F8FAFD_100%)]" />
      </div>

      <motion.nav
        className="fixed top-2.5 md:top-4 left-0 right-0 z-[80] px-3 md:px-8"
        initial={{ opacity: 0, y: -24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative mx-auto max-w-7xl overflow-visible">
          <div className="relative rounded-[2.6rem] overflow-hidden shadow-[0_18px_36px_rgba(15,23,42,0.16)]">
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                scrolled
                  ? "bg-white/60 backdrop-blur-2xl"
                  : "bg-white/42 backdrop-blur-xl"
              }`}
            />
            <div className="absolute inset-0 rounded-inherit border border-white/70 pointer-events-none" />
            <div className="absolute inset-0 rounded-inherit bg-gradient-to-b from-white/70 via-white/25 to-transparent pointer-events-none" />

            <div className="relative flex items-center justify-between py-2.5 md:py-3 px-3.5 md:px-7">
              <button
                onClick={() => scrollToSection("home")}
                className="group relative flex items-center gap-2"
                aria-label="Ir para início"
              >
                <span className="text-base sm:text-lg md:text-xl font-jura font-semibold bg-gradient-to-r from-[#0F766E] to-[#0369A1] bg-clip-text text-transparent">
                  Víctor Santucci
                </span>
                <span className="text-[#0EA5A4] text-sm">{"</>"}</span>
                <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-gradient-to-r from-[#0EA5A4] to-[#38BDF8] group-hover:w-full transition-all duration-500" />
              </button>

              <div className="hidden md:flex items-center">
                <div className="rounded-full border border-slate-200/80 bg-white/50 backdrop-blur-sm px-2.5 py-1 flex items-center">
                  {navSections.map((section, index) => (
                    <div key={section.id} className="flex items-center">
                      <button
                        onClick={() => scrollToSection(section.id)}
                        className={`relative overflow-hidden px-3.5 lg:px-5 py-2 rounded-full font-jura text-xs lg:text-sm uppercase tracking-[0.12em] lg:tracking-wide transition-all duration-300 ${
                          activeSection === section.id
                            ? "text-white"
                            : "text-slate-700 hover:text-[#0F766E]"
                        }`}
                      >
                        {activeSection === section.id && (
                          <motion.span
                            layoutId="nav-active-capsule"
                            className="absolute inset-0 rounded-full bg-gradient-to-r from-[#0EA5A4] to-[#0284C7] shadow-[0_8px_18px_rgba(14,165,164,0.25)]"
                            transition={{
                              type: "spring",
                              stiffness: 420,
                              damping: 32,
                            }}
                          />
                        )}
                        <span className="relative z-10 inline-flex items-center gap-1.5">
                          {section.icon}
                          <span>{section.label}</span>
                        </span>
                      </button>
                      {index < navSections.length - 1 && (
                        <span className="mx-1 h-4 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-[#0EA5A4]" />
                <span className="h-2 w-2 rounded-full bg-[#38BDF8]" />
                <span className="h-2 w-2 rounded-full bg-slate-400" />
              </div>

              <div className="md:hidden">
                <button
                  onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                  className="relative rounded-xl border border-slate-200/80 bg-white/55 p-2.5 text-slate-700 backdrop-blur-sm"
                  aria-label="Abrir menu"
                  aria-expanded={isMobileMenuOpen}
                >
                  {isMobileMenuOpen ? (
                    <FiX className="text-xl" />
                  ) : (
                    <FiMenu className="text-xl" />
                  )}
                </button>
              </div>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="md:hidden absolute top-[calc(100%+0.7rem)] left-0 right-0 z-[90] rounded-2xl overflow-hidden border border-white/70 shadow-[0_18px_36px_rgba(15,23,42,0.16)]"
              >
                <div className="absolute inset-0 bg-white/65 backdrop-blur-xl" />
                <div className="relative p-3 space-y-2 bg-white/70 backdrop-blur-xl">
                  {navSections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => scrollToSection(section.id)}
                      className={`w-full rounded-xl px-4 py-3 text-left font-jura uppercase tracking-wide transition-all duration-300 ${
                        activeSection === section.id
                          ? "bg-gradient-to-r from-[#0EA5A4] to-[#0284C7] text-white"
                          : "text-slate-700 hover:bg-white"
                      }`}
                    >
                      <span className="inline-flex items-center gap-2">
                        {section.icon}
                        <span>{section.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      <motion.section
        id="home"
        className="relative min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-6rem)] flex items-center"
        {...reveal}
      >
        <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
          <motion.h1
            className="mx-auto max-w-4xl text-2xl sm:text-3xl md:text-5xl font-jura font-light text-slate-900 min-h-[4rem] sm:min-h-[4.5rem] md:min-h-[6rem] leading-tight"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-[#0F766E] to-[#0369A1] bg-clip-text text-transparent">
              {typedText}
            </span>
            <span className="typing-caret text-[#0EA5A4]">|</span>
          </motion.h1>

          <motion.div
            className="relative mx-auto mt-6 md:mt-8 h-32 w-32 sm:h-36 sm:w-36 md:h-44 md:w-44"
            initial={{ opacity: 0, scale: 0.86 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#0EA5A4]/70 via-[#38BDF8]/70 to-[#0EA5A4]/70 opacity-70 blur-sm" />
            <div className="absolute inset-0 rounded-full bg-white/90" />
            <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-[0_16px_36px_rgba(14,165,164,0.24)]">
              <img
                src="/victor.jpeg"
                alt="Víctor Santucci"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            className="mt-6 md:mt-8 text-sm sm:text-base md:text-lg font-jura text-slate-700"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2">
              <FiMapPin className="text-[#0EA5A4]" />
              Franca - São Paulo | Brasil
            </span>
          </motion.div>

          <motion.a
            href="https://github.com/VictorSantuccii"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative mt-6 md:mt-8 inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-[#111827] to-[#334155] px-5 sm:px-6 md:px-7 py-2.5 md:py-3 text-sm md:text-base font-jura text-white shadow-[0_12px_24px_rgba(15,23,42,0.28)] ring-1 ring-white/30"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.5 }}
            whileHover={{ scale: 1.04 }}
          >
            <span className="absolute inset-0 bg-[linear-gradient(120deg,transparent_25%,rgba(255,255,255,0.28)_45%,transparent_70%)] translate-x-[-130%] group-hover:translate-x-[130%] transition-transform duration-700" />
            <AiFillGithub className="relative z-10 text-xl" />
            <span className="relative z-10">Ver meu GitHub</span>
          </motion.a>
        </div>
      </motion.section>

      <motion.section id="sobre" className="py-14 md:py-20 px-4" {...reveal}>
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Sobre" title="Quem Sou Eu" />

          <motion.div
            className="mx-auto max-w-4xl text-left md:text-justify text-slate-700 leading-relaxed text-sm sm:text-base space-y-4 md:space-y-6"
            {...reveal}
          >
            <p>
              Sou estudante de Engenharia de Software na Uni-FACEF e atuo como
              Desenvolvedor Full Stack, com foco em aplicações bem estruturadas,
              organização de código e arquitetura de sistemas. Desde 2023, venho
              direcionando minha evolução para construção de software com base
              sólida e boas práticas consistentes.
            </p>
            <p>
              Trabalho com TypeScript, Node.js, NestJS e Next.js, aplicando
              arquitetura modular, separação de responsabilidades, padronização
              de projetos, modelagem de banco, autenticação com JWT e integração
              entre serviços. Tenho perfil colaborativo, aprendo rápido e busco
              contribuir em projetos que exigem autonomia técnica,
              responsabilidade real e entrega consistente.
            </p>
          </motion.div>

          <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                icon: <FiCode className="text-3xl" />,
                title: "Código Limpo",
                description:
                  "Comprometido com legibilidade, manutenibilidade e arquitetura bem estruturada.",
                color: "#334155",
              },
              {
                icon: <FiTool className="text-3xl" />,
                title: "Resolução de Problemas",
                description:
                  "Análise e decomposição de desafios para soluções eficientes e escaláveis.",
                color: "#CA8A04",
              },
              {
                icon: <FiZap className="text-3xl" />,
                title: "Performance",
                description:
                  "Identificação de gargalos e aplicação de melhorias em frontend e backend.",
                color: "#0284C7",
              },
              {
                icon: <FiUsers className="text-3xl" />,
                title: "Trabalho em Equipe",
                description:
                  "Comunicação clara, colaboração e experiência com fluxo ágil de desenvolvimento.",
                color: "#0F766E",
              },
            ].map((item, index) => (
              <motion.article
                key={item.title}
                className="group relative rounded-2xl border border-slate-200/90 bg-white/80 p-4 md:p-6 shadow-[0_10px_26px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_28px_rgba(14,165,164,0.16)]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0EA5A4] via-[#38BDF8] to-transparent opacity-80" />
                <div
                  className="mb-3 md:mb-4 inline-flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 shadow-[0_5px_14px_rgba(15,23,42,0.06)]"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </div>
                <h3
                  className="font-geist-mono text-base md:text-lg font-semibold mb-2"
                  style={{ color: item.color }}
                >
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        id="habilidades"
        className="py-14 md:py-20 px-4"
        {...reveal}
      >
        <div className="mx-auto max-w-6xl">
          <SectionHeading eyebrow="Tecnologias" title="Habilidades" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {habilidades.map((skill, index) => (
              <motion.article
                key={skill.name}
                className="group relative rounded-xl border border-slate-200/90 bg-white/85 p-4 md:p-6 text-center shadow-[0_8px_22px_rgba(15,23,42,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_12px_24px_rgba(14,165,164,0.14)]"
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
              >
                <div className="pointer-events-none absolute inset-x-2 top-2 h-6 rounded-full bg-gradient-to-r from-[#0EA5A4]/10 via-[#38BDF8]/10 to-transparent blur-lg" />
                <div
                  className="relative z-10 mx-auto mb-3 inline-flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-2xl border border-slate-200 bg-white text-3xl md:text-4xl shadow-[0_6px_16px_rgba(15,23,42,0.06)]"
                  style={{ color: skill.color }}
                >
                  {skill.icon}
                </div>
                <h3
                  className="relative z-10 font-geist-mono text-sm font-semibold uppercase tracking-wide leading-tight"
                  style={{ color: skill.color }}
                >
                  {skill.name}
                </h3>
                <p className="relative z-10 mt-2 text-xs text-slate-600 leading-relaxed min-h-[2.8rem]">
                  {skill.description}
                </p>
                {skill.learning && (
                  <span className="relative z-10 mt-3 inline-flex rounded-full border border-amber-300/80 bg-amber-50 px-2.5 py-1 text-[10px] font-geist-mono uppercase tracking-wide text-amber-700">
                    Em aprendizado
                  </span>
                )}
              </motion.article>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section id="projects" className="py-14 md:py-20 px-4" {...reveal}>
        <div className="mx-auto max-w-7xl">
          <SectionHeading eyebrow="Portfólio" title="Projetos" />

          <div className="mb-5 md:mb-6 flex items-center justify-between gap-3">
            <p className="text-xs sm:text-sm font-geist-mono text-slate-500 leading-relaxed">
              Projetos reais com foco em produto, performance e experiência.
            </p>
            <div className="hidden sm:flex items-center gap-2">
              <button
                aria-label="Projeto anterior"
                className="projects-prev projects-nav-btn inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-600 shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:text-[#0EA5A4]"
              >
                <FiArrowLeft className="text-lg" />
              </button>
              <button
                aria-label="Próximo projeto"
                className="projects-next projects-nav-btn inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/90 text-slate-600 shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:text-[#0EA5A4]"
              >
                <FiArrowRight className="text-lg" />
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{ prevEl: ".projects-prev", nextEl: ".projects-next" }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 1.15, spaceBetween: 16 },
              900: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 2, spaceBetween: 24 },
            }}
            className="swiper-projects"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={project.title}>
                <motion.article
                  className="group relative h-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-[0_12px_28px_rgba(15,23,42,0.08)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-[0_18px_36px_rgba(14,165,164,0.16)]"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0EA5A4] via-[#38BDF8] to-transparent" />
                  <div className="relative h-52 sm:h-56 md:h-64">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/45 via-slate-900/10 to-transparent" />
                  </div>
                  <div className="space-y-3 md:space-y-4 p-4 md:p-6">
                    <h3 className="font-jura text-xl md:text-2xl font-bold text-slate-800 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="font-geist-mono text-sm md:text-[15px] leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-[#99F6E4] bg-[#ECFEFF] px-3 py-1 text-xs font-medium text-[#0F766E]"
                        >
                          #{tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex flex-wrap gap-2.5 pt-2">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#0EA5A4] to-[#0284C7] px-3.5 md:px-4 py-2 text-xs sm:text-sm font-jura text-white shadow-[0_8px_18px_rgba(14,165,164,0.20)] transition-all hover:brightness-105"
                      >
                        <FiZap className="text-sm" /> Demo
                      </a>
                      <a
                        href={project.code}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg border border-[#0EA5A4]/70 bg-white px-3.5 md:px-4 py-2 text-xs sm:text-sm font-jura text-[#0F766E] transition-all hover:bg-[#ECFEFF]"
                      >
                        <FiCode className="text-sm" /> Código
                      </a>
                    </div>
                  </div>
                </motion.article>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>

      <motion.section id="contact" className="py-14 md:py-20 px-4" {...reveal}>
        <div className="mx-auto max-w-2xl">
          <SectionHeading eyebrow="Contato" title="Vamos Conversar" />

          <motion.form
            className="space-y-5 md:space-y-7 rounded-2xl border border-slate-200 bg-white/80 p-4 sm:p-5 md:p-8 shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.5 }}
          >
            {[
              {
                field: "nome",
                label: "Nome",
                icon: <FiUser className="text-[#0EA5A4] mr-2" />,
              },
              {
                field: "email",
                label: "E-mail",
                icon: <FiMail className="text-[#0EA5A4] mr-2" />,
              },
              {
                field: "message",
                label: "Mensagem",
                icon: <FiMessageCircle className="text-[#0EA5A4] mr-2" />,
              },
            ].map(({ field, label, icon }, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
              >
                <label
                  htmlFor={field}
                  className="mb-2 ml-1 block text-sm font-medium text-slate-700"
                >
                  <span className="flex items-center">
                    {icon}
                    {label}
                  </span>
                </label>
                {field === "message" ? (
                  <textarea
                    id={field}
                    name={field}
                    rows={4}
                    className="w-full rounded-lg border border-slate-300 bg-white/90 px-4 py-3 text-slate-800 outline-none transition-all focus:border-[#0EA5A4] focus:ring-4 focus:ring-[#0EA5A4]/20"
                    placeholder="Escreva sua mensagem"
                    required
                  />
                ) : (
                  <input
                    id={field}
                    name={field}
                    type={field === "email" ? "email" : "text"}
                    className="w-full rounded-lg border border-slate-300 bg-white/90 px-4 py-3 text-slate-800 outline-none transition-all focus:border-[#0EA5A4] focus:ring-4 focus:ring-[#0EA5A4]/20"
                    placeholder={field === "email" ? "Seu e-mail" : "Seu nome"}
                    required
                  />
                )}
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ delay: 0.25, duration: 0.4 }}
            >
              <label
                htmlFor="metodo"
                className="mb-2 ml-1 block text-sm font-medium text-slate-700"
              >
                <span className="flex items-center">
                  <FiTool className="text-[#0EA5A4] mr-2" />
                  Método de Contato
                </span>
              </label>
              <select
                id="metodo"
                name="metodo"
                className="w-full rounded-lg border border-slate-300 bg-white/90 px-4 py-3 text-slate-800 outline-none transition-all focus:border-[#0EA5A4] focus:ring-4 focus:ring-[#0EA5A4]/20"
                required
              >
                <option value="whatsapp">WhatsApp</option>
                <option value="email">E-mail</option>
              </select>
            </motion.div>

            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.32, duration: 0.4 }}
            >
              <button
                type="submit"
                className="rounded-lg bg-gradient-to-r from-[#0EA5A4] to-[#0284C7] px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base font-jura text-white shadow-[0_10px_22px_rgba(14,165,164,0.24)] transition-all hover:scale-[1.02]"
              >
                Enviar Mensagem
              </button>
            </motion.div>

            <motion.div
              className="pt-3 md:pt-5"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: 0.38, duration: 0.45 }}
            >
              <div className="mb-3 text-center">
                <p className="text-xs font-geist-mono uppercase tracking-[0.16em] text-slate-500">
                  Redes Sociais
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 md:gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative overflow-hidden rounded-xl border px-4 py-3 text-sm font-geist-mono shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition-all hover:-translate-y-0.5 ${social.soft}`}
                  >
                    <span
                      className={`absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r ${social.accent}`}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {social.icon}
                      <span>{social.name}</span>
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.form>
        </div>
      </motion.section>

      <motion.aside
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.35 }}
      >
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group inline-flex items-center justify-center rounded-xl border px-3 py-2.5 text-sm font-geist-mono shadow-[0_8px_18px_rgba(15,23,42,0.08)] transition-all hover:-translate-x-1 ${social.soft}`}
            aria-label={social.name}
          >
            <span>{social.icon}</span>
          </a>
        ))}
      </motion.aside>

      <motion.footer
        className="relative overflow-hidden border-t border-slate-200 bg-white/60 py-6 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.22),transparent_55%)] animate-footer-glow" />
        <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-[linear-gradient(120deg,transparent_10%,rgba(255,255,255,0.7)_45%,transparent_85%)] blur-sm animate-footer-shine" />
        <p className="relative z-10 font-jura text-sm text-slate-600">
          © {new Date().getFullYear()} Víctor Santucci. Todos os direitos
          reservados.
        </p>
      </motion.footer>

      <style jsx global>{`
        html {
          scroll-behavior: smooth;
          scrollbar-width: thin;
          scrollbar-color: rgba(14, 165, 164, 0.7) rgba(226, 232, 240, 0.65);
        }

        body {
          overflow-x: hidden;
        }

        ::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }

        ::-webkit-scrollbar-track {
          background: linear-gradient(
            180deg,
            rgba(226, 232, 240, 0.75),
            rgba(241, 245, 249, 0.9)
          );
          border-radius: 999px;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(
            180deg,
            rgba(14, 165, 164, 0.85),
            rgba(2, 132, 199, 0.85)
          );
          border-radius: 999px;
          border: 2px solid rgba(241, 245, 249, 0.95);
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(
            180deg,
            rgba(15, 118, 110, 0.95),
            rgba(3, 105, 161, 0.95)
          );
        }

        .rounded-inherit {
          border-radius: inherit;
        }

        .swiper-projects {
          padding-bottom: 40px;
        }

        .swiper-projects .swiper-button-next,
        .swiper-projects .swiper-button-prev {
          display: none;
        }

        .swiper-projects .swiper-pagination-bullet {
          background: #94a3b8;
          opacity: 0.5;
        }

        .swiper-projects .swiper-pagination-bullet-active {
          background: #0ea5a4;
          opacity: 1;
        }

        .projects-nav-btn.swiper-button-disabled {
          opacity: 0.45;
          cursor: not-allowed;
          transform: none;
          box-shadow: none;
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.05;
          }
          50% {
            opacity: 0.12;
          }
        }

        @keyframes pulse-slower {
          0%,
          100% {
            opacity: 0.04;
          }
          50% {
            opacity: 0.1;
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 9s ease-in-out infinite;
        }

        .animate-pulse-slower {
          animation: pulse-slower 12s ease-in-out infinite;
        }

        @keyframes float-soft {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }
          50% {
            transform: translate3d(0, -16px, 0) scale(1.04);
          }
        }

        @keyframes drift-slow {
          0% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(-10px, 8px, 0);
          }
          100% {
            transform: translate3d(0, 0, 0);
          }
        }

        .animate-float-soft {
          animation: float-soft 14s ease-in-out infinite;
        }

        .animate-drift-slow {
          animation: drift-slow 18s ease-in-out infinite;
        }

        @keyframes tech-grid {
          0% {
            background-position:
              0 0,
              0 0;
          }
          100% {
            background-position:
              56px 56px,
              56px 56px;
          }
        }

        @keyframes orbit-soft {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(5deg) scale(1.03);
          }
        }

        @keyframes scan-slow {
          0% {
            transform: translateX(-22%);
            opacity: 0.08;
          }
          50% {
            opacity: 0.22;
          }
          100% {
            transform: translateX(22%);
            opacity: 0.08;
          }
        }

        .animate-tech-grid {
          animation: tech-grid 28s linear infinite;
        }

        .animate-orbit-soft {
          animation: orbit-soft 16s ease-in-out infinite;
        }

        .animate-scan-slow {
          animation: scan-slow 14s ease-in-out infinite;
        }

        @keyframes node-drift {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
            opacity: 0.08;
          }
          50% {
            transform: translate3d(8px, -6px, 0);
            opacity: 0.15;
          }
        }

        @keyframes circuit-sweep {
          0% {
            transform: translateX(-38%);
            opacity: 0;
          }
          35% {
            opacity: 0.12;
          }
          100% {
            transform: translateX(38%);
            opacity: 0;
          }
        }

        .animate-node-drift {
          animation: node-drift 20s ease-in-out infinite;
        }

        .animate-circuit-sweep {
          animation: circuit-sweep 18s ease-in-out infinite;
        }

        @keyframes caret-blink {
          0%,
          45% {
            opacity: 1;
          }
          50%,
          100% {
            opacity: 0;
          }
        }

        .typing-caret {
          margin-left: 0.15rem;
          animation: caret-blink 0.9s steps(1) infinite;
        }

        @keyframes footer-glow {
          0%,
          100% {
            opacity: 0.35;
            transform: translateY(0);
          }
          50% {
            opacity: 0.7;
            transform: translateY(-2px);
          }
        }

        @keyframes footer-shine {
          0% {
            transform: translateX(-12%);
            opacity: 0;
          }
          18% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.25;
          }
          100% {
            transform: translateX(420%);
            opacity: 0;
          }
        }

        .animate-footer-glow {
          animation: footer-glow 6.5s ease-in-out infinite;
        }

        .animate-footer-shine {
          animation: footer-shine 5.8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
