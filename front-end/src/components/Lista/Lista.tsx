import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () =>{
    return(
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/o-Drive.png"></Foto>
                <Informacoes>
                    <Nome>Bruno Marques</Nome>
                    <Valor>R$ 200,00 / hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>

        </ListaStyled>
    )
}

export default Lista;