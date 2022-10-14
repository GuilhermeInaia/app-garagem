import{BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import AddVeiculos from "./pages/AddVeiculos";
import Dashboard from "./pages/Dashboard";
import DetalhesVeiculos from "./pages/DetalhesVeiculos";
import ListarVeiculos from "./pages/ListarVeiculos";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <div >
      
      <BrowserRouter>
        <Navbar/>

        <Routes>
          <Route path="/" element={<Dashboard/>} />
          <Route path="/listar" element={<ListarVeiculos/>} />
          <Route path="/novo" element={<AddVeiculos/>} />
          <Route path="/detalhes" element={<DetalhesVeiculos/>} />
          <Route path="/entrar" element={<Login/>} />

          <Route path="/*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}
