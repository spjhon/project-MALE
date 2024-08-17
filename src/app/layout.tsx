import type { Metadata } from "next";
/*

inter se refiere a una fuente personalizada importada de 
Google Fonts usando la funcionalidad específica de Next.js para gestionar fuentes.

Inter es una función proporcionada por Next.js para cargar y usar la fuente Inter desde Google Fonts. 
La función facilita la inclusión de fuentes personalizadas en una aplicación Next.js sin tener que preocuparse por los aspectos de rendimiento y carga de fuentes.

*/
import { Inter } from "next/font/google";
// next-themes es una mini library que ayuda a poner themes por medio de module css o tailwind
import { ThemeProvider } from "next-themes";
// Este global css solo contiene el archivo de configuracion de tailwind
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MalePet Care",
  description: "Servicio Profesional de Cuidado de Mascotas en la Ciduad de Manizales",


  //BASIC METADATA

  generator: 'Next.js',
  applicationName: 'MalePet Care',
  referrer: 'origin-when-cross-origin',
  keywords: [
    "cuidado de mascotas en casa",
    "paseo individual de mascotas",
    "servicio de paseo para perros",
    "cuidado de perros a domicilio",
    "paseo de perros personalizado",
    "cuidado de gatos en casa",
    "paseo para mascotas",
    "atención a mascotas en el hogar",
    "paseadores de perros profesionales",
    "servicio de cuidado de mascotas",
    "paseo de perros a domicilio",
    "cuidados de mascotas en vacaciones",
    "cuidado de mascotas personalizado",
    "paseo individual de perros",
    "servicio de pet sitting",
    "cuidado de mascotas a domicilio",
    "paseadores de mascotas",
    "cuidado de animales en casa",
    "paseo para perros individual",
    "cuidado de mascotas en vacaciones"
  ],
  authors: [{ name: 'Camilo' }, { name: 'Aristizabal', url: 'https://nextjs.org' }],
  creator: 'Camilo Aristizabal',
  publisher: 'Camilo Dev',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    images: '../../public/img/heroAbout.webp',
    description: "Servicio Profesional de Cuidado de Mascotas",
    locale: 'es_ES',
    type: 'website',
  },
  robots: {
    index: true, // Permitir indexación del sitio
    follow: true, // Permitir seguir los enlaces del sitio
    noarchive: false, // Permitir a los motores de búsqueda archivar la página
    nosnippet: false, // Permitir la generación de snippets en los resultados de búsqueda
    notranslate: false, // Permitir la traducción del contenido en motores de búsqueda
    noimageindex: false, // Permitir la indexación de imágenes
    'max-snippet': -1, // Permitir snippets completos
    'max-image-preview': 'large', // Permitir previsualización de imágenes grandes
    'max-video-preview': -1, // Permitir previsualización completa de videos
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@nextjs',
    creatorId: '1467726470533754880',
    images: ['https://nextjs.org/og.png'], // Must be an absolute URL
  },
  category: 'cuidado mascotas',
  viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" >
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
