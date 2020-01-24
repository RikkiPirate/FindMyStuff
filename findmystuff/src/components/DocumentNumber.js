import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../App.css";
import getUrlSeachDocument from "./../Services/ServiceDocuments";

function DocNumber(props) {
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

  const initialData = {
    Data: {
      id: 0,
      docNumber: "",
      docName: "",
      documentTypeId: 0,
      picture: ""
    },
    ServiceResponse: {}
  };

  const [state, setState] = useState(initialData);

  const handleOnChange = e => {
    setState({
      ...initialData,
      Data: { ...initialData.Data, docNumber: e.target.value }
    });
  };

  const handleCleanClick = () => {
    setState(initialData);
    props.setStateApp(initialData);
    document.getElementById("DocSearchControl").value = "";
  };

  const handleUpdateClick = () => {
    const url = getUrlSeachDocument(state.Data.docNumber);

    fetch(url)
      .then(message => {
        state.ServiceResponse = message;
        return message.json();
      })
      .then(dataService => {
        state.searched = true;
        if (state.ServiceResponse.status > 400) {
          // alert("Item not Found.");
          setState({
            ...initialData,
            Data: { ...initialData.Data, id: -1 }
          });
        } else {
          state.Data = dataService;
          setState(state);
        }

        props.setStateApp(state);
      });
  };

  const classes = myStyles();

  return (
    <div className="btnSearch">
      <TextField
        InputProps={{
          readOnly: state.Data.id > 0
        }}
        label="Doc number:"
        id="DocSearchControl"
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        defaultValue={state.Data.docNumber}
        onChange={handleOnChange}
      />
      <br></br>
      {state.Data.id === 0 && (
        <Button variant="contained" color="primary" onClick={handleUpdateClick}>
          Search
        </Button>
      )}
      {state.Data.id !== 0 && (
        <Button variant="contained" color="primary" onClick={handleCleanClick}>
          Clear
        </Button>
      )}
    </div>
  );
}

export default DocNumber;
