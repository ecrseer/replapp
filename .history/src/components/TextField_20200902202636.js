import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
    color:'#fff'
  },
}
));
export default function LayoutTextFields() {
  const classes = useStyles();

  return ( <div>
        <TextField
          id="filled-full-width"
          label="Digite o texto aqui"
          style={{ margin: 8 }}
          placeholder="Placeholder"
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        /> 
        </div>
  );
}



