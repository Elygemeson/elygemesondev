'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Toast from './components/Toast';
import Navbar from './components/Navbar';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // ── Efeito 3D Tilt para os cards de projetos ──────────────────
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('[data-proj-tilt]');

    const onMove = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const rect = card.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);
      card.style.transform = `perspective(850px) rotateX(${-dy * 9}deg) rotateY(${dx * 9}deg) scale(1.03)`;
      card.style.transition = 'transform 0.08s ease';
    };

    const onLeave = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      card.style.transform = 'perspective(850px) rotateX(0deg) rotateY(0deg) scale(1)';
      card.style.transition = 'transform 0.55s cubic-bezier(.23,1.2,.32,1)';
    };

    const onClick = (e: MouseEvent) => {
      const card = e.currentTarget as HTMLElement;
      const pulse = card.dataset.projPulse ?? 'green';
      const cls = `proj-pulse-${pulse}`;
      card.classList.add(cls);
      setTimeout(() => card.classList.remove(cls), 450);
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', onMove);
      card.addEventListener('mouseleave', onLeave);
      card.addEventListener('click', onClick);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', onMove);
        card.removeEventListener('mouseleave', onLeave);
        card.removeEventListener('click', onClick);
      });
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const tecnologias = [
    { name: 'HTML5',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3',        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React',       icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js',     icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS',icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Python',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'GitHub',      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
  ];

  const servicos = [
    {
      title: 'Landing Pages',
      description: 'Criação de Landing Pages otimizadas para conversão e vendas',
      backgroundImage: '/imagens/imagens_lps/landingpage.png',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Sites Institucionais',
      description: 'Desenvolvimento de Sites Institucionais que transmitem organização e credibilidade',
      backgroundImage: '/imagens/imagens_cronoar/inscriçõescronoar.png',
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Soluções SaaS',
      description: 'Soluções SaaS para empresas, focadas em eficiência e escalabilidade',
      backgroundImage: '/imagens/imagens_confinar_saas/confinartelaestoque.png',
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const projetos = [
    {
      name: 'SGA Agro',
      slug: 'sga-agro',
      description: 'Sistema de gerenciamento agrícola focado em perdas durante a safra e plantio. SaaS em ascensão com feedbacks positivos de especialistas.',
      isPrivate: false,
      link: 'https://sgaagro.com.br',
      mainImage: '/imagens/imagens_sgaagro/home.png',
      tags: ['SaaS', 'Next.js', 'Agro'],
      tagColors: ['green', 'blue', 'green'] as const,
      accent: 'green',
      codeSnippet: ['const safra = await', ' agro.colheita', ' .calcularPerdas();'],
    },
    {
      name: 'Cronoar',
      slug: 'cronoar',
      description: 'Sistema desenvolvido para a empresa Cronoar, com gerenciamento de competições esportivas, inscrições e resultados.',
      isPrivate: false,
      mainImage: '/imagens/imagens_cronoar/bannercronoar.png',
      tags: ['Fullstack', 'React', 'Node.js'],
      tagColors: ['red', 'blue', 'blue'] as const,
      accent: 'red',
      codeSnippet: ['await API.rankings', ' .sync({ live:', ' true });'],
    },
    {
      name: 'Confinar',
      slug: 'confinar',
      description: 'Sistema SaaS completo para gestão e controle de estoque, com interface moderna e intuitiva.',
      isPrivate: true,
      badgeText: 'Em desenvolvimento',
      mainImage: '/imagens/imagens_confinar_saas/bannerpc.png',
      tags: ['SaaS', 'Next.js', 'PostgreSQL'],
      tagColors: ['green', 'blue', 'blue'] as const,
      accent: 'green',
      codeSnippet: ['const db = await', ' prisma.estoque', ' .findMany();'],
    },
    {
      name: 'PAA',
      slug: 'paa',
      description: 'Sistema para o Estado da Paraíba para controle do Programa PAA Leite. Registra operações de entrega, recebimento e gestão de usuários.',
      isPrivate: true,
      mainImage: '/imagens/imagens_paa/dashboard.png',
      tags: ['Gov', 'Fullstack', 'REST'],
      tagColors: ['red', 'green', 'blue'] as const,
      accent: 'red',
      codeSnippet: [],
    },
    {
      name: 'Gerador de Relatórios',
      slug: 'gerador-relatorios',
      description: 'Sistema completo para geração de relatórios de desempenho com dashboard interativo, desenvolvido para o Estado da Paraíba.',
      isPrivate: true,
      mainImage: '/imagens/imagens_gerador_relatorios/teladedashboard.png',
      tags: ['Gov', 'Python', 'Dashboard'],
      tagColors: ['blue', 'green', 'blue'] as const,
      accent: 'blue',
      codeSnippet: ['report.generate(', ' { format: "pdf",', ' signed: true });'],
    },
  ];

  // Cores dos tags
  const tagStyle = (color: 'green' | 'blue' | 'red') => {
    const map = {
      green: { color: 'var(--proj-accent)',  border: 'rgba(0,245,196,.3)',  bg: 'rgba(0,245,196,.07)'  },
      blue:  { color: 'var(--proj-accent2)', border: 'rgba(77,108,255,.3)', bg: 'rgba(77,108,255,.07)' },
      red:   { color: 'var(--proj-accent3)', border: 'rgba(255,60,110,.3)', bg: 'rgba(255,60,110,.07)' },
    };
    return map[color];
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden">
      {/* Navbar */}
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden pt-20 sm:pt-6"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="/imagens/fundo/fundobanner.jfif"
            alt="Fundo do banner"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minHeight: '100vh' }}
          />
          <div className="absolute inset-0 bg-black/70 z-10" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10" />
        </div>

        <div className="absolute inset-0 z-[1] opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <div className="absolute top-40 right-20 w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }} />
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto w-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`text-center lg:text-left ${isVisible ? 'animate-fade-in-left' : 'opacity-0'} mt-8 sm:mt-0`}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ely Gemeson Dev
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
                Desenvolvedor Web Especializado em <span className="section-title-accent font-medium">Soluções Digitais</span>
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Transformando ideias em realidade através de código limpo, design moderno e soluções inovadoras.
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
                {tecnologias.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="w-12 h-12 bg-[#1a1a1a] rounded-lg p-2 border border-gray-800 hover:border-blue-500 transition-smooth hover:scale-110"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className={`w-full h-full object-contain ${tech.name === 'React' || tech.name === 'GitHub' ? 'filter brightness-0 invert' : ''}`}
                    />
                  </div>
                ))}
                <div className="w-12 h-12 bg-[#1a1a1a] rounded-lg p-2 border border-gray-800 hover:border-blue-500 transition-smooth hover:scale-110" title="Inglês - CNA">
                  <img src="https://flagcdn.com/w40/us.png" alt="Inglês" className="w-full h-full object-contain" />
                </div>
              </div>

              <button
                onClick={() => scrollToSection('sobre')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-smooth hover:scale-105 shadow-lg shadow-blue-500/50"
              >
                Saiba Mais
              </button>
            </div>

            <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse" />
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <Image src="/imagens/fotosdo_ElyDev/foto-Ely.jpg" alt="Ely Gemeson Dev" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SEÇÃO SOBRE MIM — mesmo padrão visual (fundo preto + header tech)
          ══════════════════════════════════════════════════════════ */}
      <section id="sobre" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          {/* Header (mesmo padrão Contato / Projetos) */}
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="proj-mono text-[11px] tracking-[0.2em] uppercase mb-3 flex items-center gap-3" style={{ color: 'var(--proj-accent)' }}>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--proj-accent)' }} />
                apresentação
              </p>
              <h2 className="section-title text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                Sobre <span className="section-title-accent">Mim</span>
              </h2>
            </div>
            <span className="proj-mono text-[11px] tracking-widest" style={{ color: 'var(--proj-muted)' }}>
              // um pouco da minha história
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
            <div className="contato-card rounded-sm p-8 flex flex-col">
              <p className="proj-mono mb-4" style={{ fontSize: 10, color: 'var(--proj-muted)', letterSpacing: '0.2em' }}>// quem sou</p>
              <div className="space-y-5 text-base leading-relaxed flex-1" style={{ color: 'var(--proj-muted)' }}>
                <p>Olá! Sou <span className="section-title-accent font-semibold">Ely Gemeson Dev</span>, um desenvolvedor web apaixonado por criar soluções digitais inovadoras e de alta qualidade. atuo como <span className="section-title-accent font-semibold">programador</span>, oferecendo serviços de desenvolvimento web de excelência.</p>
                <p>Sou <span className="section-title-accent font-semibold">formado em Análise e Desenvolvimento de Sistemas</span>, o que me proporciona uma base sólida não apenas em programação, mas também em compreender profundamente os problemas e necessidades dos clientes.</p>
                <p>Além de programar, gosto de entender o problema por completo, analisando os requisitos que o sistema ou profissional precisa, e então trazer a solução mais adequada.</p>
                <p>Com experiência em desenvolvimento full stack, especializo-me em transformar ideias complexas em aplicações web modernas, escaláveis e intuitivas. Se você busca um <span className="section-title-accent font-semibold">desenvolvedor web</span>, estou pronto para ajudar.</p>
              </div>
            </div>
            <div className="flex justify-center items-stretch">
              <div className="sobre-img-card rounded-sm overflow-hidden relative w-full max-w-md min-h-[320px]">
                <Image src="/imagens/fotosdo_ElyDev/imagem_Ely com Equipe.jpeg" alt="Ely Gemeson Dev com equipe" fill className="object-cover opacity-90" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                  <p className="proj-mono text-xs" style={{ color: 'var(--proj-accent)', letterSpacing: '0.15em' }}>// Ely com equipe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tecnologias ────────────────────────────────────────── */}
      <section id="tecnologias" className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000000] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="section-title text-4xl sm:text-5xl text-center mb-16 text-white">Tecnologias que <span className="section-title-accent">Domino</span></h2>
          <div className="relative">
            <div className="overflow-hidden">
              <div className="tech-slider flex gap-6">
                {[...tecnologias, ...tecnologias].map((tech, index) => (
                  <div
                    key={`tech-${index}`}
                    className="group relative bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-smooth card-hover flex-shrink-0 w-[200px]"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-[#121212] rounded-lg p-3 group-hover:scale-110 transition-smooth">
                        <img src={tech.icon} alt={tech.name} className={`w-full h-full object-contain ${tech.name === 'React' || tech.name === 'GitHub' ? 'filter brightness-0 invert' : ''}`} />
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{tech.name}</h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SEÇÃO O QUE EU OFEREÇO — mesmo padrão (fundo preto + header tech)
          ══════════════════════════════════════════════════════════ */}
      <section id="servicos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          {/* Header (mesmo padrão Sobre / Contato / Projetos) */}
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="proj-mono text-[11px] tracking-[0.2em] uppercase mb-3 flex items-center gap-3" style={{ color: 'var(--proj-accent)' }}>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--proj-accent)' }} />
                serviços
              </p>
              <h2 className="section-title text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                O Que Eu <span className="section-title-accent">Ofereço</span>
              </h2>
            </div>
            <span className="proj-mono text-[11px] tracking-widest" style={{ color: 'var(--proj-muted)' }}>
              // o que posso fazer por você
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={servico.title}
                className="servico-card contato-card group relative rounded-sm overflow-hidden min-h-[280px] flex flex-col justify-end"
              >
                <div className="absolute inset-0 z-0">
                  <Image src={servico.backgroundImage} alt={servico.title} fill className="object-cover opacity-25 transition-opacity duration-300 group-hover:opacity-35" />
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0c1020 35%, transparent 70%)' }} />
                  <div className="absolute inset-0 opacity-60" style={{ background: 'var(--proj-surface)' }} />
                </div>
                <div className="relative z-10 p-6">
                  <p className="proj-mono mb-2" style={{ fontSize: 10, color: 'var(--proj-muted)', letterSpacing: '0.2em' }}>// 0{index + 1}</p>
                  <h3 className="proj-mono text-xl font-bold mb-3 text-white tracking-tight">{servico.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--proj-muted)' }}>{servico.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SEÇÃO MINHA FORMAÇÃO — mesmo padrão (fundo preto + header tech)
          ══════════════════════════════════════════════════════════ */}
      <section id="formacao" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          {/* Header (mesmo padrão das outras seções) */}
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="proj-mono text-[11px] tracking-[0.2em] uppercase mb-3 flex items-center gap-3" style={{ color: 'var(--proj-accent)' }}>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--proj-accent)' }} />
                formação
              </p>
              <h2 className="section-title text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                Minha <span className="section-title-accent">Formação</span>
              </h2>
            </div>
            <span className="proj-mono text-[11px] tracking-widest" style={{ color: 'var(--proj-muted)' }}>
              // trajetória acadêmica
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                logo: '/imagens/imagens_escolas/unipe.png', alt: 'UNIPÊ',
                title: 'Graduado em Análise e Desenvolvimento de Sistemas',
                org: 'Centro Universitário de João Pessoa', period: 'Período: 2023 - 2025',
                desc: 'Formação sólida em desenvolvimento de software, arquitetura de sistemas, banco de dados e engenharia de software.',
                backTitle: 'Análise e Desenvolvimento de Sistemas',
                skills: ['Programação e Lógica','Arquitetura de Sistemas','Banco de Dados (SQL, NoSQL)','Engenharia de Software','Metodologias Ágeis','Análise de Requisitos'],
              },
              {
                logo: '/imagens/imagens_escolas/logo-devmedia.png', alt: 'DevMedia',
                title: 'Desenvolvedor Front End', org: 'DevMedia', period: 'Certificação Profissional',
                desc: 'Especialização em desenvolvimento front-end com foco em React, JavaScript avançado e melhores práticas de UX.',
                backTitle: 'Desenvolvedor Front End',
                skills: ['React e Componentes','JavaScript Avançado (ES6+)','HTML5 e CSS3','Responsive Design','UX/UI Design','Performance e Otimização'],
              },
              {
                logo: '/imagens/imagens_escolas/imagem ECIT joão da matta.png', alt: 'ECIT',
                title: 'Técnico em Manutenção e Suporte em Informática',
                org: 'ECIT João da Matta', period: 'Período: 2020 - 2022',
                desc: 'Formação técnica em manutenção de hardware, suporte técnico, redes de computadores e resolução de problemas.',
                backTitle: 'Técnico em Informática',
                skills: ['Manutenção de Hardware','Suporte Técnico','Redes de Computadores','Troubleshooting','Sistemas Operacionais','Segurança da Informação'],
              },
              {
                logo: '/imagens/imagens_escolas/udemy.png', alt: 'Udemy',
                title: 'Desenvolvedor Python', org: 'Udemy', period: 'Certificação Online',
                desc: 'Especialização em desenvolvimento Python com Django, Flask e melhores práticas de orientação a objetos.',
                backTitle: 'Desenvolvedor Python',
                skills: ['Python e Sintaxe Avançada','Django Framework','Flask Framework','Programação Orientada a Objetos','APIs REST','Web Scraping'],
              },
              {
                logo: '/imagens/imagens_escolas/cna.jpg', alt: 'CNA',
                title: 'Inglês', org: 'CNA', period: 'Certificação de Idioma',
                desc: 'Formação em língua inglesa para comunicação fluente, documentação técnica e projetos internacionais.',
                backTitle: 'Inglês',
                skills: ['Inglês Fluente','Leitura Técnica','Comunicação Profissional','Compreensão de Documentação','Projetos Internacionais','Pronúncia Técnica'],
              },
            ].map((item) => (
              <div key={item.alt} className="flip-card formacao-flip h-[400px]">
                <div className="flip-card-inner h-full">
                  <div className="flip-card-front formacao-card-front rounded-sm p-6">
                    <div className="flex flex-col items-center text-center gap-5 h-full justify-center">
                      <div className="relative w-28 h-28 rounded-sm flex items-center justify-center p-3 formacao-logo-box">
                        <Image src={item.logo} alt={item.alt} fill className="object-contain p-2" />
                      </div>
                      <div className="w-full">
                        <p className="proj-mono text-[10px] mb-2" style={{ color: 'var(--proj-muted)', letterSpacing: '0.15em' }}>// {item.alt}</p>
                        <h3 className="proj-mono text-base font-bold mb-2 text-white tracking-tight">{item.title}</h3>
                        <p className="proj-mono text-sm mb-2" style={{ color: 'var(--proj-muted)' }}>{item.org}</p>
                        <p className="proj-mono text-xs mb-3 font-medium section-title-accent">{item.period}</p>
                        <p className="text-xs leading-relaxed" style={{ color: 'var(--proj-muted)' }}>{item.desc}</p>
                      </div>
                    </div>
                  </div>
                  <div className="flip-card-back formacao-card-back rounded-sm p-6 flex flex-col justify-center items-center text-center">
                    <p className="proj-mono text-[10px] mb-2 text-white/70" style={{ letterSpacing: '0.2em' }}>// habilidades</p>
                    <h3 className="proj-mono text-lg font-bold mb-4 text-white tracking-tight">{item.backTitle}</h3>
                    <div className="space-y-3 text-white/90 w-full">
                      <p className="proj-mono text-xs font-semibold">Habilidades Desenvolvidas:</p>
                      <ul className="text-xs space-y-2 text-left proj-mono">
                        {item.skills.map(s => <li key={s} className="flex items-center gap-2"><span style={{ color: 'var(--proj-accent)' }}>•</span> {s}</li>)}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SEÇÃO PROJETOS — Bento Grid 3D
          ══════════════════════════════════════════════════════════ */}
      <section id="projetos" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000] relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">

          {/* Header */}
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="proj-mono text-[11px] tracking-[0.2em] uppercase mb-3 flex items-center gap-3" style={{ color: 'var(--proj-accent)' }}>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--proj-accent)' }} />
                seleção
              </p>
              <h2 className="section-title text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                Meus{' '}
                <span className="section-title-accent">Projetos</span>
              </h2>
            </div>
            <span className="proj-mono text-[11px] tracking-widest" style={{ color: 'var(--proj-muted)' }}>
              // 05 projetos selecionados
            </span>
          </div>

          {/* ── Bento Grid ─────────────────────────────────────── */}
          <div className="proj-grid">

            {/* Card 01 — Featured (7 colunas) */}
            {(() => {
              const p = projetos[0];
              const ts = tagStyle;
              return (
                <a
                  href={`/projetos/${p.slug}`}
                  data-proj-tilt
                  data-proj-pulse={p.accent}
                  className={`proj-card proj-card-line proj-card-glow proj-col-7 relative overflow-hidden rounded-sm cursor-pointer`}
                  style={{
                    minHeight: 320,
                    background: 'var(--proj-surface)',
                    border: '1px solid var(--proj-border)',
                    display: 'block',
                    textDecoration: 'none',
                  }}
                >
                  {/* BG imagem */}
                  <div className="absolute inset-0">
                    <Image src={p.mainImage} alt={p.name} fill className="object-cover opacity-20 transition-all duration-500" style={{ transform: 'scale(1)' }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0c1020 40%, transparent)' }} />
                  </div>

                  {/* BG radial */}
                  <div className="proj-bg-card-1 absolute inset-0 pointer-events-none" />

                  {/* Código snippet */}
                  {p.codeSnippet.length > 0 && (
                    <div className="proj-code-snippet proj-mono absolute top-5 right-14 text-right leading-relaxed z-10 pointer-events-none" style={{ fontSize: 10, color: 'var(--proj-muted)' }}>
                      {p.codeSnippet.map((l, i) => <span key={i}>{l}{i < p.codeSnippet.length - 1 && <br />}</span>)}
                    </div>
                  )}

                  {/* Seta */}
                  <div
                    className="proj-arrow proj-arrow-green absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-sm z-20"
                    style={{ border: '1px solid var(--proj-border)', color: 'var(--proj-muted)', background: 'rgba(6,8,16,.6)', fontSize: 14 }}
                  >↗</div>

                  {/* Badge */}
                  {p.isPrivate && (
                    <div className="proj-badge-amber absolute top-5 left-5 z-20">{p.badgeText ?? 'Privado'}</div>
                  )}

                  {/* Conteúdo */}
                  <div className="relative z-10 flex flex-col justify-end p-7" style={{ minHeight: 320 }}>
                    <p className="proj-mono mb-1" style={{ fontSize: 10, color: 'var(--proj-muted)', letterSpacing: '0.2em' }}>// 01</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {p.tags.map((tag, ti) => {
                        const s = ts(p.tagColors[ti]);
                        return (
                          <span key={tag} className="proj-mono px-2 py-0.5 rounded-sm" style={{ fontSize: 9, letterSpacing: '.12em', color: s.color, border: `1px solid ${s.border}`, background: s.bg }}>{tag}</span>
                        );
                      })}
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight leading-tight mb-2 text-white">{p.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--proj-muted)', lineHeight: 1.6, maxWidth: 480 }}>{p.description}</p>
                  </div>
                </a>
              );
            })()}

            {/* Card 02 (5 colunas) */}
            {(() => {
              const p = projetos[1];
              const ts = tagStyle;
              return (
                <a
                  href={`/projetos/${p.slug}`}
                  data-proj-tilt
                  data-proj-pulse={p.accent}
                  className="proj-card proj-card-line proj-card-line-red proj-card-glow-red proj-col-5 relative overflow-hidden rounded-sm cursor-pointer"
                  style={{ minHeight: 320, background: 'var(--proj-surface)', border: '1px solid var(--proj-border)', display: 'block', textDecoration: 'none' }}
                >
                  <div className="absolute inset-0">
                    <Image src={p.mainImage} alt={p.name} fill className="object-cover opacity-20 transition-all duration-500" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0c1020 40%, transparent)' }} />
                  </div>
                  <div className="proj-bg-card-2 absolute inset-0 pointer-events-none" />
                  {p.codeSnippet.length > 0 && (
                    <div className="proj-code-snippet proj-mono absolute top-5 right-14 text-right leading-relaxed z-10 pointer-events-none" style={{ fontSize: 10, color: 'var(--proj-muted)' }}>
                      {p.codeSnippet.map((l, i) => <span key={i}>{l}{i < p.codeSnippet.length - 1 && <br />}</span>)}
                    </div>
                  )}
                  <div className="proj-arrow proj-arrow-red absolute top-5 right-5 w-9 h-9 flex items-center justify-center rounded-sm z-20" style={{ border: '1px solid var(--proj-border)', color: 'var(--proj-muted)', background: 'rgba(6,8,16,.6)', fontSize: 14 }}>↗</div>
                  <div className="relative z-10 flex flex-col justify-end p-7" style={{ minHeight: 320 }}>
                    <p className="proj-mono mb-1" style={{ fontSize: 10, color: 'var(--proj-muted)', letterSpacing: '0.2em' }}>// 02</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {p.tags.map((tag, ti) => { const s = ts(p.tagColors[ti]); return <span key={tag} className="proj-mono px-2 py-0.5 rounded-sm" style={{ fontSize: 9, letterSpacing: '.12em', color: s.color, border: `1px solid ${s.border}`, background: s.bg }}>{tag}</span>; })}
                    </div>
                    <h3 className="text-2xl font-extrabold tracking-tight leading-tight mb-2 text-white">{p.name}</h3>
                    <p className="text-sm" style={{ color: 'var(--proj-muted)', lineHeight: 1.6 }}>{p.description}</p>
                  </div>
                </a>
              );
            })()}

            {/* Cards 03, 04, 05 — linha inferior (4 colunas cada) */}
            {projetos.slice(2).map((p, i) => {
              const num = i + 3;
              const bgClass = [`proj-bg-card-3`, `proj-bg-card-4`, `proj-bg-card-5`][i];
              const lineClass = i === 1 ? '' : i === 0 ? 'proj-card-line-blue' : 'proj-card-line-red';
              const glowClass = i === 1 ? 'proj-card-glow' : i === 0 ? 'proj-card-glow-blue' : 'proj-card-glow-red';
              const arrowClass = i === 1 ? 'proj-arrow-green' : i === 0 ? 'proj-arrow-blue' : 'proj-arrow-red';

              return (
                <a
                  key={p.slug}
                  href={`/projetos/${p.slug}`}
                  data-proj-tilt
                  data-proj-pulse={p.accent}
                  className={`proj-card proj-card-line ${lineClass} ${glowClass} proj-col-4 relative overflow-hidden rounded-sm cursor-pointer`}
                  style={{ minHeight: 270, background: 'var(--proj-surface)', border: '1px solid var(--proj-border)', display: 'block', textDecoration: 'none' }}
                >
                  <div className="absolute inset-0">
                    <Image src={p.mainImage} alt={p.name} fill className="object-cover opacity-15 transition-all duration-500" />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #0c1020 50%, transparent)' }} />
                  </div>
                  <div className={`${bgClass} absolute inset-0 pointer-events-none`} />
                  {p.codeSnippet.length > 0 && (
                    <div className="proj-code-snippet proj-mono absolute top-4 right-14 text-right leading-relaxed z-10 pointer-events-none" style={{ fontSize: 9, color: 'var(--proj-muted)' }}>
                      {p.codeSnippet.map((l, li) => <span key={li}>{l}{li < p.codeSnippet.length - 1 && <br />}</span>)}
                    </div>
                  )}
                  <div className={`proj-arrow ${arrowClass} absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-sm z-20`} style={{ border: '1px solid var(--proj-border)', color: 'var(--proj-muted)', background: 'rgba(6,8,16,.6)', fontSize: 13 }}>↗</div>
                  {p.isPrivate && <div className="proj-badge-amber absolute top-4 left-4 z-20">{p.badgeText ?? 'Privado'}</div>}
                  {!p.isPrivate && p.link && <div className="proj-badge-live absolute top-4 left-4 z-20">Live ↗</div>}
                  <div className="relative z-10 flex flex-col justify-end p-6" style={{ minHeight: 270 }}>
                    <p className="proj-mono mb-1" style={{ fontSize: 10, color: 'var(--proj-muted)', letterSpacing: '0.2em' }}>// 0{num}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {p.tags.map((tag, ti) => { const s = tagStyle(p.tagColors[ti]); return <span key={tag} className="proj-mono px-2 py-0.5 rounded-sm" style={{ fontSize: 9, letterSpacing: '.12em', color: s.color, border: `1px solid ${s.border}`, background: s.bg }}>{tag}</span>; })}
                    </div>
                    <h3 className="text-lg font-extrabold tracking-tight leading-tight mb-2 text-white">{p.name}</h3>
                    <p className="text-xs" style={{ color: 'var(--proj-muted)', lineHeight: 1.6, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{p.description}</p>
                  </div>
                </a>
              );
            })}

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          SEÇÃO CONTATO — visual tech (alinhado à seção Projetos)
          ══════════════════════════════════════════════════════════ */}
      <section id="contato" className="py-24 px-4 sm:px-6 lg:px-8 bg-[#000000]">
        <div className="max-w-6xl mx-auto">
          {/* Header (mesmo padrão da seção Projetos) */}
          <div className="flex items-end justify-between flex-wrap gap-6 mb-16">
            <div>
              <p className="proj-mono text-[11px] tracking-[0.2em] uppercase mb-3 flex items-center gap-3" style={{ color: 'var(--proj-accent)' }}>
                <span style={{ display: 'inline-block', width: 20, height: 1, background: 'var(--proj-accent)' }} />
                canal
              </p>
              <h2 className="section-title text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                Entre em <span className="section-title-accent">Contato</span>
              </h2>
            </div>
            <span className="proj-mono text-[11px] tracking-widest" style={{ color: 'var(--proj-muted)' }}>
              // envie uma mensagem
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card Formulário — destaque visual para deixar óbvio que é um formulário */}
            <div className="contato-form-card contato-card rounded-sm p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="contato-form-badge proj-mono text-[10px] tracking-[0.2em] uppercase px-2 py-1 rounded-sm">Formulário</span>
                <span className="proj-mono text-xs" style={{ color: 'var(--proj-muted)', letterSpacing: '0.1em' }}>// preencha e envie</span>
              </div>
              <h3 className="proj-mono text-xl font-bold text-white tracking-tight mb-6">Envie sua mensagem</h3>
              <form
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('loading');
                  setShowToast(false);
                  const formData = new FormData(e.currentTarget);
                  const data = { nome: formData.get('nome'), email: formData.get('email'), mensagem: formData.get('mensagem') };
                  try {
                    const response = await fetch('/api/contato', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
                    const result = await response.json();
                    if (response.ok) {
                      setFormStatus('idle'); setToastType('success'); setToastMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.'); setShowToast(true);
                      (e.target as HTMLFormElement).reset();
                    } else {
                      setFormStatus('idle'); setToastType('error'); setToastMessage(result.error || 'Erro ao enviar mensagem.'); setShowToast(true);
                    }
                  } catch {
                    setFormStatus('idle'); setToastType('error'); setToastMessage('Erro ao enviar mensagem. Tente novamente.'); setShowToast(true);
                  }
                }}
              >
                <div>
                  <label htmlFor="nome" className="contato-label block mb-2">nome</label>
                  <input type="text" id="nome" name="nome" required className="contato-input w-full px-4 py-3 rounded-sm" placeholder="seu_nome" />
                </div>
                <div>
                  <label htmlFor="email" className="contato-label block mb-2">email</label>
                  <input type="email" id="email" name="email" required className="contato-input w-full px-4 py-3 rounded-sm" placeholder="seu@email.com" />
                </div>
                <div>
                  <label htmlFor="mensagem" className="contato-label block mb-2">mensagem</label>
                  <textarea id="mensagem" name="mensagem" rows={5} required className="contato-input w-full px-4 py-3 rounded-sm resize-none" placeholder="sua_mensagem..." />
                </div>
                <button type="submit" disabled={formStatus === 'loading'} className="contato-btn w-full px-6 py-4 rounded-sm text-sm uppercase tracking-wider">
                  {formStatus === 'loading' ? 'Enviando...' : 'Enviar →'}
                </button>
              </form>
            </div>

            {/* Coluna: Redes + Contato direto */}
            <div className="space-y-8">
              <div className="contato-card rounded-sm p-8">
                <p className="proj-mono mb-1" style={{ fontSize: 10, color: 'var(--proj-muted)', letterSpacing: '0.2em' }}>// redes</p>
                <h3 className="proj-mono text-lg font-bold mb-6 text-white tracking-tight">Redes Sociais</h3>
                <div className="space-y-3">
                  {[
                    { href: 'https://www.instagram.com/elygemeson2/', label: 'Instagram', sub: '@elygemeson2', icon: <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /> },
                    { href: 'https://www.linkedin.com/in/ely-gemeson-amancio-pereira-224732248/', label: 'LinkedIn', sub: 'Conecte-se comigo', icon: <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /> },
                    { href: 'https://github.com/Elygemeson', label: 'GitHub', sub: 'Veja meus projetos', icon: <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /> },
                  ].map(item => (
                    <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="contato-link-item flex items-center gap-4 p-4 rounded-sm group">
                      <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,245,196,.08)', border: '1px solid rgba(0,245,196,.2)' }}>
                        <svg className="w-5 h-5 text-white group-hover:opacity-100 opacity-90" style={{ color: 'var(--proj-accent)' }} fill="currentColor" viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      <div className="min-w-0">
                        <p className="contato-link-accent proj-mono text-sm font-semibold text-white transition-colors">{item.label}</p>
                        <p className="proj-mono text-xs truncate" style={{ color: 'var(--proj-muted)' }}>{item.sub}</p>
                      </div>
                      <span className="proj-mono ml-auto text-xs" style={{ color: 'var(--proj-muted)' }}>↗</span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="contato-card rounded-sm p-8">
                <p className="proj-mono mb-1" style={{ fontSize: 10, color: 'var(--proj-muted)', letterSpacing: '0.2em' }}>// direto</p>
                <h3 className="proj-mono text-lg font-bold mb-6 text-white tracking-tight">Contato Direto</h3>
                <div className="space-y-3">
                  <a href="mailto:elygemeson@gmail.com" className="contato-link-item flex items-center gap-4 p-4 rounded-sm group">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,245,196,.08)', border: '1px solid rgba(0,245,196,.2)' }}>
                      <svg className="w-5 h-5" style={{ color: 'var(--proj-accent)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div className="min-w-0"><p className="contato-link-accent proj-mono text-sm font-semibold text-white">Email</p><p className="proj-mono text-xs truncate" style={{ color: 'var(--proj-muted)' }}>elygemeson@gmail.com</p></div>
                    <span className="proj-mono ml-auto text-xs" style={{ color: 'var(--proj-muted)' }}>↗</span>
                  </a>
                  <a href="https://wa.me/558393756946" target="_blank" rel="noopener noreferrer" className="contato-link-item flex items-center gap-4 p-4 rounded-sm group">
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,245,196,.08)', border: '1px solid rgba(0,245,196,.2)' }}>
                      <svg className="w-5 h-5" style={{ color: 'var(--proj-accent)' }} fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.978 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
                    </div>
                    <div className="min-w-0"><p className="contato-link-accent proj-mono text-sm font-semibold text-white">WhatsApp</p><p className="proj-mono text-xs truncate" style={{ color: 'var(--proj-muted)' }}>(83) 9375-6946</p></div>
                    <span className="proj-mono ml-auto text-xs" style={{ color: 'var(--proj-muted)' }}>↗</span>
                  </a>
                  <div className="flex items-center gap-4 p-4 rounded-sm" style={{ background: 'rgba(6,8,16,.4)', border: '1px solid var(--proj-border)' }}>
                    <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(0,245,196,.06)', border: '1px solid rgba(0,245,196,.15)' }}>
                      <svg className="w-5 h-5" style={{ color: 'var(--proj-muted)' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div><p className="proj-mono text-sm font-semibold text-white">Localização</p><p className="proj-mono text-xs" style={{ color: 'var(--proj-muted)' }}>Paraíba, Brazil</p></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-[#121212] border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Ely Gemeson Dev. Todos os direitos reservados.</p>
        </div>
      </footer>

      <Toast message={toastMessage} type={toastType} isVisible={showToast} onClose={() => setShowToast(false)} />
    </div>
  );
}