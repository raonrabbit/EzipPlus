import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "pretendard/dist/web/static/pretendard.css";
import router from "./router";
import theme from "./theme";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

const root = createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <ChakraProvider theme={theme}>
    <RouterProvider router={router} />
  </ChakraProvider>
);
