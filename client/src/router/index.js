import { PATHS } from "@/constants";
import Contact from "@/pages/Contact";
import Home from "@/pages/Home";
import Product from "@/pages/Product";

const routes = [
  {
    path: PATHS.HOME,
    page: Home,
  },
  {
    path: PATHS.PRODUCT,
    page: Product,
  },
  {
    path: PATHS.CONTACT,
    page: Contact,
  },
];

export { routes };
