import React from 'react';
import { makeStyles
  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import copyButton from './CopyButton';



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

export default function LayoutTextFields( {answer,theChange}) {
  const copyInfo = ()=>{
    navigator.
     clipboard.writeText(`${answer}`)};
  

  const classes = useStyles();
  return (   <div className={classes.root}>
        <TextField
          id="filled-full-width"
          label= "Digite o texto aqui" 
          style={{ margin: 8 }}
          placeholder="Digite"
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          onChange= {theChange? theChange : ()=>{}}
        /> 
         
        <TextField
          id="filled-full-width"
          label="Resposta"
          style={{ margin: 3 }}
          placeholder="Carregando"
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          
          value={answer?answer:''}
          variant="filled"
        /> 
        <copyButton/>
        </div>

        

  );
}



