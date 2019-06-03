import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 600,
  },
  input: {
    marginLeft: 20,
    flex: 1,
  },
  iconButton: {
    padding: 20,
  },
});

function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <div style={{marginTop:'20%'}}>          
        <Grid
            container
            spacing={0}
            align="center"
            justify="center"
        >
            <Grid item>
                <Paper className={classes.root}>
                    <InputBase className={classes.input} placeholder="Search Athlete" />
                    <IconButton className={classes.iconButton} aria-label="Search">
                        <SearchIcon />
                    </IconButton>
                </Paper>
            </Grid>
        </Grid>
    </div>
  );
}

export default CustomizedInputBase;