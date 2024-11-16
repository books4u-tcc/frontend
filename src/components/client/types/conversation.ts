export interface CreateConversationResponse {
  conversation: [
    {
      id: string;
      title: string;
      threadId: string;
    }
  ];
}

export interface SendMessageResponse {
  message: string;
  options?: string[];
  recommendations?: {
    name: string,
    imageUrl: string | null,
    externalLink: string | null,
    author: string | null
  }[],
  canGenerateRecommendations: boolean
  title?: string
}

export interface ConversationResponseItem {
  id: string;
  title: string;
}

export interface ListMessagesResponseMessageRecommendation {
  title: string,
  imageUrl: string | null,
  externalLink: string | null,
  author: string | null
}

export interface ListMessagesResponseMessage {
  role: "user" | "assistant";
  message: string;
  suggestions: (string | ListMessagesResponseMessageRecommendation)[];
  canGenerateRecommendations: boolean;
}

export interface ListMessagesResponse {
  messages: ListMessagesResponseMessage[];
}
