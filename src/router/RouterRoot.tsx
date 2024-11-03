import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { useEffect } from "react";
import { authStoreActions } from "../stores/auth";

export function RouterRoot() {
  useEffect(() => {
    authStoreActions.boot().then()
  }, [])
  return <RouterProvider router={router} />
}