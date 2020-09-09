
import React from 'react';
import  TextFl  from '../../components/TextField';
import Colorizd from '../../components/TextFColor';
import { useEffect,useState } from 'react';
import Alert from '@material-ui/lab/Alert';
import styled from 'styled-components';



 

function Myindex (){
  const [camp,setCamp] = useState('Carregando');  
  const [timer,setTimer] = useState();
  const [errin,setErrin] = useState(null);
 
 

  const handleChange2 = ({target})=>{
    let tim = timer; //1400
    clearTimeout(tim); //0
    setTimer(setTimeout(()=>replacer(target.value),1300));
    
  } 
  


  function replacer(tValue){
    try{
      tValue = tValue.replaceAll('_',' ');
    }catch(ex){
      if(!errin)
        setErrin('true');
    }
    setCamp(tValue);  
    
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
       

       const indx = (
       <div>
         <TextFl style= {{marginTop:'25em',}}  theChange={handleChange2} answer={camp} />
          {errin}
        </div>);
        const testiv = (
          <div>
          <h1>dsd</h1>
         {/*  <Divzao>
            sweet

          </Divzao> */}
          </div>
        );


          useEffect(()=>{
            
          },[]);
  
     
  return(
    <div>
        {indx}
        {testiv}
    </div>
  );
}


export default Myindex;
      