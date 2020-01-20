import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import Modal from "@material-ui/core/Modal";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MaskedInput from "react-text-mask";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

function ModalContact(data) {
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

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    textmask: "(  )    -    ",
    numberformat: "1320"
  });
  const handleTextChange = name => event => {
    setValues({
      ...values,
      [name]: event.target.value
    });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  function handleContactClick(e) {
    handleOpen();
  }

  function handleSendClick(e) {
    //llamar servidor
  }

  const handleClose = () => {
    setOpen(false);
  };

  function TextMaskCustom(props) {
    const { inputRef, ...other } = props;

    return (
      <MaskedInput
        {...other}
        ref={ref => {
          inputRef(ref ? ref.inputElement : null);
        }}
        mask={[
          "(",
          /[1-9]/,
          /\d/,
          /\d/,
          ")",
          " ",
          /\d/,
          /\d/,
          /\d/,
          "-",
          /\d/,
          /\d/,
          /\d/,
          /\d/
        ]}
        placeholderChar={"\u2000"}
        showMask
      />
    );
  }

  return (
    <React.Fragment>
      <Button variant="contained" color="primary" onClick={handleContactClick}>
        Contact:
      </Button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paperModal}>
          <form>
            <h2 id="simple-modal-title">Insert Your Data</h2>
            <p id="simple-modal-description">
              don' share vital information about you, be careful
            </p>
            <TextField
              label="Email:"
              id="outlined-start-adornment"
              defaultValue=""
              placeholder="info@mail.co"
              className={clsx(classes.textFieldModal, classes.marginModal)}
              InputProps={{
                readOnly: false,
                type: "email",
                required: true
              }}
            />
            <FormControl className={clsx(classes.marginModal)}>
              <InputLabel htmlFor="formatted-text-mask-input">
                Contact Number
              </InputLabel>
              <Input
                value={values.textmask}
                onChange={handleTextChange("textmask")}
                id="formatted-text-mask-input"
                inputComponent={TextMaskCustom}
                className={clsx(classes.textFieldModal)}
              />
            </FormControl>
            <br></br>
            <Button
              variant="contained"
              color="primary"
              onSubmit={handleSendClick}
            >
              Send
            </Button>
          </form>
        </div>
      </Modal>
    </React.Fragment>
  );
}

export default ModalContact;
