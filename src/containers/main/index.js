
import React from 'react';
import  TextFl  from '../../components/TextField';
import colorizd from '../../components/TextFColor';
import { useEffect,useState } from 'react';

const Myindex = ()=>{
  
  const anotr = {
   value:'1'};
//  useEffect()
  const handleChange=({target})=>{
    let campo = target.value;
    campo = campo.replaceAll('_',' ');
    console.log(campo);
    
    }

  return(
    <div>
      <TextFl theChange={handleChange} />
      <colorizd/>
    </div>
  );
}


export default Myindex;
      