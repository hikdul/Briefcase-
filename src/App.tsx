import { BrowserRouter, Route, Routes } from "react-router-dom";
import Container from "./components/container";
import MenuV2 from "./components/MenuV2";
import { routes } from "./constants/routes";

function App() {
  return (
    <BrowserRouter>
      <MenuV2 />
      <Container>
          <Routes>
                {routes.map(route => <Route key={route.path} {...route} element={<route.element/>}  />)}
          </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
