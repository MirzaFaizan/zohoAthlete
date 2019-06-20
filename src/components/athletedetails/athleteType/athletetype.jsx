import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography,Grid,Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';


const styles = theme => ({
    root: {
        '&$disabled': {
          color: 'black',
        },
      },
      disabled: {},
 
})

 function AthleteType(props){
    console.log(props.data)
    const { classes } = props;
   let keys = Object.keys(props.data.TAPresults).map((type)=>{
        return (type)
    })

    console.log(keys)
    return (
        <Container style={{paddingTop:'2%'}}>
            <Typography variant='h4' color='primary' style={{paddingBottom:'2%'}}>ATHLETE TYPE REPORT</Typography>
            <Paper elevation={3}>
              <Grid container spacing={4}>
                <Grid item xs={12} container style={{paddingTop:'2%'}} spacing={2}>
                {
                        Object.values(props.data.TAPresults).map((type,key)=>{
                            console.log(type)
                            return(
                                <Grid item xs={12} container key={key} >
                                <Grid item xs={4}>
                                <Typography variant='h6' color='primary' style={{paddingLeft:'5%'}}>{keys[key]}</Typography>
                                </Grid>
                                <Grid item xs={8} style={{paddingRight:'5%',paddingTop:'0.55%'}}>
                                    <Slider 
                                      classes={{
                                        root: classes.root, // class name, e.g. `root-x`
                                        disabled: classes.disabled, // class name, e.g. `disabled-x`
                                      } }
                                      disabled={true} marks defaultValue={type.Score} max={100} valueLabelDisplay='on' color='primary' />
                                </Grid>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Grid>
            </Paper>
        </Container>
    )
}

AthleteType.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(AthleteType);