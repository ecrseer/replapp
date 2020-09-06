
import React from 'react';
import  TextFl  from '../../components/TextField';
import Colorizd from '../../components/TextFColor';
import { useEffect,useState } from 'react';
import Alert from '@material-ui/lab/Alert';



 

function Myindex (){
  const [camp,setCamp] = useState('Carregando');  
  const [timer,setTimer] = useState();
  const [errin,setErrin] = useState(null);
 
 

  const handleChange2 = ({target})=>{
    setTimer(clearTimeout());
    setTimer(setTimeout(()=>replacer(target.value),1500));
    
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
       

       const indx = (
       <div>
         <TextFl theChange={handleChange2} answer={camp} />
          {errin}
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
      