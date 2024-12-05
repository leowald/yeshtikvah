import App from "./App.jsx";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import FAQ from "./pages/FAQ";
import Home from "./pages/Home";
import Pesukim from "./pages/Pesukim";
import Shiurim from "./pages/Shiurim";
import Sources from "./pages/Sources";
import Stories from "./pages/Stories";
import Subscribe from "./pages/Subscribe";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/donate",
    element: <Donate />,
  },
  {
    path: "/faq",
    element: <FAQ />,
  },
  {
    path: "/pesukim",
    element: <Pesukim />,
  },
  {
    path: "/shiurim",
    element: <Shiurim />,
  },
  {
    path: "/sources",
    element: <Sources />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },
  {
    path: "/stories/:topic",
    element: <Stories />,
  },
  {
    path: "/subscribe",
    element: <Subscribe />,
  },
];

export default routes;
