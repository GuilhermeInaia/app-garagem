import {Card, CardContent, CardActionArea} from "@mui/material"
import {DirectionsCar, TwoWheeler, DirectionsBike} from "@mui/icons-material"

function Informacao(props){
    return(
        <Card style={{marginTop:10}}>
            <CardContent>
                {props.icone}
                
                <strong style={{marginRigth: 10}}>
                    {props.qtd}
                </strong>

                {props.titulo}

            </CardContent> 
        </Card>
    )
}

export default function Dashboard(){
    
    return(
        <>
            <Informacao icone={<DirectionsCar/>} qtd="5" titulo="Carros" />
            <Informacao icone={<TwoWheeler/>} qtd="5" titulo="Carros"/>
            <Informacao icone={<DirectionsBike/>} qtd="5" titulo="Carros"/>

        </>
    )
}