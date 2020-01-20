import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

import ModalContact from "./modal";
import ShowMap from "./../map";
import FillDropDown from "./../DropDownField";

function ShowDoc(data) {
  const initialData = {
    Data: data,
    showMore: false
  };

  const [state, setState] = useState(initialData);
 
 const myStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    withoutLabel: {
      marginTop: theme.spacing(3)
    },
    paperModal: {
      position: "absolute",
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: "2px solid #000",
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3)
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary
    },
    textField: {
      width: 200
    },
    textFieldModal: {
      width: 150
    },
    margin: {
      margin: theme.spacing(2)
    },
    marginModal: {
      margin: theme.spacing(1)
    }
  }));

  const classes = myStyles();

  const handleChange = name => event => {
    setState({ ...state, showMore: event.target.checked });
  };

  function showMore(data, classes) {
    const dxp = data.documentXperson[0];
    const person = data.documentXperson[0].person;
    return (
      <div>
        {dxp.wasLost && <h3>Lost By:</h3>}
        {dxp.wasFound && <h3>Found By:</h3>}
        <TextField
          label="Name:"
          id="PersonName"
          defaultValue={person.name}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          label="Surname:"
          id="Surname"
          defaultValue={person.lastName}
          className={clsx(classes.margin, classes.textField)}
          InputProps={{
            readOnly: true
          }}
        />
        <br></br>

        <ModalContact data={state.Data.data} classes={classes}></ModalContact>
      </div>
    );
  }

  const dxp = state.Data.data.documentXperson[0];

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <h1>Document Found !!!!{state.Data.data.docNumber}!!!! </h1>
              <TextField
                label="Doc number:"
                id="DocNumber"
                defaultValue={state.Data.data.docNumber}
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  readOnly: true
                }}
              />
              <TextField
                label="Doc name:"
                id="docName"
                defaultValue={state.Data.data.docName}
                className={clsx(classes.margin, classes.textField)}
                InputProps={{
                  readOnly: true
                }}
              />
              <br></br>
              <FillDropDown value={state.Data.data.DocType} edit={true}></FillDropDown>
             
              <br></br>
              <ShowMap lat={dxp.latitude} long={dxp.longitud}></ShowMap>
              <hr></hr>
              Show More
              <Switch
                checked={state.showMore}
                onChange={handleChange("")}
                value="checkedB"
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              <hr></hr>
              {state.showMore && showMore(state.Data.data, classes)}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}
export default ShowDoc;
