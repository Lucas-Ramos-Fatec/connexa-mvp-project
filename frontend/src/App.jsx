import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import { TelaInicial } from "./pages/TelaInicial";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tela-inicial" element={<TelaInicial />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
