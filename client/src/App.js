import React, { useState, useEffect } from 'react';
import './App.css';
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from "@material-ui/core/styles";
import { useLoader } from "./hooks/useLoader";
import { Switch, Route } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Drawer from './components/ui/Drawer';
import Login from "./pages/login/Login";
import SnackBar from "./components/ui/SnackBar";

const styles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));

function App() {

  const history = useHistory();
  let [loader, apiError, apiErrorMessage] = useLoader();
  let [error, setError] = useState(false);

  useEffect(() => {
    setError(apiError)
  }, [apiError])

  useEffect(() => {
    history.push("/login");
  }, []);

  let onClose = () => {
    setError(false);
  };

  const classes = styles();
  return (
    <div className='App'>

      <Backdrop className={classes.backdrop} open={loader} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <SnackBar open={error} message={apiErrorMessage} type="error" handleClose={onClose} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/" component={Drawer} />
      </Switch>
      {/* <Drawer /> */}
    </div>
  );
}

export default App;
