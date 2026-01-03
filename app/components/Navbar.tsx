'use client';

import { useEffect, useState, useRef } from 'react';

interface NavItem {
  label: string;
  id: string;
}

const navItems: NavItem[] = [
  { label: 'Home', id: 'hero' },
  { label: 'Sobre Mim', id: 'sobre' },
  { label: 'Tecnologias', id: 'tecnologias' },
  { label: 'O Que Eu Ofereço', id: 'servicos' },
  { label: 'Formação', id: 'formacao' },
  { label: 'Projetos', id: 'projetos' },
  { label: 'Contatos', id: 'contato' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const navRef = useRef<HTMLElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Detectar mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 100);

      // Detectar seção ativa
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Navegação por teclado
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    
    // Pequeno delay para garantir que o menu fecha antes do scroll
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        // Usar scrollIntoView com offset customizado
        const yOffset = -80; // Offset para compensar navbar
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      } else {
        // Fallback: tentar scroll direto sem offset
        const elementFallback = document.querySelector(`#${id}`);
        if (elementFallback) {
          elementFallback.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest'
          });
        }
      }
    }, 150);
  };

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  // Posicionamento dos itens em círculo
  const getItemPosition = (index: number, total: number) => {
    const angle = (index * 360) / total - 90; // -90 para começar no topo
            const radius = isMobile ? 120 : 200;
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * radius;
    const y = Math.sin(radian) * radius;
    return { x, y };
  };

  return (
    <>
      {/* Botão Hamburger - Desktop e Mobile */}
      <button
        ref={buttonRef}
        onClick={toggleNav}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleNav();
          }
        }}
        aria-label={isOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={isOpen}
        aria-controls="navbar-menu"
        className={`
          fixed top-6 right-6 z-50
          transition-all duration-500 ease-out
          ${isOpen ? 'scale-110' : 'scale-100'}
        `}
      >
        <div className="relative">
          {/* Efeito de raio sutil */}
          <div className="absolute inset-0 flex items-center justify-center -z-10">
            <div 
              className="absolute rounded-full border border-blue-500/20 animate-pulse-ring-subtle"
              style={{
                width: '70px',
                height: '70px',
                animationDelay: '0s',
              }}
            />
            <div 
              className="absolute rounded-full border border-blue-500/15 animate-pulse-ring-subtle"
              style={{
                width: '90px',
                height: '90px',
                animationDelay: '1s',
              }}
            />
          </div>
          
          {/* Glow effect */}
          <div 
            className={`
              absolute inset-0 rounded-full blur-xl transition-opacity duration-500
              ${isOpen ? 'opacity-100 bg-blue-500/50' : 'opacity-50 bg-blue-500/30'}
            `}
          />
          
          {/* Botão principal */}
          <div
            className={`
              navbar-egd-button
              relative w-14 h-14 sm:w-16 sm:h-16
              bg-gradient-to-br from-[#121212] to-[#000000]
              border-2 border-blue-500/50
              rounded-full
              flex items-center justify-center
              shadow-2xl
              transition-all duration-500
              hover:border-blue-400
              hover:shadow-blue-500/50
              hover:scale-110
              active:scale-95
              ${isOpen ? 'border-blue-400 shadow-blue-500/70' : ''}
            `}
          >
            {/* Ícone Hamburger que vira X */}
            <div className="relative w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`
                  absolute w-5 h-0.5 bg-blue-400 rounded-full
                  transition-all duration-300 ease-out
                  ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}
                `}
              />
              <span
                className={`
                  absolute w-5 h-0.5 bg-blue-400 rounded-full
                  transition-all duration-300 ease-out
                  ${isOpen ? 'opacity-0' : 'opacity-100'}
                `}
              />
              <span
                className={`
                  absolute w-5 h-0.5 bg-blue-400 rounded-full
                  transition-all duration-300 ease-out
                  ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}
                `}
              />
            </div>
          </div>
        </div>
      </button>

      {/* Overlay escuro */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={(e) => {
            // Só fecha se clicar diretamente no overlay, não nos filhos
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
          aria-hidden="true"
        />
      )}

      {/* Menu Radial - Desktop */}
      {!isMobile && (
        <nav
          ref={navRef}
          id="navbar-menu"
          className={`
            fixed z-50 pointer-events-none
            ${isMobile ? 'bottom-0 left-0 right-0' : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'}
            transition-opacity duration-500
            ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0'}
          `}
          aria-label="Menu de navegação principal"
        >
          <div className="relative w-0 h-0">
            {navItems.map((item, index) => {
              const position = getItemPosition(index, navItems.length);
              const isActive = activeSection === item.id;
              
              return (
                <div
                  key={item.id}
                  className="group relative"
                  style={{
                    position: 'absolute',
                    transform: isOpen
                      ? `translate(${position.x}px, ${position.y}px)`
                      : 'translate(0, 0)',
                    transition: `transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.05}s, opacity 0.3s ${index * 0.05}s`,
                    opacity: isOpen ? 1 : 0,
                    pointerEvents: isOpen ? 'auto' : 'none',
                    zIndex: 60,
                  }}
                >
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      scrollToSection(item.id);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        e.stopPropagation();
                        scrollToSection(item.id);
                      }
                    }}
                    aria-label={`Navegar para seção ${item.label}`}
                    className={`
                      navbar-item-code-effect
                      px-4 py-2
                      bg-gradient-to-br from-[#1a1a1a] to-[#121212]
                      border-2 rounded-lg
                      flex items-center justify-center
                      text-sm sm:text-base
                      font-medium
                      text-white
                      whitespace-nowrap
                      transition-all duration-300 ease-out
                      transform
                      cursor-pointer
                      hover:scale-110
                      hover:border-blue-400
                      hover:shadow-lg hover:shadow-blue-500/50
                      active:scale-105
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black
                      ${isActive ? 'border-blue-500 shadow-blue-500/70 bg-blue-500/10' : 'border-gray-700'}
                    `}
                    style={{
                      transform: isOpen ? 'scale(1)' : 'scale(0)',
                      pointerEvents: isOpen ? 'auto' : 'none',
                      zIndex: 60,
                    }}
                  >
                    <span className="select-none">{item.label}</span>
                  </button>
                </div>
              );
            })}
          </div>
        </nav>
      )}

      {/* Menu Mobile - Bottom Nav / Sidebar */}
      {isMobile && (
        <nav
          ref={navRef}
          id="navbar-menu"
          className={`
            fixed bottom-0 left-0 right-0 z-40
            bg-[#121212]/95 backdrop-blur-lg
            border-t border-gray-800
            transition-transform duration-300 ease-out
            ${isOpen ? 'translate-y-0' : 'translate-y-full'}
            safe-area-bottom
          `}
          aria-label="Menu de navegação mobile"
        >
          <div className="px-4 py-6 max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col gap-3">
              {navItems.map((item, index) => {
                const isActive = activeSection === item.id;
                
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        scrollToSection(item.id);
                      }
                    }}
                    aria-label={`Navegar para seção ${item.label}`}
                    className={`
                      navbar-item-code-effect
                      flex items-center gap-4
                      px-6 py-4
                      bg-[#1a1a1a] rounded-xl
                      border-2
                      text-left
                      transition-all duration-300
                      hover:scale-105
                      hover:border-blue-400
                      active:scale-95
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-[#121212]
                      ${isActive ? 'border-blue-500 bg-blue-500/10' : 'border-gray-700'}
                    `}
                    style={{
                      animation: isOpen
                        ? `slideUpMobile 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.05}s both`
                        : 'none',
                    }}
                  >
                    <span className="text-white font-medium">{item.label}</span>
                    {isActive && (
                      <span className="ml-auto w-2 h-2 bg-blue-500 rounded-full" aria-hidden="true" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      )}

      <style jsx>{`
        @keyframes pulse-ring-subtle {
          0% {
            transform: scale(0.9);
            opacity: 0.3;
          }
          50% {
            opacity: 0.15;
          }
          100% {
            transform: scale(1.3);
            opacity: 0;
          }
        }
        
        .animate-pulse-ring-subtle {
          animation: pulse-ring-subtle 3s ease-out infinite;
        }
        
        @keyframes slideUpMobile {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes glow-pulse {
          0%, 100% {
            box-shadow: 0 0 20px rgba(0, 123, 255, 0.3),
                        0 0 40px rgba(0, 123, 255, 0.2),
                        0 0 60px rgba(0, 123, 255, 0.1);
          }
          50% {
            box-shadow: 0 0 30px rgba(0, 123, 255, 0.5),
                        0 0 60px rgba(0, 123, 255, 0.3),
                        0 0 90px rgba(0, 123, 255, 0.2);
          }
        }
        
        .animate-glow-pulse {
          animation: glow-pulse 2s ease-in-out infinite;
        }

        @keyframes particle-0 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(0deg) * 60px), calc(sin(0deg) * 60px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes particle-1 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(45deg) * 60px), calc(sin(45deg) * 60px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes particle-2 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(90deg) * 60px), calc(sin(90deg) * 60px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes particle-3 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(135deg) * 60px), calc(sin(135deg) * 60px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes particle-4 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(180deg) * 60px), calc(sin(180deg) * 60px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes particle-5 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(225deg) * 60px), calc(sin(225deg) * 60px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes particle-6 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(270deg) * 60px), calc(sin(270deg) * 60px)) scale(0);
            opacity: 0;
          }
        }

        @keyframes particle-7 {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(calc(cos(315deg) * 60px), calc(sin(315deg) * 60px)) scale(0);
            opacity: 0;
          }
        }

        /* Safe area para notch */
        .safe-area-inset-bottom {
          padding-bottom: env(safe-area-inset-bottom, 0);
        }

        /* Reduzir animações se preferido */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>
    </>
  );
}

