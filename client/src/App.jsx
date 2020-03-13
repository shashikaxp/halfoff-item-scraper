import React, { useState, useEffect } from "react";
import "./App.css";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, useHistory } from "react-router-dom";

import { useLoader } from "./hooks/useLoader";

import Drawer from "./components/ui/Drawer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import SnackBar from "./components/ui/SnackBar";

const styles = makeStyles(theme => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: "#fff"
  }
}));

function App() {
  const history = useHistory();
  const [loader, apiError, apiErrorDetails] = useLoader();
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(apiError);
    if (apiErrorDetails.errorCode === 403) {
      history.push("/login");
    }
  }, [apiError, apiErrorDetails]);

  useEffect(() => {
    // history.push("/login");
  }, []);

  const onClose = () => {
    setError(false);
  };

  const classes = styles();
  return (
    <div className="App">
      <Backdrop className={classes.backdrop} open={loader}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <SnackBar
        open={error}
        message={apiErrorDetails.data.message}
        type="error"
        handleClose={onClose}
      />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Drawer} />
      </Switch>
      {/* <Drawer /> */}
    </div>
  );
}

export default App;
