import React from 'react';
import { makeStyles
  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '55ch',
    color:'#fff',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function LayoutTextFields( {thing,theChange}) {
  const classes = useStyles();
  return (   <div className={classes.root}>
        <TextField
          id="filled-full-width"
          label={!thing? "Digite o texto aqui" : thing.value}
          style={{ margin: 8 }}
          placeholder="Digite"
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange= {theChange? theChange : {}}
        /> 
         
        <TextField
          id="filled-full-width"
          label="Resposta"
          style={{ margin: 8 }}
          placeholder="Carregando"
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
        /> 
        </div>

  );
}



