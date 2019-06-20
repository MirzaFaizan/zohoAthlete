import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
// import Image from './faizan.jpg'
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
//   console.log(props.data)
  return (
    
    <div className={classes.root}>
        <Container>

        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={5} style={{ borderRight: '0.07em solid grey',  }}>
                        <Typography variant="h4" color="primary">
                            {props.data.AccountUsername}
                        </Typography>
                        <Typography variant="h5" color="primary">
                            User ID
                        </Typography>
                        <Typography variant="subtitle2">
                            {
                                 props.data.ID ? props.data.ID : '-'
                            }
                               
                            
                        </Typography>

                        <Typography variant="h5" color="primary">
                            Sport Testing ID
                        </Typography>
                        <Typography variant="subtitle2">
                            {
                                props.data.SporttestingID ? props.data.SporttestingID : '-'
                            }
                        </Typography>

                        <Typography variant="h5" color="primary">
                            Date of Birth
                        </Typography>
                        <Typography variant="subtitle2">
                            {
                                props.data.DateofBirth ? props.data.DateofBirth : '-'
                            }
                        </Typography>

                        <Typography variant="h5" color="primary">
                            Primary Team
                        </Typography>
                        <Typography variant="subtitle2">
                            {props.data.PrimaryTeam ? props.data.PrimaryTeam :'-'}
                        </Typography>

                        <Typography variant="h5" color="primary">
                            RegisterTapAccount?
                        </Typography>
                        <Typography variant="subtitle2">
                            {props.data['RegisterTAPAccount?'] ? props.data['RegisterTAPAccount?'] : '-'}
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={3} >

                        <Typography variant="h5" color="primary">
                            Address Line 1
                        </Typography>
                        <Typography variant="subtitle2">
                            {props.data.AddressLine1 ? props.data.AddressLine1 : '-'}
                        </Typography>

                        <Typography variant="h5" color="primary">
                        Address Line 2
                        </Typography>
                        <Typography variant="subtitle2">
                        {props.data.AddressLine2 ? props.data.AddressLine2 : '-'}
                        </Typography>

                        <Typography variant="h5" color="primary">
                            State/Province
                        </Typography>
                        <Typography variant="subtitle2">
                            {props.data['State/Province'] ? props.data['State/Province'] : '-'}
                        </Typography>

                        <Typography variant="h5" color="primary">
                            City/District
                        </Typography>
                        <Typography variant="subtitle2">
                            {props.data['City/District'] ? props.data['City/District'] : '-'}
                        </Typography>

                        {/* <Typography variant="h5" color="primary">
                            MEMORY
                        </Typography>
                        <Typography variant="subtitle2">
                            474
                        </Typography> */}
                    </Grid>

                    <Grid item xs={12} sm={4} container alignContent="center">
                        <Avatar alt="Remy Sharp" src='http://cdn.onlinewebfonts.com/svg/img_181369.png'  className={classes.bigAvatar} />
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
