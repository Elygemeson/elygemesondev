import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ely Gemeson Dev | Desenvolvedor Web em João Pessoa, Recife e Mamanguape",
  description: "Desenvolvedor Web especializado em criação de Landing Pages, Sites Institucionais e Soluções SaaS. Programador em João Pessoa, Recife e Mamanguape. Transformando ideias em realidade através de código limpo e design moderno.",
  keywords: [
    "Ely Gemeson Dev",
    "desenvolvedor web",
    "programador",
    "programador em João Pessoa",
    "programador em Recife",
    "programador em Mamanguape",
    "desenvolvedor João Pessoa",
    "desenvolvedor Recife",
    "desenvolvedor Mamanguape",
    "desenvolvedor web João Pessoa",
    "desenvolvedor web Recife",
    "desenvolvedor web Mamanguape",
    "programador web João Pessoa",
    "programador web Recife",
    "programador web Mamanguape",
    "criação de sites João Pessoa",
    "criação de sites Recife",
    "criação de sites Mamanguape",
    "landing pages",
    "sites institucionais",
    "SaaS",
    "React",
    "Next.js",
    "desenvolvimento web",
    "desenvolvedor front end",
    "desenvolvedor full stack",
    "Python",
    "TypeScript",
    "JavaScript",
  ].join(", "),
  authors: [{ name: "Ely Gemeson Dev" }],
  creator: "Ely Gemeson Dev",
  publisher: "Ely Gemeson Dev",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Ely Gemeson Dev | Desenvolvedor Web em João Pessoa, Recife e Mamanguape",
    description: "Desenvolvedor Web especializado em criação de Landing Pages, Sites Institucionais e Soluções SaaS. Programador em João Pessoa, Recife e Mamanguape.",
    url: "https://elygemesondev.com",
    siteName: "Ely Gemeson Dev",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/imagens/fotosdo_ElyDev/foto-Ely.jpg",
        width: 1200,
        height: 630,
        alt: "Ely Gemeson Dev - Desenvolvedor Web",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ely Gemeson Dev | Desenvolvedor Web",
    description: "Desenvolvedor Web especializado em criação de Landing Pages, Sites Institucionais e Soluções SaaS.",
    images: ["/imagens/fotosdo_ElyDev/foto-Ely.jpg"],
  },
  alternates: {
    canonical: "https://elygemesondev.com",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Ely Gemeson Dev",
    jobTitle: "Desenvolvedor Web",
    description: "Desenvolvedor Web especializado em criação de Landing Pages, Sites Institucionais e Soluções SaaS. Programador em João Pessoa, Recife e Mamanguape.",
    url: "https://elygemesondev.com",
    image: "https://elygemesondev.com/imagens/fotosdo_ElyDev/foto-Ely.jpg",
    sameAs: [
      "https://linkedin.com/in/elygemesondev",
      "https://github.com/elygemesondev",
    ],
    knowsAbout: [
      "Desenvolvimento Web",
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Python",
      "Node.js",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "degree",
        name: "Graduado em Análise e Desenvolvimento de Sistemas",
        educationalLevel: "Graduação",
        recognizedBy: {
          "@type": "Organization",
          name: "Centro Universitário de João Pessoa",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Desenvolvedor Front End",
        recognizedBy: {
          "@type": "Organization",
          name: "DevMedia",
        },
      },
      {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "certification",
        name: "Desenvolvedor Python",
        recognizedBy: {
          "@type": "Organization",
          name: "Udemy",
        },
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "PB",
      addressCountry: "BR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "João Pessoa",
      },
      {
        "@type": "City",
        name: "Recife",
      },
      {
        "@type": "City",
        name: "Mamanguape",
      },
    ],
    offers: {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        serviceType: "Desenvolvimento Web",
        description: "Criação de Landing Pages, Sites Institucionais e Soluções SaaS",
        areaServed: ["João Pessoa", "Recife", "Mamanguape"],
      },
    },
  };

  const professionalServiceJsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ely Gemeson Dev - Desenvolvimento Web",
    description: "Desenvolvedor Web especializado em criação de Landing Pages, Sites Institucionais e Soluções SaaS. Atendimento em João Pessoa, Recife e Mamanguape.",
    url: "https://elygemesondev.com",
    image: "https://elygemesondev.com/imagens/fotosdo_ElyDev/foto-Ely.jpg",
    address: {
      "@type": "PostalAddress",
      addressLocality: "João Pessoa",
      addressRegion: "PB",
      addressCountry: "BR",
    },
    areaServed: [
      {
        "@type": "City",
        name: "João Pessoa",
      },
      {
        "@type": "City",
        name: "Recife",
      },
      {
        "@type": "City",
        name: "Mamanguape",
      },
    ],
    serviceType: [
      "Desenvolvimento Web",
      "Criação de Landing Pages",
      "Sites Institucionais",
      "Soluções SaaS",
      "Desenvolvimento Front End",
      "Desenvolvimento Full Stack",
    ],
    provider: {
      "@type": "Person",
      name: "Ely Gemeson Dev",
    },
  };

  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased bg-[#000000] text-white`}
      >
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
