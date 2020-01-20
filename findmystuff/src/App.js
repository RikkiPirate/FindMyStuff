import React, { useState } from "react";
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

function App() {
  const classes = useStyles();
  const [state, setState] = useState({
    Data: {
      id: 0,
      docNumber: "",
      docName: "",
      documentTypeId: 0,
      picture: ""
    },
    ServiceResponse: {},
    Searched: false
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className={classes.root}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <Paper className={classes.paper}>
                <DocNumber setStateApp={setState}></DocNumber>
              </Paper>
            </Grid>
          </Grid>
        </div>
        <br></br>

        {state.Data.id > 0 ? (
          <ShowDoc data={state.Data} />
        ) : (
          state.Data.id === 0 &&
          state.searched && <RegisterDoc data={state} show={true} />
        )}
      </header>
    </div>
  );
}

export default App;
