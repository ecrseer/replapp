
import React from 'react';
import  TextFl  from '../../components/TextField';
import Colorizd from '../../components/TextFColor';
import Typography from '@material-ui/core/Typography';

import { useEffect,useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InfoBoard from '../../components/InfoBoard';




 

function Myindex (){
  const [camp,setCamp] = useState('______');  
  const [timer,setTimer] = useState();
  const [errin,setErrin] = useState(false);
 
 

  const handleChange2 = ({target})=>{
    let tim = timer; //1400
    clearTimeout(tim); //0
    setTimer(setTimeout(()=>replacer(target.value),1000));
    
  } 
  


  function replacer(tValue){
    try{
      tValue = tValue.replaceAll('_',' ');
      
      setCamp(tValue); 
      
    }catch(ex){
      if(!errin){
        setErrin(true);
        tValue.replace
        (new RegExp('_', 'g'), ' k');

      }
    }
     
    
  } 
const Divzao = styled.div
  `
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: block;
`;
const useStyles = makeStyles({
  root: {
    fontSize: '10px',
    
  },
});
const classes = useStyles();
       
      const titulo = (
        

        <div className={classes.root}>
        <Typography variant="h4" gutterBottom>
        Removedor de Underlines
      </Typography>
      </div>
      );
       const indx = (
       <div>
         <TextFl style= {{marginTop:'25em',}}  theChange={handleChange2} answer={camp} />
          {errin}
        </div>);
        const fedeu = (
          <Alert severity="warning">Seu navegador é muito antigo -- atualize-o</Alert>
        );
         


          useEffect(()=>{
            
          },[]);
  
     
  return(
    <div>
      {titulo}
         {errin? fedeu: <br/>}
        {indx}
        <br/>
        <br/>
          
          <InfoBoard />
         
        

    </div>
  );
}


export default Myindex;
      