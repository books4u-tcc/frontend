import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { MyAccount } from "../pages/MyAccount";
import { About } from "../pages/About";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: '/myaccount',
    element: <MyAccount />
  },

  {
    path: '/about',
    element: <About />
  }

])