import App from "./App";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import OurMission from "./pages/OurMission";
import Services from "./pages/Services";
const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/services/",
    element: <Services />,
  },
  {
    path: "/about-us/",
    element: <AboutUs />,
  },
  {
    path: "/contact/",
    element: <Contact />,
  },
  {
    path: "/our-mission/",
    element: <OurMission />,
  },
];

export default routes;
