import { createHashRouter, RouterProvider, Outlet, ScrollRestoration } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Conservacion from "./pages/Conservacion";
import Atracciones from "./pages/Atracciones";

function RootLayout() {
  return (
    <div className="bg-background text-on-surface grainy-texture min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "conservacion", element: <Conservacion /> },
      { path: "atracciones", element: <Atracciones /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
