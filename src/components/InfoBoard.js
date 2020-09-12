import Typography from '@material-ui/core/Typography';

 import React,{memo} from 'react'; 
 
 import Paper from '@material-ui/core/Paper';
 import testosinho from '../const/contento';
 import imgjp from '../const/icone-tela-android.jpg';

 function infoBoard(){
  return(
    <div className="mb-3">
  <Paper elevation={3} >
      <div> 
        <Typography variant="h5" component="span" color="secondary">É uma ferramenta</Typography><br/>
        <Typography variant="h6" component="span" color="primary">que também é app</Typography><br/>
        <img src={imgjp} alt="adicione a sua tela inicial" />
        
        <br/>
        <Typography variant="body2" component="span" color="primary">{testosinho}</Typography><br/><br/>
        
 

        
      </div>
    </Paper>
   <Typography variant="caption" component="span" color="#345" width="2%">Gabriel Justino m. Couto</Typography><br/><br/>
   </div>
  );

 }

 export default memo(infoBoard);