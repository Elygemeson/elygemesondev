'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Toast from './components/Toast';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const tecnologias = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg' },
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
      name: 'Confinar',
      slug: 'confinar',
      description: 'Sistema SaaS completo para gestão e controle de estoque, com interface moderna e intuitiva.',
      images: [
        '/imagens/imagens_confinar_saas/bannerpc.png',
        '/imagens/imagens_confinar_saas/teladashboard.png',
        '/imagens/imagens_confinar_saas/cadastrodeitens.png',
        '/imagens/imagens_confinar_saas/confinartelaestoque.png',
        '/imagens/imagens_confinar_saas/teladeloginconfinar.png',
      ],
      mainImage: '/imagens/imagens_confinar_saas/bannerpc.png',
    },
    {
      name: 'Cronoar',
      slug: 'cronoar',
      description: 'Sistema desenvolvido para a empresa Cronoar, com gerenciamento de competições esportivas, inscrições e resultados.',
      images: [
        '/imagens/imagens_cronoar/bannercronoar.png',
        '/imagens/imagens_cronoar/inscriçõescronoar.png',
        '/imagens/imagens_cronoar/resultadoscronoar.png',
        '/imagens/imagens_cronoar/sistemacronoar.png',
        '/imagens/imagens_cronoar/teladeinscreva-secronoar.png',
      ],
      mainImage: '/imagens/imagens_cronoar/bannercronoar.png',
    },
    {
      name: 'Gerador de Relatórios',
      slug: 'gerador-relatorios',
      description: 'Um dos grandes projetos desenvolvidos para o Estado da Paraíba. Sistema completo para geração de relatórios de desempenho com dashboard interativo.',
      images: [
        '/imagens/imagens_gerador_relatorios/teladedashboard.png',
        '/imagens/imagens_gerador_relatorios/formuláriodorelatóriodotanamesa.png',
        '/imagens/imagens_gerador_relatorios/relatóriodedesenpenho.png',
        '/imagens/imagens_gerador_relatorios/sobreoprojeto.png',
      ],
      mainImage: '/imagens/imagens_gerador_relatorios/teladedashboard.png',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white overflow-x-hidden">
      {/* Header/Banner Principal */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Imagem de fundo */}
        <div className="absolute inset-0 z-0">
          {/* Usando img normal para garantir compatibilidade em produção */}
          <img
            src="/imagens/fundo/fundobanner.jfif"
            alt="Fundo do banner"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ minHeight: '100vh' }}
          />
          {/* Overlay escuro para escurecer a imagem e melhorar legibilidade */}
          <div className="absolute inset-0 bg-black/70 z-10"></div>
          {/* Gradiente adicional para suavizar */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80 z-10"></div>
        </div>

        {/* Efeito de partículas de fundo */}
        <div className="absolute inset-0 z-[1] opacity-20">
          <div className="absolute top-20 left-10 w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-40 left-20 w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        </div>

        <div className={`relative z-10 max-w-7xl mx-auto w-full ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Texto e Informações */}
            <div className={`text-center lg:text-left ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Ely Gemeson Dev
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-8 font-light">
                Desenvolvedor Web Especializado em Soluções Digitais
              </p>
              <p className="text-lg text-gray-400 mb-8 max-w-xl mx-auto lg:mx-0">
                Transformando ideias em realidade através de código limpo, design moderno e soluções inovadoras.
              </p>

              {/* Ícones de Tecnologias */}
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
                {/* Bandeira Americana - Inglês */}
                <div
                  className="w-12 h-12 bg-[#1a1a1a] rounded-lg p-2 border border-gray-800 hover:border-blue-500 transition-smooth hover:scale-110"
                  title="Inglês - CNA"
                >
                  <img
                    src="https://flagcdn.com/w40/us.png"
                    alt="Bandeira Americana - Inglês"
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              <button
                onClick={() => scrollToSection('sobre')}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-smooth hover:scale-105 shadow-lg shadow-blue-500/50 hover:shadow-blue-500/70"
              >
                Saiba Mais
              </button>
            </div>

            {/* Foto do Desenvolvedor */}
            <div className={`flex justify-center lg:justify-end ${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-800 shadow-2xl">
                  <Image
                    src="/imagens/fotosdo_ElyDev/foto-Ely.jpg"
                    alt="Ely Gemeson Dev - Desenvolvedor Web"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Seção Sobre Mim */}
      <section
        id="sobre"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Sobre Mim
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-5 text-base text-gray-300 leading-relaxed">
              <p>
                Olá! Sou <span className="text-blue-400 font-semibold">Ely Gemeson Dev</span>, um desenvolvedor web apaixonado por criar soluções digitais inovadoras e de alta qualidade. Atuo como <span className="text-blue-400 font-semibold">programador em João Pessoa, Recife e Mamanguape</span>, oferecendo serviços de desenvolvimento web de excelência.
              </p>
              <p>
                Sou <span className="text-blue-400 font-semibold">formado em Análise e Desenvolvimento de Sistemas</span>, o que me proporciona uma base sólida não apenas em programação, mas também em compreender profundamente os problemas e necessidades dos clientes.
              </p>
              <p>
                Além de programar, gosto de entender o problema por completo, analisando os requisitos que o sistema ou profissional precisa, e então trazer a solução mais adequada. Minha abordagem vai além do código: busco compreender o contexto, identificar necessidades e propor soluções que realmente façam a diferença.
              </p>
              <p>
                Com experiência em desenvolvimento full stack, especializo-me em transformar ideias complexas em aplicações web modernas, escaláveis e intuitivas. Trabalho com as mais recentes tecnologias e frameworks, sempre buscando entregar código limpo, design elegante e experiência de usuário excepcional. Se você busca um <span className="text-blue-400 font-semibold">desenvolvedor web em João Pessoa, Recife ou Mamanguape</span>, estou pronto para ajudar.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md h-80 rounded-2xl overflow-hidden border border-gray-800 shadow-xl">
                <Image
                  src="/imagens/fotosdo_ElyDev/imagem_Ely com Equipe.jpeg"
                  alt="Ely Gemeson Dev com equipe"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Tecnologias */}
      <section
        id="tecnologias"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000000] overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Tecnologias que Domino
          </h2>
          <div className="relative">
            {/* Container com overflow hidden */}
            <div className="overflow-hidden">
              {/* Container deslizante - duplicado para efeito infinito */}
              <div className="tech-slider flex gap-6">
                {/* Primeira cópia das tecnologias */}
                {tecnologias.map((tech, index) => (
                  <div
                    key={`tech-1-${tech.name}`}
                    className="group relative bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-smooth card-hover flex-shrink-0 w-[200px]"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-[#121212] rounded-lg p-3 group-hover:scale-110 transition-smooth">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-full h-full object-contain ${tech.name === 'React' || tech.name === 'GitHub' ? 'filter brightness-0 invert' : ''}`}
                        />
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{tech.name}</h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
                {/* Segunda cópia das tecnologias para efeito infinito */}
                {tecnologias.map((tech, index) => (
                  <div
                    key={`tech-2-${tech.name}`}
                    className="group relative bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-smooth card-hover flex-shrink-0 w-[200px]"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="w-16 h-16 bg-[#121212] rounded-lg p-3 group-hover:scale-110 transition-smooth">
                        <img
                          src={tech.icon}
                          alt={tech.name}
                          className={`w-full h-full object-contain ${tech.name === 'React' || tech.name === 'GitHub' ? 'filter brightness-0 invert' : ''}`}
                        />
                      </div>
                      <h3 className="text-white font-semibold text-sm sm:text-base">{tech.name}</h3>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção O Que Eu Faço */}
      <section
        id="servicos"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            O Que Eu Ofereço
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {servicos.map((servico, index) => (
              <div
                key={servico.title}
                className="relative bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800 hover:border-transparent transition-smooth card-hover group overflow-hidden min-h-[300px]"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Imagem de fundo */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={servico.backgroundImage}
                    alt={servico.title}
                    fill
                    className="object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-70"></div>
                </div>
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4 text-white">{servico.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{servico.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Formação */}
      <section
        id="formacao"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Minha Formação
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Graduação */}
            <div className="flip-card h-[400px]">
              <div className="flip-card-inner h-full">
                <div className="flip-card-front bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-smooth">
                  <div className="flex flex-col items-center text-center gap-5 h-full justify-center">
                    <div className="relative w-32 h-32 bg-[#121212] rounded-xl flex items-center justify-center p-4 border border-gray-700 shadow-lg">
                      <Image
                        src="/imagens/imagens_escolas/unipe.png"
                        alt="Logo Centro Universitário de João Pessoa - UNIPÊ"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        Graduado em Análise e Desenvolvimento de Sistemas
                      </h3>
                      <p className="text-base text-gray-300 mb-2 font-semibold">
                        Centro Universitário de João Pessoa
                      </p>
                      <p className="text-sm text-blue-400 mb-3 font-medium">
                        Período: 2023 - 2025
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Formação sólida em desenvolvimento de software, arquitetura de sistemas, banco de dados, engenharia de software e melhores práticas de programação.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Análise e Desenvolvimento de Sistemas
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p className="text-sm font-semibold">Habilidades Desenvolvidas:</p>
                    <ul className="text-xs space-y-2 text-left">
                      <li>• Programação e Lógica de Programação</li>
                      <li>• Arquitetura de Sistemas</li>
                      <li>• Banco de Dados (SQL, NoSQL)</li>
                      <li>• Engenharia de Software</li>
                      <li>• Metodologias Ágeis</li>
                      <li>• Análise de Requisitos</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* DevMedia */}
            <div className="flip-card h-[400px]">
              <div className="flip-card-inner h-full">
                <div className="flip-card-front bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-smooth">
                  <div className="flex flex-col items-center text-center gap-5 h-full justify-center">
                    <div className="relative w-32 h-32 bg-[#121212] rounded-xl flex items-center justify-center p-4 border border-gray-700 shadow-lg">
                      <Image
                        src="/imagens/imagens_escolas/logo-devmedia.png"
                        alt="Logo DevMedia - Desenvolvedor Front End"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        Desenvolvedor Front End
                      </h3>
                      <p className="text-base text-gray-300 mb-2 font-semibold">
                        DevMedia
                      </p>
                      <p className="text-sm text-blue-400 mb-3 font-medium">
                        Certificação Profissional
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Especialização em desenvolvimento front-end com foco em tecnologias modernas, React, JavaScript avançado e melhores práticas de interface e UX.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Desenvolvedor Front End
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p className="text-sm font-semibold">Habilidades Desenvolvidas:</p>
                    <ul className="text-xs space-y-2 text-left">
                      <li>• React e Componentes</li>
                      <li>• JavaScript Avançado (ES6+)</li>
                      <li>• HTML5 e CSS3</li>
                      <li>• Responsive Design</li>
                      <li>• UX/UI Design</li>
                      <li>• Performance e Otimização</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* ECIT */}
            <div className="flip-card h-[400px]">
              <div className="flip-card-inner h-full">
                <div className="flip-card-front bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-smooth">
                  <div className="flex flex-col items-center text-center gap-5 h-full justify-center">
                    <div className="relative w-32 h-32 bg-[#121212] rounded-xl flex items-center justify-center p-4 border border-gray-700 shadow-lg">
                      <Image
                        src="/imagens/imagens_escolas/imagem ECIT joão da matta.png"
                        alt="Logo ECIT João da Matta - Técnico em Informática"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        Técnico em Manutenção e Suporte em Informática
                      </h3>
                      <p className="text-base text-gray-300 mb-2 font-semibold">
                        ECIT João da Matta
                      </p>
                      <p className="text-sm text-blue-400 mb-3 font-medium">
                        Período: 2020 - 2022
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Formação técnica em manutenção de hardware, suporte técnico, redes de computadores e resolução de problemas em sistemas de informação.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Técnico em Informática
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p className="text-sm font-semibold">Habilidades Desenvolvidas:</p>
                    <ul className="text-xs space-y-2 text-left">
                      <li>• Manutenção de Hardware</li>
                      <li>• Suporte Técnico</li>
                      <li>• Redes de Computadores</li>
                      <li>• Troubleshooting</li>
                      <li>• Sistemas Operacionais</li>
                      <li>• Segurança da Informação</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Udemy - Python */}
            <div className="flip-card h-[400px]">
              <div className="flip-card-inner h-full">
                <div className="flip-card-front bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-smooth">
                  <div className="flex flex-col items-center text-center gap-5 h-full justify-center">
                    <div className="relative w-32 h-32 bg-[#121212] rounded-xl flex items-center justify-center p-4 border border-gray-700 shadow-lg">
                      <Image
                        src="/imagens/imagens_escolas/udemy.png"
                        alt="Logo Udemy - Desenvolvedor Python"
                        fill
                        className="object-contain p-2"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        Desenvolvedor Python
                      </h3>
                      <p className="text-base text-gray-300 mb-2 font-semibold">
                        Udemy
                      </p>
                      <p className="text-sm text-blue-400 mb-3 font-medium">
                        Certificação Online
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Especialização em desenvolvimento Python, incluindo frameworks modernos como Django e Flask, e melhores práticas de programação orientada a objetos.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Desenvolvedor Python
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p className="text-sm font-semibold">Habilidades Desenvolvidas:</p>
                    <ul className="text-xs space-y-2 text-left">
                      <li>• Python e Sintaxe Avançada</li>
                      <li>• Django Framework</li>
                      <li>• Flask Framework</li>
                      <li>• Programação Orientada a Objetos</li>
                      <li>• APIs REST</li>
                      <li>• Web Scraping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* CNA - Inglês */}
            <div className="flip-card h-[400px]">
              <div className="flip-card-inner h-full">
                <div className="flip-card-front bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-smooth">
                  <div className="flex flex-col items-center text-center gap-5 h-full justify-center">
                    <div className="relative w-32 h-32 bg-[#121212] rounded-xl flex items-center justify-center p-4 border border-gray-700 shadow-lg">
                      <Image
                        src="/imagens/imagens_escolas/cna.jpg"
                        alt="Logo CNA - Inglês"
                        fill
                        className="object-contain p-2 rounded-xl"
                      />
                    </div>
                    <div className="w-full">
                      <h3 className="text-lg font-bold mb-2 text-white">
                        Inglês
                      </h3>
                      <p className="text-base text-gray-300 mb-2 font-semibold">
                        CNA
                      </p>
                      <p className="text-sm text-blue-400 mb-3 font-medium">
                        Certificação de Idioma
                      </p>
                      <p className="text-xs text-gray-400 leading-relaxed">
                        Formação em língua inglesa, proporcionando comunicação fluente, compreensão de documentação técnica e capacidade de trabalhar em projetos internacionais.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flip-card-back bg-gradient-to-br from-blue-600 to-cyan-600 rounded-xl p-6 flex flex-col justify-center items-center text-center">
                  <h3 className="text-xl font-bold mb-4 text-white">
                    Inglês
                  </h3>
                  <div className="space-y-3 text-white/90">
                    <p className="text-sm font-semibold">Habilidades Desenvolvidas:</p>
                    <ul className="text-xs space-y-2 text-left">
                      <li>• Inglês Fluente</li>
                      <li>• Leitura Técnica</li>
                      <li>• Comunicação Profissional</li>
                      <li>• Compreensão de Documentação</li>
                      <li>• Trabalho em Projetos Internacionais</li>
                      <li>• Pronúncia e Pronúncia Técnica</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Projetos */}
      <section
        id="projetos"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#121212]"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Meus Projetos
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projetos.map((projeto, index) => (
              <div
                key={projeto.name}
                className="flip-card group"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flip-card-inner">
                  <div className="flip-card-front bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-smooth">
                    <div className="relative h-48 w-full">
                      <Image
                        src={projeto.mainImage}
                        alt={`${projeto.name} - Projeto`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-3 text-white">{projeto.name}</h3>
                      <p className="text-gray-400 mb-4 line-clamp-3">{projeto.description}</p>
                      <p className="text-blue-400 hover:text-blue-300 font-semibold transition-colors cursor-pointer">
                        Entenda mais sobre este projeto →
                      </p>
                    </div>
                  </div>
                  <div className="flip-card-back bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl p-6 flex flex-col justify-center items-center text-center">
                    <h3 className="text-2xl font-bold mb-4 text-white">{projeto.name}</h3>
                    <p className="text-white/90 mb-6">{projeto.description}</p>
                    <a
                      href={`/projetos/${projeto.slug}`}
                      className="px-6 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                    >
                      Saiba Mais
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção Contatos */}
      <section
        id="contato"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-[#000000]"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-white">
            Entre em Contato
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulário */}
            <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
              <form 
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setFormStatus('loading');
                  setShowToast(false);

                  const formData = new FormData(e.currentTarget);
                  const data = {
                    nome: formData.get('nome'),
                    email: formData.get('email'),
                    mensagem: formData.get('mensagem'),
                  };

                  try {
                    const response = await fetch('/api/contato', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(data),
                    });

                    const result = await response.json();

                    if (response.ok) {
                      setFormStatus('idle');
                      setToastType('success');
                      setToastMessage('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                      setShowToast(true);
                      (e.target as HTMLFormElement).reset();
                    } else {
                      setFormStatus('idle');
                      setToastType('error');
                      setToastMessage(result.error || 'Erro ao enviar mensagem. Tente novamente.');
                      setShowToast(true);
                    }
                  } catch (error) {
                    setFormStatus('idle');
                    setToastType('error');
                    setToastMessage('Erro ao enviar mensagem. Tente novamente mais tarde.');
                    setShowToast(true);
                  }
                }}
              >
                <div>
                  <label htmlFor="nome" className="block text-sm font-semibold mb-2 text-gray-300">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    required
                    className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Seu nome"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-semibold mb-2 text-gray-300">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    className="w-full px-4 py-3 bg-[#121212] border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Sua mensagem..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'loading'}
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold text-lg hover:from-blue-500 hover:to-cyan-500 transition-smooth hover:scale-105 shadow-lg shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {formStatus === 'loading' ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </form>
            </div>

            {/* Informações de Contato */}
            <div className="space-y-8">
              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-white">Redes Sociais</h3>
                <div className="space-y-4">
                  <a
                    href="https://www.instagram.com/elygemeson2/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#121212] rounded-lg hover:bg-[#0a0a0a] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Instagram</p>
                      <p className="text-sm text-gray-400">@elygemeson2</p>
                    </div>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ely-gemeson-amancio-pereira-224732248/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#121212] rounded-lg hover:bg-[#0a0a0a] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">LinkedIn</p>
                      <p className="text-sm text-gray-400">Conecte-se comigo</p>
                    </div>
                  </a>
                  <a
                    href="https://github.com/Elygemeson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#121212] rounded-lg hover:bg-[#0a0a0a] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">GitHub</p>
                      <p className="text-sm text-gray-400">Veja meus projetos</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-[#1a1a1a] rounded-2xl p-8 border border-gray-800">
                <h3 className="text-2xl font-bold mb-6 text-white">Contato Direto</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:elygemeson@gmail.com"
                    className="flex items-center gap-4 p-4 bg-[#121212] rounded-lg hover:bg-[#0a0a0a] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email</p>
                      <p className="text-sm text-gray-400">elygemeson@gmail.com</p>
                    </div>
                  </a>
                  <a
                    href="https://wa.me/5583996244799"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-[#121212] rounded-lg hover:bg-[#0a0a0a] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.978 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">WhatsApp</p>
                      <p className="text-sm text-gray-400">(83) 99624-4799</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Localização</p>
                      <p className="text-sm text-gray-400">Paraíba, Brazil</p>
                    </div>
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
          <p className="text-gray-400">
            © {new Date().getFullYear()} Ely Gemeson Dev. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Toast Notification */}
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
}
