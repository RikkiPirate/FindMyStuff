import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";
import getUrlSeachDocument from "./../Services/ServiceDocuments";

const myStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing(0)
  },
  withoutLabel: {
    marginTop: theme.spacing(3)
  },
  textField: {
    width: 600
  }
}));

let state = {
  Data: {
    id: 0,
    docNumber: "",
    docName: "",
    documentTypeId: 0,
    picture: ""
  },
  ServiceResponse: {}
};

let _props = {};

const handleUpdateClick = props => {
  console.log(props);
 
  const url = getUrlSeachDocument(state.docNumber);

  fetch(url)
    .then(message => {
      state.ServiceResponse = message;
      return message.json();
    })
    .then(dataService => {
      // console.log("globalState", _state);
      console.log(state);
      if (state.ServiceResponse.status > 400) {
        alert("Item not Found.");
      } else {
        state.Data = dataService;
      }
      _props.setStateApp(state);
    });
};
const handleOnChange = e => {
  state.docNumber = e.target.value;
};

function docNumber(props) {
  _props = props;

  const classes = myStyles();

  return (
    <div className="btnSearch">
      <TextField
        InputProps={{
          readOnly: state.Data.id > 0
        }}
        label="Doc number:"
        id="outlined-start-adornment"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        onChange={handleOnChange}
      />
      <br></br>
      <Button variant="contained" color="primary" onClick={handleUpdateClick}>
        Search
      </Button>
    </div>
  );
}

export default docNumber;
