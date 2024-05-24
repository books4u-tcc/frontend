import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import AccountForm from "../pages/AccountForm";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/account/auth',
    element: <AccountForm/>
  }
])