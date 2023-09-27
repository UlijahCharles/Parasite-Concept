import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Page404 from "./routes/page404";
import Home from "./pages/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <Page404 />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
