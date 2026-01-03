'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function GeradorRelatoriosPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const imagens = [
    {
      src: '/imagens/imagens_gerador_relatorios/teladedashboard.png',
      alt: 'Dashboard do Gerador de Relatórios - Visão geral do sistema',
      title: 'Dashboard',
    },
    {
      src: '/imagens/imagens_gerador_relatorios/formuláriodorelatóriodotanamesa.png',
      alt: 'Formulário de Relatório do Tanamesa',
      title: 'Formulário de Relatório',
    },
    {
      src: '/imagens/imagens_gerador_relatorios/relatóriodedesenpenho.png',
      alt: 'Relatório de Desempenho',
      title: 'Relatório de Desempenho',
    },
    {
      src: '/imagens/imagens_gerador_relatorios/sobreoprojeto.png',
      alt: 'Sobre o Projeto - Gerador de Relatórios',
      title: 'Sobre o Projeto',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header com gradiente */}
      <div className="relative bg-gradient-to-br from-blue-900/30 via-cyan-900/20 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/imagens/imagens_gerador_relatorios/teladedashboard.png')] bg-contain bg-center bg-no-repeat opacity-10"></div>
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
            <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-4">
              <span className="text-blue-400 text-sm font-semibold">Projeto para o Estado da Paraíba</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Gerador de Relatórios
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl">
              Sistema completo para geração de relatórios de desempenho
            </p>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-4">
              Um dos grandes projetos desenvolvidos durante minha atuação no <span className="text-blue-400 font-semibold">Estado da Paraíba</span>, 
              este sistema oferece uma solução completa e moderna para geração de relatórios de desempenho com dashboard interativo.
            </p>
            <p className="text-base text-gray-500 max-w-3xl leading-relaxed">
              Ferramenta desenvolvida para facilitar a análise e apresentação de dados de forma clara e profissional, 
              com recursos avançados de visualização e exportação de relatórios.
            </p>
          </div>
        </div>
      </div>

      {/* Seção de Introdução */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <div className="inline-block px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
                <span className="text-blue-400 text-sm font-semibold">Projeto Governamental</span>
              </div>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Um dos Grandes Projetos para o Estado da Paraíba
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  O <span className="text-blue-400 font-semibold">Gerador de Relatórios</span> foi desenvolvido 
                  durante minha atuação no <span className="text-blue-400 font-semibold">Estado da Paraíba</span>, 
                  representando um dos grandes projetos que tive a oportunidade de realizar no setor público.
                </p>
                <p>
                  Este sistema foi criado para atender às necessidades de geração e análise de relatórios de desempenho, 
                  oferecendo uma solução completa com dashboard interativo, formulários personalizados e visualizações 
                  avançadas de dados.
                </p>
                <p>
                  Desenvolvido com as mais modernas tecnologias web, o sistema garante performance, confiabilidade e 
                  facilidade de uso, permitindo que os gestores públicos tenham acesso rápido e preciso às informações 
                  necessárias para tomada de decisões estratégicas.
                </p>
                <p className="pt-4 border-t border-gray-700">
                  <span className="text-blue-400 font-semibold">Experiência no Setor Público:</span> Este projeto 
                  demonstra minha capacidade de desenvolver soluções complexas que atendem às necessidades específicas 
                  do setor público, com foco em eficiência, transparência e usabilidade.
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
                      do setor público e traduzindo-as em especificações técnicas detalhadas.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-cyan-400 font-semibold mt-1">•</span>
                    <p>
                      <span className="text-white font-semibold">Desenvolvedor Full Stack:</span> Responsável pelo 
                      desenvolvimento completo da aplicação, desde a interface do usuário até a arquitetura backend, 
                      incluindo APIs, banco de dados e integração de sistemas, garantindo uma solução robusta e escalável.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative w-full rounded-2xl overflow-hidden border border-gray-800 shadow-xl bg-[#1a1a1a] flex items-center justify-center">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/imagens/imagens_gerador_relatorios/teladedashboard.png"
                    alt="Dashboard do Gerador de Relatórios"
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
                title: 'Gestão Completa de Relatórios',
                description: 'Sistema completo para criação, gerenciamento e análise de relatórios de desempenho com dashboard interativo e visualizações avançadas.',
                icon: (
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
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
                description: 'Sistema com alta segurança de dados e backup automático das informações, essencial para projetos governamentais.',
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

      {/* Seção de Destaque - Projeto Governamental */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900/20 via-cyan-900/10 to-black border-y border-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <div className={`${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            <div className="inline-block px-6 py-3 bg-blue-600/20 border border-blue-500/30 rounded-full mb-6">
              <span className="text-blue-400 text-lg font-semibold">Projeto para o Estado da Paraíba</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
              Experiência no Setor Público
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Este projeto representa um dos grandes trabalhos realizados durante minha atuação no 
              <span className="text-blue-400 font-semibold"> Estado da Paraíba</span>, demonstrando minha capacidade 
              de desenvolver soluções complexas que atendem às necessidades específicas do setor público.
            </p>
            <p className="text-base text-gray-400 leading-relaxed">
              O sistema foi desenvolvido com foco em eficiência, transparência e usabilidade, características 
              essenciais para ferramentas utilizadas na gestão pública.
            </p>
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
