export interface CreateConversationResponse {
  conversationId: string;
  messages: [
    {
      role: "assistant";
      content: string;
    }
  ];
}

export interface SendMessageResponse {
  userMessage: {
    content: [
      {
        type: "text";
        text: {
          value: string;
          annotations: [];
        };
      }
    ];
  };
}

export interface ConversationResponseItem {
  id: string;
  title: string;
}

export interface ListMessagesResponseMessage {
  role: string;
  message: string;
  suggestions: unknown[];
  canGenerateRecommendations: boolean;
}

export interface ListMessagesResponse {
  messages: ListMessagesResponseMessage[]
}