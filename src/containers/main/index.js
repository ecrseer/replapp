
import React from 'react';
import  TextFl  from '../../components/TextField';
import Colorizd from '../../components/TextFColor';
import { useEffect,useState } from 'react';

 

function Myindex (){
  const [camp,setCamp] = useState('Carregando');
    const handleChange=({target})=>{
      
      let campo = target.value;
      campo = campo.replaceAll('_',' ');
      console.log(campo);
      setCamp(campo);
       
    };
      

       const indx = (
       <div>
         <TextFl theChange={handleChange} answer={camp} />
         
        </div>);


          useEffect(()=>{
            
          },[camp]);
  
     
  return(
    <div>
        {indx}
    </div>
  );
}


export default Myindex;
      