// Importa o tipo Metadata do Next.js para definir metadados da página
import type { Metadata } from "next"; 

// Importa a fonte Inter do Google Fonts usando o Next.js
import { Inter } from "next/font/google"; 

// Importa o arquivo de estilos globais
import "./globals.css";

// Configura a fonte Inter com uma variável CSS e define os subconjuntos de caracteres
const inter = Inter({
  variable: "--font-inter-sans", // Nome da variável CSS que será usada para aplicar a fonte
  subsets: ["latin"], // Define os subconjuntos de caracteres a serem incluídos (neste caso, apenas o latino)
});

// Define os metadados da aplicação, como título e descrição
export const metadata: Metadata = {
  title: "Feliz Natal", // Título da página que aparece na aba do navegador
  description: "projetinho natalino", // Descrição da página, útil para SEO
};

// Define e exporta o componente RootLayout, que serve como layout raiz da aplicação
export default function RootLayout({
  children, // Recebe os filhos (outros componentes) que serão renderizados dentro deste layout
}: Readonly<{
  children: React.ReactNode; // Define o tipo dos filhos como React.ReactNode, permitindo qualquer elemento React
}>) {
  return (
    <html lang="pt-BR"> 
      <body
        className={`${inter.variable} antialiased`} // Aplica a fonte Inter e ativa o antialiasing para suavizar as fontes
      >
        {children}
         
      </body>
    </html>
  );
}
// {children} Renderiza os filhos passados para o layout 
