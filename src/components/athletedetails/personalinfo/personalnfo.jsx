import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import Image from './faizan.jpg'
import { Container } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:10
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  bigAvatar: {
    width: 250,
    height: 250,
    alignSelf: "center",
    marginRight:-20
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Container>

        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ borderRight: '0.07em solid grey',  }}>
                        <Typography variant="h4" color="primary">
                            Faizan Ejaz
                        </Typography>
                        <Typography variant="subtitle1">
                        simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.  Lorem
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={4} >

                        <Typography variant="h5" color="primary">
                            SPORTS
                        </Typography>
                        <Typography variant="subtitle2">
                            Futsal, Basketball, Tennis
                        </Typography>

                        <Typography variant="h5" color="primary">
                            TEAM
                        </Typography>
                        <Typography variant="subtitle2">
                            The A team
                        </Typography>

                        <Typography variant="h5" color="primary">
                            REACTION
                        </Typography>
                        <Typography variant="subtitle2">
                            0.8 S
                        </Typography>

                        <Typography variant="h5" color="primary">
                            SPEED
                        </Typography>
                        <Typography variant="subtitle2">
                            552
                        </Typography>

                        <Typography variant="h5" color="primary">
                            MEMORY
                        </Typography>
                        <Typography variant="subtitle2">
                            474
                        </Typography>
                    </Grid>

                    <Grid item xs={12} sm={4} alignContent="center">
                        <Avatar alt="Remy Sharp" src={Image}  className={classes.bigAvatar} />
                    </Grid>        
                    </Grid>   
                </Paper>
                </Grid>
                
            </Grid>
        </Container>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
