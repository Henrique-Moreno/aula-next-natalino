// Importa o NextResponse do pacote 'next/server' para facilitar a criação de respostas HTTP
import { NextResponse } from 'next/server';

// Define um array de mensagens natalinas
const messages = [
  "Feliz Natal! Que sua casa se encha de alegria e amor! 🎄✨",
  "Que o espírito natalino traga paz e harmonia para sua vida! 🌟",
  "Boas festas! Que você tenha um Natal cheio de bênçãos! 🎅",
  "Que o Natal seja repleto de momentos mágicos ao lado de quem você ama! 💖",
];

// Exporta uma função assíncrona chamada GET, que será chamada quando uma requisição GET for feita para esta rota
export async function GET() {
  // Gera um índice aleatório com base no comprimento do array de mensagens
  const randomIndex = Math.floor(Math.random() * messages.length);
  
  // Retorna uma resposta JSON contendo uma mensagem aleatória do array
  return NextResponse.json({ message: messages[randomIndex] });
}
