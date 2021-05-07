import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
//import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  formControl: {
    margin: theme.spacing(0),
  },
}));

export default function CheckboxesGroup({lista, rama, funcion, valores}) {
    
  const temp = () => {
    let objTomado;
    valores.forEach(e => {
        if(rama === e.name && e.value) {
            objTomado = e.value
        }
    });
    if(objTomado){
//        console.log("Tomado => ", objTomado);
        return objTomado
    } else {
        let obj = new Object();
        lista.forEach((doc) => {
            obj[doc] = false;
        })
//        console.log("Nuevo => ", obj);
        return obj;
    }
  }

  const inicial = temp()

  const classes = useStyles();
  const [state, setState] = React.useState(inicial);


  const handleChange = (event) => {
        let obj = new Object();
        lista.forEach((doc) => {
            if(doc === event.target.name) {
                obj[doc] = event.target.checked
            } else {
                obj[doc] = false;
            }
        })
        setState(obj)
        let res = {
            name: `${rama}`,
            value: obj
        }
        funcion(res)
        //setState({ ...state, [event.target.name]: event.target.checked });
  };


  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
            {lista.map((esp) => <FormControlLabel
                control={<Checkbox checked={state[esp]} onChange={handleChange} name={esp} />}
                label={esp}
            />)}
        </FormGroup>
      </FormControl>
    </div>
  );
}
