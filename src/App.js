import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// routers
import Dashboard, { dashboardLoader } from "./pages/Dashboard";
import Error from "./pages/Error";

// layouts
import Main, { mainLoader } from "./layouts/Main";
// import { Children } from "react";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
