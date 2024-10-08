import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

import { MyAccount } from "../pages/MyAccount";
import { About } from "../pages/About";
import AccountForm from "../pages/AccountForm";
import { ConversationPage } from "../pages/Conversation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <ConversationPage />,
  },
]);
