import { Route, Routes } from "react-router-dom";
import { routes } from "./router";
import DefaultLayout from "./components/layout/DefaultLayout";
import ScrollToTop from "./contexts/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {routes.map(({ path, page: Page, fullHeight, fullWidth }) => (
          <Route
            key={path}
            path={path}
            element={
              <DefaultLayout fullHeight={fullHeight} fullWidth={fullWidth}>
                <Page />
              </DefaultLayout>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default App;
