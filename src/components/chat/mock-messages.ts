import { RecommendationCardProps } from "./recommendation-card";

export const usedMessages = {
  value: 0,
};

export const mockedSuggestions = [
  ["Baseados em romance", "Com temas de aventura"],
  ["Leve e divertido", "Profundo e filosófico"],
  ["Era vitoriana", "Antiguidade"],
];

export const mockedMessages = [
  "Olá! Eu sou o Genio Bob, e estou aqui para ajudar você a encontrar o livro perfeito! Como você quer encontrar seu livro hoje?",
  "Ótimo! esse assunto é empolgante. Qual é o tom que você prefere para a leitura?",
  "Perfeito! Um clássico. Qual período da história você prefere explorar no livro?",
];

export const mockRecommendations = [
  {
    title: "As Aventuras de Tom Sawyer",
    author: "Mark Twain",
  },
  {
    title: "A Ilha do Tesouro",
    author: "Louis Stevenson",
  },
  {
    title: "Viagens de Gulliver",
    author: "Jonathan Swift",
  },
] satisfies RecommendationCardProps[];
