import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "./utils/PathsRouter";
import Home from "./pages/Home.page";
import ErrorPage from "./pages/Error.page";
import Layout from "./layout/Layout";
import About from "./pages/About.page";
import Function from "./pages/Function.page";
import FAQ from "./pages/FAQ.page";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: PATHS.ABOUT,
    element: <About/>,
    errorElement: <ErrorPage />,
  },
  {
    path: PATHS.FUNCTION,
    element: <Function />,
    errorElement: <ErrorPage />,
  },
  {
    path: PATHS.FAQ,
    element: <FAQ />,
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
};

export default App;
