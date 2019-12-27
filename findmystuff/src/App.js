import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import DocNumber from "./components/DocumentNumber";
import RegisterDoc from "./components/RegisterDoc";
import ShowDoc from "./components/MatchDoc";

import "./App.css";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  textField: {
    width: 200
  },
  margin: {
    margin: theme.spacing(2)
  }
}));

function setStateApp(data) {
  _state = data;
  console.log("appState", _state);
  registerDocument();
}

let _state = {
  Data: {
    id: 0,
    docNumber: "",
    docName: "",
    documentTypeId: 0,
    picture: ""
  },
  ServiceResponse: {}
};

function registerDocument() {
  // if (_state.Data.docNumber === "" && _state.id > 0) {
  //  return <RegisterDoc data={_state.Data} show={_state.id > 0}></RegisterDoc>;
  //} else {
  console.log("_state", _state);

  if (_state.Data.docNumber !== "") {
    console.log(_state.Data.docNumber !== "");
    return <ShowDoc data={_state.Data}></ShowDoc>;
  } else {
    return (
      <RegisterDoc data={_state.Data} show={_state.Data.id > 0}></RegisterDoc>
    );
  }
}

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <DocNumber setStateApp={setStateApp}></DocNumber>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <br></br>
        {
          _state.Data.docNumber !== "" ? <ShowDoc data={_state.Data}></ShowDoc> : <RegisterDoc data={_state.Data} show={_state.Data.id > 0}></RegisterDoc>
        }
        {/* {registerDocument()} */}
      </header>
    </div>
  );
}

export default App;
