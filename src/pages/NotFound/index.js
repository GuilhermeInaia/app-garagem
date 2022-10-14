import foto  from "./imagem.svg";
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function NotFound(){
    return(
        <div style={{textAlign: 'center'}}>
            <h2>Página não encontrada</h2>
            <img width="40%" src={foto} style={{display:"block", margin:"26px auto"}}/>


            <Link to="/">
                <Button variant="outlined">Voltar para o inicio</Button>
            </Link>
        </div>

    )
}