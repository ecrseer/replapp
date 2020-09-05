
import React from 'react';
import  TextFl  from '../../components/TextField';
import Colorizd from '../../components/TextFColor';
import { useEffect,useState } from 'react';


 

function Myindex (){
  const [camp,setCamp] = useState('Carregando');  
  const [timer,setTimer] = useState();
 
 

  const handleChange2 = ({target})=>{
    setTimer(clearTimeout());
    setTimer(setTimeout(()=>replacer(target.value),1500));
    
  } 


  function replacer(field){
    field = field.replaceAll('_',' ');
    setCamp(field);  
    
  } 
       

       const indx = (
       <div>
         <TextFl theChange={handleChange2} answer={camp} />
         
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
      