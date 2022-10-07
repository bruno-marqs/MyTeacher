import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'

const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: 'Bruno Marques',
      foto: "https://github.com/o-Drive.png",
      descricao: "Descrição do professor 1",
      valor_hora: 100
    },
    {
      id: 2,
      nome: 'Kelvin Argolo',
      foto: "https://github.com/Kelvin4rgolo.png",
      descricao: "Descrição do professor 2",
      valor_hora: 200
    },
    {
      id: 3,
      nome: 'Lucas Mendes',
      foto: "https://github.com/Luckaszfsa.png",
      descricao: "Descrição do professor 3",
      valor_hora: 300
    },
    {
      id: 4,
      nome: 'Vinicius de Assis',
      foto: "https://github.com/ViniciusDevAssis.png",
      descricao: "Descrição do professor 4",
      valor_hora: 400
    },
    {
      id: 5,
      nome: 'José Marcos',
      foto: "https://github.com/socramcz.png",
      descricao: "Descrição do professor 5",
      valor_hora: 500
    },
    {
      id: 6,
      nome: 'Izabela Pereira',
      foto: "https://github.com/izabela-pereira.png",
      descricao: "Descrição do professor 6",
      valor_hora: 600
    },

  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main' }}>
      <Lista professores={professores}></Lista>
    </Box>
  )
}

export default Home