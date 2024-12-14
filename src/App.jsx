import "./App.css";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

import StartPage from "./components/StartPage/StartPage";
import Layout from "./components/Layout/Layout";
import MainContent from "./components/MainContent/MainContent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Używamy Layout jako głównego elementu
    children: [
      {
        index: true,
        element: <StartPage />,
      },
      {
        path: ":id",
        element: <MainContent />,
      },
      {
        path: "/a",
        element: <div>a</div>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;