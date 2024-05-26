import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";

import { MyAccount } from "../pages/MyAccount";
import { About } from "../pages/About";
import AccountForm from "../pages/AccountForm";


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
  },
        
  {
    path: '/login',
    element: <AccountForm type="login"/>
  }

])