import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/container";
import Menu from "./components/menu";
import { routes } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
          <Routes>
                {routes.map(route => <Route key={route.path} {...route} element={<route.element/>}  />)}
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
