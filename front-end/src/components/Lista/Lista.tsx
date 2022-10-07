import { Button } from "@mui/material";
import { Descricao, Foto, Informacoes, ItemLista, ListaStyled, Nome, Valor } from "./Lista.style";

const Lista = () =>{
    return(
        <ListaStyled>
            <ItemLista>
                <Foto src="https://github.com/o-Drive.png"></Foto>
                <Informacoes>
                    <Nome>Bruno Marques</Nome>
                    <Valor>R$ 150,00 / hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{ width: '70%' }}>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/Kelvin4rgolo.png"></Foto>
                <Informacoes>
                    <Nome>Kelvin Argolo</Nome>
                    <Valor>R$ 200,00 / hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{ width:'70%' }}>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/Luckaszfsa.png"></Foto>
                <Informacoes>
                    <Nome>Lucas Mendes</Nome>
                    <Valor>R$ 200,00 / hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{ width:'70%' }}>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/ViniciusDevAssis.png"></Foto>
                <Informacoes>
                    <Nome>Vinicius de Assis</Nome>
                    <Valor>R$ 200,00 / hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{ width:'70%' }}>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/socramcz.png"></Foto>
                <Informacoes>
                    <Nome>José Marcos</Nome>
                    <Valor>R$ 200,00 / hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{ width:'70%' }}>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>
            <ItemLista>
                <Foto src="https://github.com/izabela-pereira.png"></Foto>
                <Informacoes>
                    <Nome>Izabela Pereira</Nome>
                    <Valor>R$ 250,00 / hora</Valor>
                    <Descricao>Aulas de Programação</Descricao>
                    <Button sx={{ width:'70%' }}>Marcar Aula</Button>
                </Informacoes>
            </ItemLista>

        </ListaStyled>
    )
}

export default Lista;