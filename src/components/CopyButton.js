
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



  export default function copyButton ({copyInfo,testez}){
    return(
    <div>
      <Button variant="contained" color="primary" 
          onClick={copyInfo?copyInfo:()=>{}}>
          Copiar
      </Button> 
       
       
      <Button variant="contained" color="secondary" style={{marginLeft:'1em'}}
          onClick={testez?testez:()=>{}}>
          botao do breno
      </Button>
    </div>);
 }

