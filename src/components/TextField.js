import React,{useRef, useState} from 'react';
import { makeStyles
  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import CopyButton from './CopyButton';
import { Portal } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { purple,green } from '@material-ui/core/colors';



const theme = createMuiTheme({
  palette: {
    primary: {main: green[500]},
    secondary: {main: purple[500]},
    
    
  },
});



const useStyles = makeStyles((theme) => ({
  root:{/* 
  display: 'flex',
    flexWrap: 'wrap',
    height: '55ch',
    color:'#fff', */
  },
  textField: { 
    padding:'0.5%',
    color:'white'
}
}
));

export default function LayoutTextFields( {answer,theChange}) {
  const [show,setShow] = useState(false);
  const entrad = useRef(null);
  const container = useRef(null);
  const copyInfo = ()=>{
    navigator.
     clipboard.writeText(`${answer}`);
     //entrad.addEventListener('mouseenter',e=> entrad.style.border ='5px');
    };
    const segundaA = () =>{
      console.log(show);
        setShow(!show);
    }
  

  const classes = useStyles();  
  
  return ( <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <TextField
          id="filled-full-width"
          label= "Digite o texto aqui" 
          //style={{ margin: '8px' }) doesnt work
          color="secondary"
          //className={classes.textField} doesnt work
          autoFocus={true}
          placeholder="Digite"
          ref={entrad}
          margin="normal"
          InputLabelProps={{
            shrink: true,
            root: '#aaa',
            focused: '#fff',
            
            
          }}
          InputProps={
            {
              className:classes.textField
          }
        }
          variant="filled"
          onChange= {theChange? theChange : ()=>{} }
          
        />  
         
         <TextField
          id="filled-full-width"
          label= "Result" 
          //style={{ margin: '8px' }) doesnt work
          
          className={classes.textField}
          placeholder="Digite"
          
          margin="normal"
          InputLabelProps={{
            shrink: true,
            color: "primary"
          }}
          InputProps={
            {
              className:classes.textField
          }
        }
          value={answer?answer:''}
          variant="filled"
        />  <br/>
        <CopyButton  copyInfo={copyInfo} testez={segundaA} style={{ cursor: 'not-allowed' }}/>
         
         
         
        </div>
        </ThemeProvider>

        

  );
}



