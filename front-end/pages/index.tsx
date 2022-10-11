import { Box, Button, Dialog, DialogActions, Grid, TextField } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'
import { useIndex } from '../src/hooks/pages/useIndex'

const Home: NextPage = () => {
  const { listaProfessores } = useIndex(); 

  return (
    <div>
      <Box sx={{ backgroundColor: 'secondary.main' }}>
        <Lista professores={listaProfessores}></Lista>
      </Box>

      <Dialog open={true} fullWidth PaperProps={({sx: {p:5}})}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField 
              label='Digite o seu nome'
              type='text'
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField 
              label='Digite o seu email'
              type='text'
              fullWidth
            />
          </Grid>
        </Grid>

        <DialogActions sx={{mt: 5}}>
          <Button>Cancelar</Button>
          <Button>Marcar</Button>

        </DialogActions>

      </Dialog>

    </div>
  )
}

export default Home