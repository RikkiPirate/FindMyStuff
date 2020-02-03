import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import Button from "@material-ui/core/Button";

import { post, cors } from "./../../Services/ConsumeServices";
import { getUrlSaveDocument } from "./../../Services/ServiceDocuments";
import FillDropDown from "./../DropDownField";
import MapsGetCoordenates from "./MapGetCoordenates";

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
    margin: theme.spacing(1)
  },
  marginModal: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(1),
    display: "inline-block!"
  }
}));

const uuid = require("uuid");

const InitialState = {
  document: {
    id: uuid.v4(),
    docNumber: "",
    docName: "",
    documentTypeId: uuid.v4(),
    picture: ""
  },
  documentXperson: {
    id: uuid.v4(),
    personId: uuid.v4(),
    documentId: uuid.v4(),
    wasFound: false,
    dateFound: null,
    wasloosed: true,
    dateLost: null,
    latitude: 0,
    longitud: 0
  },
  person: {
    id: uuid.v4(),
    name: "",
    lastName: "",
    email: "",
    phone: ""
  }
};

function RegisterDoc(props) {
  const classes = myStyles();

  const [state, setDocument] = useState(InitialState);
  const [checked, setchecked] = useState(false);

  function onChange(obj, e) {
    switch (obj) {
      case "person":
        setDocument({
          ...state,
          [obj]: { ...state.person, [e.target.name]: e.target.value }
        });
        break;
      case "document":
        setDocument({
          ...state,
          [obj]: { ...state.document, [e.target.name]: e.target.value }
        });
        break;
      case "documentXperson":
        setDocument({
          ...state,
          [obj]: { ...state.documentXperson, [e.target.name]: e.target.value }
        });
        break;
      default:
        break;
    }
  }

  function onChangeDocType(e) {
    setDocument({
      ...state,
      document: { ...state.document, documentTypeId: e.target.value }
    });
  }

  const onChangeRadio = name => e => {
    setchecked(x => !x);

    if (e.target.checked) {
      setDocument({
        ...state,
        documentXperson: {
          ...state.documentXperson,
          wasloosed: !state.documentXperson.wasloosed,
          wasFound: !state.documentXperson.wasFound
        }
      });
    } else {
      setDocument({
        ...state,
        documentXperson: {
          ...state.documentXperson,
          wasloosed: !state.documentXperson.wasloosed,
          wasFound: !state.documentXperson.wasFound
        }
      });
    }
  };

  const onSaveClick = e => {
    const url = getUrlSaveDocument();
    const document = state.document;
    const person = state.person;
    let documentXperson = state.documentXperson;
    documentXperson.person = person;
    let data = document;
    data.documentXperson = [state.documentXperson];
    console.log(data);

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
      method: post,
      headers: myHeaders,
      body: JSON.stringify(data),
      redirect: "follow",
      mode: cors
    };
    fetch(url, requestOptions)
      .then(message => {
        return message.json();
      })
      .then(dataService => {
        debugger;
        if (dataService.id) {
          alert("saved information Correctly");
          document.getElementById("btnClear").click();
        }
        return dataService;
      })
      .catch(error => console.log("error", error));
  };

  if (props.data) {
    state.document.docNumber = props.data.Data.docNumber
      ? props.data.Data.docNumber
      : "";
  }

  if (props.show) {
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <h3>Document</h3>
              Lost &larr;
              <Switch
                checked={checked}
                onChange={onChangeRadio("")}
                value="something"
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              &rarr; Found
              <hr></hr>
              <TextField
                label="Doc number:"
                id="DocNumber"
                defaultValue={state.document.docNumber}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
              <TextField
                label="Name in document:"
                id="NameDocument"
                required
                name="docName"
                onChange={e => onChange("document", e)}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: false
                }}
              />
              <br></br>
              <FillDropDown value={0} edit={true} event={onChangeDocType} />
              <br></br>
              <MapsGetCoordenates></MapsGetCoordenates>
              <hr></hr>
              Personal Information:
              <hr></hr>
              <TextField
                label="Name:"
                id="namePerson"
                name="name"
                onChange={e => onChange("person", e)}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: false
                }}
              />
              <TextField
                label="Last name:"
                id="lastNamePerson"
                name="lastName"
                onChange={e => onChange("person", e)}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: false
                }}
              />
              <br></br>
              <TextField
                label="Email:"
                id="emailPerson"
                name="email"
                onChange={e => onChange("person", e)}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: false
                }}
              />
              <TextField
                label="Phone:"
                id="phonePerson"
                name="phone"
                onChange={e => onChange("person", e)}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: false,
                  title: "person"
                }}
              />
              <hr></hr>
              <Button variant="contained" color="primary" onClick={onSaveClick}>
                Save
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RegisterDoc;
