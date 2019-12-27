import React, { Component } from "react";
import clsx from "clsx";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = theme => ({
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
});

const DocType = [
  {
    text: "passport",
    value: 1
  },
  {
    text: "Driver license",
    value: 2
  }
];

class RegisterDoc extends Component {
  state = {
    id: 0,
    docNumber: "",
    docName: "",
    documentTypeId: 0,
    picture: ""
  };

  constructor(data) {
    super(data);
    const { docNumber } = data;
    this.state = { docNumber };
  }
  handleChange = event => {
    const documentTypeId = event.target.value;
    this.setState({ documentTypeId: documentTypeId });
    console.log(this.state);
  };

  Createdocument = (data, classes) => {
    return (
      <div className={classes.root}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <h4>Create Document</h4>
              <TextField
                label="Doc number:"
                id="DocNumber"
                defaultValue={this.state.docNumber}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />

              <TextField
                label="Doc name:"
                id="docName"
                required
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: false
                }}
              />
              <br></br>
              <TextField
                label="Doc type:"
                id="DocType"
                select
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: false
                }}
                helperText="Please select document type"
                value={this.state.documentTypeId}
                onChange={this.handleChange}
              >
                {DocType.map(option => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.text}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                label="Doc number:"
                id="outlined-start-adornment"
                defaultValue={this.state.docNumber}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
              <br></br>
              <TextField
                label="Doc number:"
                id="outlined-start-adornment"
                defaultValue={this.state.docNumber}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
              <TextField
                label="Doc number:"
                id="outlined-start-adornment"
                defaultValue={this.state.docNumber}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
              <br></br>
              <TextField
                label="Doc number:"
                id="outlined-start-adornment"
                defaultValue={this.state.docNumber}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
              <TextField
                label="Doc number:"
                id="outlined-start-adornment"
                defaultValue={this.state.docNumber}
                className={clsx(classes.margin, classes.textField)}
                variant="outlined"
                InputProps={{
                  readOnly: true
                }}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  };

  render() {
    const { classes } = this.props;
    if (this.props.show) {
      return this.Createdocument(this.state, classes);
    } else {
      return <div></div>;
    }
  }
}

export default withStyles(useStyles)(RegisterDoc);
