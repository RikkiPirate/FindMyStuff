import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { url_base } from "./../Constants/apiUrl";
import { useAsync } from "react-async";

const DocTypeOriginal = [
  {
    type: "passport",
    id: 1
  }
];

const url = url_base + "query/DocumentType";

const getComboData = async () =>
  await fetch(url)
    .then(message => {
      return message.json();
    })
    .then(dataService => {
      console.log(dataService);
      return dataService;
    });

function FillDropDown(props) {
  const myStyles = makeStyles(theme => ({
    textField: {
      width: 200
    },

    margin: {
      margin: theme.spacing(2)
    }
  }));
  const classes = myStyles();
  const [DocType, setDocType] = React.useState(DocTypeOriginal);

  const handleChange = (e,event) => {
    setDocType(e.target.value);

    if (props.event) {
      props.event(e);
    }
  };
  const [canEdit, setCanEdit] = React.useState(props.edit);
  const { data, error, isLoading } = useAsync({ promiseFn: getComboData });

  if (isLoading) return "Loading...";
  if (error) return `Something went wrong: ${error.message}`;
  if (data) {
    console.log("data", data);
    return (
      <React.Fragment>
        {canEdit ? (
          <TextField
            variant="outlined"
            label="Doc type:"
            id="DocType"
            select
            className={clsx(classes.margin, classes.textField)}
            onChange={handleChange}
            value={DocType.id}
          >
            {data.map(option => (
              <MenuItem key={option.id} value={option.id}>
                {option.type}
              </MenuItem>
            ))}
          </TextField>
        ) : (
          <TextField
            label="Doc type:"
            id="DocType"
            select
            className={clsx(classes.margin, classes.textField)}
            onChange={handleChange}
            value={DocType.id}
          >
            {data.map(option => (
              <MenuItem key={option.id} value={option.id}>
                {option.type}
              </MenuItem>
            ))}
          </TextField>
        )}{" "}
      </React.Fragment>
    );
  }
}

export default FillDropDown;
