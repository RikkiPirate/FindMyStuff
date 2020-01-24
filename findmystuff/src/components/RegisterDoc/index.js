import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";

import FillDropDown from "./../DropDownField";

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

const InitialState = {
  document: {
    id: 0,
    docNumber: "",
    docName: "",
    documentTypeId: 0,
    picture: ""
  },
  documentXperson: {
    id: 0,
    personId: 0,
    documentId: 0,
    wasFound: false,
    dateFound: null,
    wasloosed: true,
    dateLost: Date.now(),
    latitude: 0,
    longitud: 0
  },
  person: {
    id: 0,
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
    debugger;
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
    debugger;
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

    if (state.documentXperson.wasloosed) {
      setDocument({
        ...state,
        documentXperson: {
          ...state.documentXperson,
          dateFound: null,
          dateLost: Date.now()
        }
      });
    }

    if (state.documentXperson.wasFound) {
      setDocument({
        ...state,
        documentXperson: {
          ...state.documentXperson,
          dateFound: Date.now(),
          dateLost: null
        }
      });
    }
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
              <h4>Document</h4>
              Lost
              <Switch
                checked={checked}
                onChange={onChangeRadio("")}
                value="something"
                color="primary"
                inputProps={{ "aria-label": "primary checkbox" }}
              />
              Found
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
              GetCoordenates
              <hr></hr>
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
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RegisterDoc;
