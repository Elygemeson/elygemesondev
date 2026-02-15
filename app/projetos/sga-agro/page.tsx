'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function SgaAgroPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const imagens = [
    {
      src: '/imagens/imagens_sgaagro/home.png',
      alt: 'Home do SGA Agro - Página inicial do sistema',
      title: 'Página Inicial',
    },
    {
      src: '/imagens/imagens_sgaagro/dashboard.png',
      alt: 'Dashboard do SGA Agro - Visão geral',
      title: 'Dashboard',
    },
    {
      src: '/imagens/imagens_sgaagro/tela_login.png',
      alt: 'Tela de Login do SGA Agro',
      title: 'Tela de Login',
    },
    {
      src: '/imagens/imagens_sgaagro/telacomumcadastro.png',
      alt: 'Tela comum de cadastro',
      title: 'Cadastros',
    },
    {
      src: '/imagens/imagens_sgaagro/consultas_relatorios.png',
      alt: 'Consultas e Relatórios do SGA Agro',
      title: 'Consultas e Relatórios',
    },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-white">
      {/* Header com gradiente */}
      <div className="relative bg-gradient-to-br from-green-900/30 via-emerald-900/20 to-black py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/imagens/imagens_sgaagro/home.png')] bg-contain bg-center bg-no-repeat opacity-10"></div>
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
            <div className="inline-block px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full mb-4">
              <span className="text-green-400 text-sm font-semibold">SaaS em Ascensão no Mercado</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-green-400 to-emerald-400 bg-clip-text text-transparent">
              SGA Agro
            </h1>
            <p className="text-xl sm:text-2xl text-gray-300 mb-4 max-w-3xl">
              Sistema de Gerenciamento Agrícola focado em perdas e plantio
            </p>
            <p className="text-lg text-gray-400 max-w-3xl leading-relaxed mb-6">
              Sistema de gerenciamento agrícola desenvolvido em parceria com um Engenheiro Agrônomo. 
              Focado no gerenciamento de perdas agrícolas durante a safra e no plantio. Atuei como 
              <span className="text-green-400 font-semibold"> desenvolvedor Full Stack</span> em todo o projeto.
            </p>
            <a
              href="https://sgaagro.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold hover:from-green-500 hover:to-emerald-500 transition-all hover:scale-105 shadow-lg shadow-green-500/50"
            >
              Acessar sgaagro.com.br
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Seção de Introdução */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#121212]">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className={`${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
              <h2 className="text-4xl font-bold mb-6 text-white">
                Gestão de Perdas e Plantio Agrícola
              </h2>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  O <span className="text-green-400 font-semibold">SGA Agro</span> é um sistema SaaS desenvolvido 
                  para o setor agrícola, focado no gerenciamento de perdas durante a safra e no acompanhamento 
                  do plantio. O sistema rastreia e gerencia as perdas agrícolas, permitindo decisões mais 
                  assertivas e redução de desperdícios.
                </p>
                <p>
                  Além de gerenciar e rastrear as perdas, o sistema permite a criação de usuários com permissões 
                  específicas para cada tipo de perfil. Com diversos relatórios, os gestores têm visibilidade 
                  completa sobre suas operações agrícolas.
                </p>
                <p>
                  Desenvolvido em parceria com um Engenheiro Agrônomo, o SGA Agro combina expertise técnica 
                  em desenvolvimento com conhecimento agronômico, resultando em uma solução que atende às 
                  necessidades reais do mercado agrícola. O sistema está em ascensão no mercado com diversos 
                  feedbacks positivos de especialistas.
                </p>
              </div>
              
              {/* Minha Contribuição */}
              <div className="mt-8 p-6 bg-gradient-to-br from-green-900/20 to-emerald-900/20 rounded-xl border border-green-500/30">
                <h3 className="text-xl font-bold mb-4 text-green-400 flex items-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Minha Contribuição no Projeto
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start gap-3">
                    <span className="text-green-400 font-semibold mt-1">•</span>
                    <p>
                      <span className="text-white font-semibold">Desenvolvedor Full Stack:</span> Responsável pelo 
                      desenvolvimento completo do sistema SGA Agro, incluindo frontend, backend, banco de dados 
                      e integrações, em parceria com o Engenheiro Agrônomo que forneceu a expertise do domínio.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-emerald-400 font-semibold mt-1">•</span>
                    <p>
                      <span className="text-white font-semibold">Sistema de Permissões e Relatórios:</span> 
                      Implementação do módulo de gestão de usuários com permissões por tipo e desenvolvimento 
                      dos diversos relatórios que auxiliam na tomada de decisões agrícolas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className={`${isVisible ? 'animate-fade-in-right' : 'opacity-0'}`}>
              <div className="relative w-full rounded-2xl overflow-hidden border border-gray-800 shadow-xl bg-[#1a1a1a] flex items-center justify-center">
                <div className="relative w-full aspect-video">
                  <Image
                    src="/imagens/imagens_sgaagro/home.png"
                    alt="Home do SGA Agro"
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
                className={`group relative bg-[#1a1a1a] rounded-2xl overflow-hidden border border-gray-800 hover:border-green-500 transition-all duration-300 hover:scale-[1.02] shadow-xl ${
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
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
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
                title: 'Gestão de Perdas',
                description: 'Rastreamento e gerenciamento completo das perdas agrícolas durante a safra, permitindo análise e redução de desperdícios.',
                icon: (
                  <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: 'Gestão de Usuários e Permissões',
                description: 'Criação de usuários por tipo com sistema de permissões que garante o acesso adequado a cada funcionalidade.',
                icon: (
                  <svg className="w-12 h-12 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
              },
              {
                title: 'Relatórios Completos',
                description: 'Diversos relatórios que auxiliam na tomada de decisões e na análise do desempenho agrícola.',
                icon: (
                  <svg className="w-12 h-12 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-800 hover:border-green-500 transition-all duration-300 hover:scale-105"
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
        <div className="max-w-6xl mx-auto text-center space-y-4">
          <a
            href="https://sgaagro.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full font-semibold hover:from-green-500 hover:to-emerald-500 transition-all hover:scale-105 mr-4"
          >
            Acessar sgaagro.com.br
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1a1a1a] border border-gray-700 rounded-full font-semibold hover:border-green-500 transition-all hover:scale-105"
          >
            Ver Outros Projetos
          </Link>
        </div>
      </footer>
    </div>
  );
}
