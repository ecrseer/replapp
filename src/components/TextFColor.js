import React from 'react';
import { makeStyles,withStyles
  } from '@material-ui/core/styles';
import TextField from './TextField';


const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "green"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "red"
      },
      "&:hover fieldset": {
        borderColor: "yellow"
      },
      "&.Mui-focused fieldset": {
        borderColor: "green"
      }
    }
  }
})(TextField);

const colorizd = () =>{
  return (
  <CssTextField
        
        id="custom-css-standard-input"
        label="Custom CSS"
      />
  )
}
export default colorizd;