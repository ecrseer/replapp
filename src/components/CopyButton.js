
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



  export default function copyButton ({copyInfo}){
    return(
    <div>
      <Button variant="contained" color="primary" 
          onClick={copyInfo?copyInfo:()=>{}}>
          Copiar
      </Button> 
       
       
      <Button variant="contained" color="primary" 
          onClick={copyInfo?copyInfo:()=>{}}>
          botao do breno
      </Button>
    </div>);
 }

