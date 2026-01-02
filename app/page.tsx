export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Seção 1: Hero */}
      <section id="hero" className="flex min-h-screen items-center justify-center px-4 py-20 sm:px-8">
        <div className="flex w-full max-w-4xl flex-col items-center gap-8 text-center">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-5xl md:text-6xl">
            Bem-vindo ao Meu Portfólio
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400 sm:text-xl">
            Desenvolvedor Full Stack apaixonado por criar soluções inovadoras e de alta qualidade
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              className="flex h-12 w-full items-center justify-center rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto"
              href="#projetos"
            >
              Ver Projetos
            </a>
            <a
              className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto"
              href="#contato"
            >
              Entre em Contato
            </a>
          </div>
        </div>
      </section>

      {/* Seção 2: Sobre */}
      <section id="sobre" className="min-h-screen bg-white px-4 py-20 dark:bg-zinc-900 sm:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-zinc-50 sm:text-4xl">
            Sobre Mim
          </h2>
          <div className="flex flex-col gap-8 md:flex-row md:items-center">
            <div className="flex-1 space-y-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              <p>
                Olá! Sou um desenvolvedor full stack com experiência em criar aplicações web modernas e escaláveis.
              </p>
              <p>
                Trabalho com as mais recentes tecnologias e frameworks para entregar soluções de alta qualidade que
                atendem às necessidades dos clientes.
              </p>
              <p>
                Minha paixão é transformar ideias em realidade através de código limpo, design intuitivo e
                experiência de usuário excepcional.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 3: Habilidades */}
      <section id="habilidades" className="min-h-screen bg-zinc-50 px-4 py-20 dark:bg-black sm:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-zinc-50 sm:text-4xl">
            Habilidades
          </h2>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">Frontend</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                React, Next.js, TypeScript, Tailwind CSS, HTML5, CSS3
              </p>
            </div>
            <div className="rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">Backend</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Node.js, Express, APIs REST, GraphQL, Bancos de Dados
              </p>
            </div>
            <div className="rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">Ferramentas</h3>
              <p className="text-zinc-600 dark:text-zinc-400">
                Git, Docker, CI/CD, Testes, DevOps
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 4: Projetos */}
      <section id="projetos" className="min-h-screen bg-white px-4 py-20 dark:bg-zinc-900 sm:px-8">
        <div className="mx-auto w-full max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-zinc-50 sm:text-4xl">
            Projetos
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">Projeto 1</h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Descrição do projeto aqui. Uma aplicação moderna e responsiva desenvolvida com as melhores práticas.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:underline dark:text-zinc-50"
                >
                  Ver Projeto →
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:underline dark:text-zinc-50"
                >
                  Código →
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">Projeto 2</h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Descrição do projeto aqui. Uma aplicação moderna e responsiva desenvolvida com as melhores práticas.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:underline dark:text-zinc-50"
                >
                  Ver Projeto →
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:underline dark:text-zinc-50"
                >
                  Código →
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">Projeto 3</h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Descrição do projeto aqui. Uma aplicação moderna e responsiva desenvolvida com as melhores práticas.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:underline dark:text-zinc-50"
                >
                  Ver Projeto →
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:underline dark:text-zinc-50"
                >
                  Código →
                </a>
              </div>
            </div>
            <div className="rounded-lg border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-3 text-xl font-semibold text-black dark:text-zinc-50">Projeto 4</h3>
              <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                Descrição do projeto aqui. Uma aplicação moderna e responsiva desenvolvida com as melhores práticas.
              </p>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:underline dark:text-zinc-50"
                >
                  Ver Projeto →
                </a>
                <a
                  href="#"
                  className="text-sm font-medium text-foreground hover:underline dark:text-zinc-50"
                >
                  Código →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5: Contato */}
      <section id="contato" className="min-h-screen bg-zinc-50 px-4 py-20 dark:bg-black sm:px-8">
        <div className="mx-auto w-full max-w-2xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-black dark:text-zinc-50 sm:text-4xl">
            Entre em Contato
          </h2>
          <div className="space-y-6 rounded-lg border border-black/[.08] bg-white p-8 dark:border-white/[.145] dark:bg-zinc-900">
            <p className="text-center text-lg text-zinc-600 dark:text-zinc-400">
              Estou sempre aberto a novas oportunidades e projetos interessantes. Vamos conversar!
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:seuemail@example.com"
                className="flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              >
                Enviar Email
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-8 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
