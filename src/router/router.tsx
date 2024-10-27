import { createBrowserRouter } from "react-router-dom";
import { MyAccount } from "../pages/MyAccount";
import { About } from "../pages/About";
import AccountForm from "../pages/AccountForm";
import { ConversationPage } from "../pages/Conversation";

const conversationPage = <ConversationPage />

export const router = createBrowserRouter([
  {
    path: "/",
    element: conversationPage,
  },

  {
    path: "/account",
    element: <MyAccount />,
  },

  {
    path: "/about",
    element: <About />,
  },

  {
    path: "/account/auth",
    element: <AccountForm />,
  },
  {
    path: "/conversations/:conversationId",
    element: conversationPage,
  },
]);
