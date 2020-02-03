import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import ShowMap from "./../../map";

import TextField from "@material-ui/core/TextField";

const myStyles = makeStyles(theme => ({
  textField: {
    width: 200
  },

  margin: {
    margin: theme.spacing(1)
  }
}));
const stateInitial = { latitude: 123123123, longitud: 123123123 };

function MapsGetCoordenates(props) {
  const classes = myStyles();

  const [state, setState] = useState(stateInitial);

  //   function onChange(obj, e) {
  //     setState({
  //       ...state,
  //       [obj]: { ...state.person, [e.target.name]: e.target.value }
  //     });
  //   }

  return (
    <div>
      <TextField
        label="latitud:"
        id="latitud"
        required
        name="latitud"
        // onChange={e => onChange("document", e)}
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        InputProps={{
          readOnly: true
        }}
      />
      <TextField
        label="longitud:"
        id="longitud"
        required
        name="longitud"
        // onChange={e => onChange("document", e)}
        className={clsx(classes.margin, classes.textField)}
        variant="outlined"
        InputProps={{
          readOnly: true
        }}
      />
      <ShowMap lat={state.latitude} long={state.longitud}></ShowMap>
    </div>
  );
}

export default MapsGetCoordenates;
