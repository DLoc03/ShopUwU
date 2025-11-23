import { PATHS } from "@/constants/path";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Product from "@/pages/Product";

const routes = [
  {
    path: PATHS.HOME,
    page: Home,
    fullHeight: true,
    fullWidth: true,
  },
  {
    path: PATHS.PRODUCT,
    page: Product,
    fullHeight: false,
    fullWidth: false,
  },
  {
    path: PATHS.CONTACT,
    page: Contact,
    fullHeight: false,
    fullWidth: false,
  },
  {
    path: PATHS.ABOUT,
    page: About,
    fullHeight: false,
    fullWidth: false,
  },
];

export { routes };
