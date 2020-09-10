import Typography from '@material-ui/core/Typography';

 import React,{memo} from 'react'; 
 import RefreshIco from '../../../assets/refresh.svg';
 

 function infoBoard(){
  return(
    <div className="mb-3">
  <Card>
    <CardEstilizado>
      <div> 
        <Typography variant="h5" component="span" color="primary">É uma ferramenta</Typography><br/>
        <Typography variant="h6" component="span" color="primary">que também é pwa</Typography><br/><br/>
        <Typography variant="body2" component="span" color="primary">{testosinho}</Typography><br/><br/> 
 

        
      </div>
    </CardEstilizado>
    
   </Card>
   <Typography variant="caption" component="span" color="#345" width="2%">Gabriel Justino m. Couto</Typography><br/><br/>
   </div>
  );

 }

 export default memo(infoBoard);