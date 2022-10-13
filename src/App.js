import{BrowserRouter, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";
import AddVeiculos from "./pages/AddVeiculos";
import Dashboard from "./pages/Dashboard";
import DetalhesVeiculos from "./pages/DetalhesVeiculos";
import ListarVeiculos from "./pages/ListarVeiculos";

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
        </Routes>
      </BrowserRouter>

    </div>
  );
}
