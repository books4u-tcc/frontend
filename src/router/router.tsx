import { createBrowserRouter } from "react-router-dom";
import { MyAccount } from "../pages/MyAccount";
import { About } from "../pages/About";
import AccountForm from "../pages/AccountForm";
import { ConversationPage } from "../pages/Conversation";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

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
    path: "/auth/login",
    element: <LoginPage />,
  },
  {
    path: "/auth/register",
    element: <RegisterPage />,
  },
  {
    path: "/conversations/:conversationId",
    element: conversationPage,
  },
]);
