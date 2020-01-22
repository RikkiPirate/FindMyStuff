import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

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
    margin: theme.spacing(2)
  },
  marginModal: {
    margin: theme.spacing(1)
  },
  formControl: {
    margin: theme.spacing(3)
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
    dateFound: Date.now(),
    wasloosed: false,
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

  // function onChangeName(e) {
  //   setDocument({
  //     ...state,
  //     person: { ...state.person, name: e.target.value }
  //   });
  //  }

  function onChangeDocType(e) {
    debugger;
    setDocument({
      ...state,
      document: { ...state.document, documentTypeId: e.target.value }
    });
  }

  const onChangeRadio = e => {
    if (e.target.value === "Found") {
      setDocument({
        ...state,
        documentXperson: {
          ...state.documentXperson,
          wasFound: e.target.value,
          wasloosed: !e.target.value
        }
      });
    }
    if (e.target.value === "Lost") {
      setDocument({
        ...state,
        documentXperson: {
          ...state.documentXperson,
          wasloosed: e.target.value,
          wasFound: !e.target.value
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
              {/* <FormControl component="fieldset" className={classes.formControl}> */}
              <h4>Create Document</h4>
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
              GET CORDENATES
              <hr></hr>
              <FormLabel component="legend">You:</FormLabel>
              <RadioGroup
                aria-label="gender"
                name="gender1"
                onChange={onChangeRadio}
                
              >
                <FormControlLabel
                  value="Found"
                  control={<Radio />}
                  label="Found"
                  labelPlacement="Start"
                />
                <FormControlLabel
                  value="Lost"
                  control={<Radio />}
                  label="Loose"
                  labelPlacement="end"
                />
              </RadioGroup>
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
              {/* </FormControl> */}
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default RegisterDoc;
