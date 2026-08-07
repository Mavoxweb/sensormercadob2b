import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  themeColor: '#090D0F',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: 'Sensor Mercado | Plataforma de Encartes para Redes de Supermercados',
  description:
    'Centralize campanhas na matriz e dê autonomia às unidades com uma plataforma personalizada para criação de encartes, ofertas e materiais comerciais.',
  keywords: [
    'Sensor Mercado',
    'Encartes para supermercados',
    'Plataforma de ofertas para redes',
    'Autonomia de lojas supermercado',
    'Gestão de campanhas comerciais',
    'Marketing para redes de supermercados',
  ],
  authors: [{ name: 'Sensor Mercado B2B' }],
  openGraph: {
    title: 'Sensor Mercado | Plataforma de Encartes para Redes de Supermercados',
    description:
      'Centralize modelos e identidade na matriz. Dê autonomia para cada unidade adaptar produtos, preços e ofertas locais. Gere materiais em minutos.',
    url: 'https://sensormercado.com.br',
    siteName: 'Sensor Mercado',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sensor Mercado | Governança Central & Autonomia Local para Supermercados',
    description:
      'Plataforma personalizada para redes de supermercados criarem e distribuírem campanhas sem perder o padrão da marca.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth`}>
      <body className="bg-[#090D0F] text-[#F4F7F5] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
