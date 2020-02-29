import React from 'react';
import Drawer from './components/ui/Drawer';
import './App.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import { useLoader } from "./hooks/useLoader";

const styles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

function App() {

  let loader = useLoader();
  const classes = styles();
  return (
    <div className='App'>
      <Backdrop className={classes.backdrop} open={loader} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Drawer />
    </div>
  );
}

export default App;
