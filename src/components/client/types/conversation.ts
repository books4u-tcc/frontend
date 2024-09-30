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
