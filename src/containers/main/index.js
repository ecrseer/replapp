
import React from 'react';
import  TextFl  from '../../components/TextField';
import Colorizd from '../../components/TextFColor';
import { useEffect,useState } from 'react';

 

function Myindex (){
  const [camp,setCamp] = useState('Carregando');
  const [carregando,isCarregando] = useState(false);
    const handleChange=({target})=>{
      
      let campo = target.value;
      if(!carregando){
        isCarregando(true);
        setTimeout(()=>campo = campo.replaceAll('_',' '),3000);        
        setCamp(campo);
        isCarregando(false);

      }        
        
       
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
      