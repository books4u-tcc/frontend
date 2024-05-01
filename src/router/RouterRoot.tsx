import { RouterProvider } from "react-router-dom";
import { router } from "./router";

export function RouterRoot() {
  return <RouterProvider router={router} />
}