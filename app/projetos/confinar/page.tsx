'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ConfinarPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const imagens = [
    {
      src: '/imagens/imagens_confinar_saas/teladashboard.png',
      alt: 'Dashboard do Confinar - Visão geral do sistema',
      title: 'Dashboard',
    },
    {
      src: '/imagens/imagens_confinar_saas/teladeloginconfinar.png',
      alt: 'Tela de Login do Confinar',
      title: 'Tela de Login',
    },
    {
      src: '/imagens/imagens_confinar_saas/cadastrodeitens.png',
      alt: 'Cadastro de Itens do Confinar',
      title: 'Cadastro de Itens',
    },
    {
      src: '/imagens/imagens_confinar_saas/confinartelaestoque.png',
      alt: 'Tela de Estoque do Confinar',
      title: 'Gestão de Estoque',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header com gradiente */}
      <div className="relative bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/imagens/imagens_confinar_saas/bannerpc.png')] bg-contain bg-center bg-no-repeat opacity-10"></div>
        <div className="absolute inset-0 bg-black/60"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Voltar aos Projetos
          </Link>
          
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Confinar
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl">
              Sistema SaaS completo para gestão de confinamentos de gado
            </p>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed">
              Plataforma moderna e intuitiva desenvolvida para facilitar o controle e gestão completa de confinamentos, 
              oferecendo ferramentas poderosas para monitoramento de estoque, acompanhamento de animais e otimização 
              de processos na pecuária.
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Introdução */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Gestão Completa de Confinamentos
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  O <span className="text-blue-400 font-semibold">Confinar</span> é um sistema SaaS desenvolvido 
                  especialmente para propriedades rurais que trabalham com confinamento de gado. A plataforma oferece 
                  uma solução completa e integrada para gerenciar todos os aspectos do confinamento.
                </p>
                <p>
                  Com interface moderna e intuitiva, o sistema permite controle total sobre o estoque, acompanhamento 
                  detalhado dos animais, gestão de alimentação, monitoramento de saúde e muito mais.
                </p>
                <p>
                  Desenvolvido com as mais modernas tecnologias web, o Confinar garante performance, segurança e 
                  escalabilidade para atender desde pequenas propriedades até grandes confinamentos.
                </p>
              </div>
              
              {/* Minha Contribuição */}
              <div className="mt-8 p-6 bg-gradient-to-br from-blue-900/20 to-cyan-900/20 rounded-xl border border-blue-500/30">
                <h3 className="text-xl font-bold mb-4 text-blue-400 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Minha Contribuição no Projeto
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-blue-400 font-semibold mt-1">•</span>
                    <p>
                      <span className="text-white font-semibold">Analista de Requisitos:</span> Atuei na análise e 
                      levantamento de requisitos funcionais e não funcionais, compreendendo profundamente as necessidades 
                      do negócio e traduzindo-as em especificações técnicas detalhadas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-semibold mt-1">•</span>
                    <p>
                      <span className="text-white font-semibold">Desenvolvedor Front End:</span> Responsável pelo 
                      desenvolvimento completo da interface do usuário, criando uma experiência moderna, intuitiva e 
                      responsiva utilizando tecnologias web de ponta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative w-full rounded-2xl overflow-hidden border border-gray-800 shadow-xl bg-[#1a1a1a] flex items-center justify-center">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/imagens/imagens_confinar_saas/bannerpc.png"
                    alt="Banner do Confinar"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Imagens */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#000000]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 text-white">
            Interface e Funcionalidades
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {imagens.map((imagem, index) => (
              <div
                key={index}
                className={`group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-[1.02] shadow-xl ${
                  isVisible ? 'animate-fade-in' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={imagem.src}
                    alt={imagem.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-white">{imagem.title}</h3>
                  <p className="text-gray-400 text-sm">{imagem.alt}</p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Características */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">
            Principais Características
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Gestão Completa da Fazenda',
                description: 'Controle completo de todos os aspectos da fazenda com rastreamento em tempo real de animais, estoque, alimentação e saúde.',
                icon: (
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
              },
              {
                title: 'Interface Moderna',
                description: 'Design intuitivo e responsivo, otimizado para uso em desktop e dispositivos móveis.',
                icon: (
                  <svg className="w-12 h-12 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Sistema Seguro',
                description: 'Plataforma SaaS com alta segurança de dados e backup automático das informações.',
                icon: (
                  <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-blue-500 transition-all duration-300 hover:scale-105"
              >
                <div className="mb-4 flex items-center justify-center">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer da Página */}
      <footer className="py-8 px-4 bg-[#000000] border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all hover:scale-105"
          >
            Ver Outros Projetos
          </Link>
        </div>
      </footer>
    </div>
  );
}

