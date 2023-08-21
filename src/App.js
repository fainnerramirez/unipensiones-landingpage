import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PATHS } from "./utils/PathsRouter";
import Home from "./pages/Home.page";
import ErrorPage from "./pages/Error.page";

const router = createBrowserRouter([
  {
    path: PATHS.HOME,
    element: <Home />,
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
