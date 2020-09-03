
import React from 'react';
import  TextFl  from '../../components/TextField';
import Colorizd from '../../components/TextFColor';
import { useEffect,useState } from 'react';

 

function Myindex (){
  const [camp,setCamp] = useState('Carregando');
  const [carregando,isCarregando] = useState(false);

  function replacer(field){
    field = field.replaceAll('_',' ');
    setCamp(field);
    isCarregando(false);
    console.log(carregando);
  }
    const handleChange=({target})=>{      
      
      if(!carregando){
        let campo = target.value;
        isCarregando(true);
        setTimeout(()=>replacer(campo) ,100);   
      }      
    };
      

       const indx = (
       <div>
         <TextFl theChange={handleChange} answer={camp} />
         
        </div>);


          useEffect(()=>{
            
          },[]);
  
     
  return(
    <div>
        {indx}
    </div>
  );
}


export default Myindex;
      