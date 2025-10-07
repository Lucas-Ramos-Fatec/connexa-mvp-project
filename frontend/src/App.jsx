import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import { TelaInicial } from "./pages/TelaInicial";
import { PaginaPadrao } from "./pages/PaginaPadrao";
import { UsuarioProvider } from "./contextos/Usuario/UsuarioProvider";
import "./index.css";

function App() {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}>
            <Route index element={<TelaInicial />} />
          </Route>
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </UsuarioProvider>
    </BrowserRouter>
  );
}

export default App;
