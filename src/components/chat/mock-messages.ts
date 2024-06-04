import { RecommendationCardProps } from "./recommendation-card";

export const usedMessages = {
  value: 0,
};

export const mockedSuggestions = [
  ["Baseados em romance", "Com temas de aventura"],
  ["Leve e divertido", "Profundo e filosófico"],
  ["Era vitoriana", "Antiguidade"],
];

export const mockRecommendations = [
  {
    title: "As Aventuras de Tom Sawyer",
    author: "Mark Twain",
    imageSrc: 'https://m.media-amazon.com/images/I/71RXz8nq2cL._AC_UF1000,1000_QL80_.jpg'
  },
  {
    title: "A Ilha do Tesouro",
    author: "Louis Stevenson",
    imageSrc: 'https://www.lpm.com.br/livros/imagens/ilha_do_tesouro_9788525428714_hd.jpg'
  },
  {
    title: "Viagens de Gulliver",
    author: "Jonathan Swift",
    imageSrc: 'https://m.media-amazon.com/images/I/916ApCZHQUS._AC_UF1000,1000_QL80_.jpg',
    link: 'https://www.amazon.com.br/Viagens-Gulliver-Jonathan-Swift/dp/8563560123'
    
  },
] satisfies RecommendationCardProps[];


export const mockedMessages = [
  "Olá! Eu sou o Genio Bob, e estou aqui para ajudar você a encontrar o livro perfeito! Como você quer encontrar seu livro hoje?",
  "Ótimo! esse assunto é empolgante. Qual é o tom que você prefere para a leitura?",
  "Perfeito! Um clássico. Qual período da história você prefere explorar no livro?",
  ['Ótimo, aqui estão minhas sugestões:', mockRecommendations],
  'Claro! Esse livro é uma obra excepcional que irá te levar em uma grande aventura'
] as (string | [string, RecommendationCardProps[]])[];

