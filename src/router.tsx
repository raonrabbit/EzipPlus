import { createBrowserRouter } from "react-router-dom";
import Root from "./components/Root";
import Main from "./routes/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
]);
export default router;
