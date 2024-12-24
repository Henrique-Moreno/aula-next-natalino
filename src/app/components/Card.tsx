"use client"; // Indica que este componente deve ser renderizado no lado do cliente

import { useState } from "react"; // Importa o hook useState do React para gerenciar o estado
import Image from "next/image"; // Importa o componente Image do Next.js para otimizar imagens
import Noel from '../../../public/noel.png'; // Importa a imagem do Papai Noel; ajuste o caminho conforme necessário

// Define e exporta o componente Card
export default function Card() {
  // Declara um estado chamado 'message' com um valor inicial
  const [message, setMessage] = useState("Clique no botão para gerar uma mensagem!");

  // Função assíncrona para buscar uma nova mensagem da API
  const fetchMessage = async () => {
    // Faz uma requisição GET para a API de mensagens
    const response = await fetch("/api/messages"); // Verifica se o caminho está correto
    
    // Converte a resposta da API em JSON
    const data = await response.json();
    
    // Atualiza o estado 'message' com a nova mensagem recebida da API
    setMessage(data.message);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 space-y-6 md:space-y-0 md:space-x-6">
      {/* Seção de saudação */}
      <div className="flex-grow text-center md:text-left">
        <p className="text-lg md:text-xl font-extrabold uppercase text-slate-50 typing">
          Olá, ho ho ho feliz Natal!
        </p>
      </div>
      
      {/* Componente de imagem do Papai Noel */}
      <Image
        src={Noel} // Fonte da imagem importada
        alt="Papai Noel" // Texto alternativo para acessibilidade
        width={200} // Largura da imagem
        height={200} // Altura da imagem
        priority={false} // Carrega a imagem com prioridade
        className="w-40 h-40 md:w-60 md:h-60" // Classes CSS para estilização responsiva
      />
      
      {/* Artigo que contém a mensagem natalina */}
      <article className="w-96 max-md:w-64 h-60 p-4 md:p-6 bg-white rounded-lg shadow-lg flex flex-col justify-center items-center">
        <header>
          {/* Título da seção de mensagens */}
          <h2 className="text-lg md:text-xl font-extrabold text-center mb-4 text-zinc-900">
            Mensagem Natalina
          </h2>
        </header>
        
        {/* Exibe a mensagem atual */}
        <p className="text-sm md:text-base text-zinc-900 text-center mb-4">{message}</p> {/* Exibe a mensagem aqui */}
        
        <footer className="mt-4 text-center">
          {/* Botão para gerar uma nova mensagem */}
          <button
            className="bg-blue-500 text-white text-sm md:text-base px-3 md:px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            onClick={fetchMessage} // Chama a função fetchMessage ao clicar no botão
          >
            Mensagem Mágica
          </button>
        </footer>
      </article>
    </div>
  );
}
