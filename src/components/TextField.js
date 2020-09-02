import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

 
export default function LayoutTextFields() {
   
  return ( <div>
        <TextField
          id="filled-full-width"
          label="Digite o texto aqui"
          style={{ margin: 8 }}
          placeholder="Digite"
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        /> 
        </div>
  );
}



