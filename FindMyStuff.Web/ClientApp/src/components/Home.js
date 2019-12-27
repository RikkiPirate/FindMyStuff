import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

const Home = props => (
    <div>
        <h1>Hello, world!</h1>
        <p>Document number:</p>
        <TextField id="DocNumber" label="Outlined" variant="outlined" />
    </div>
);

export default connect()(Home);
