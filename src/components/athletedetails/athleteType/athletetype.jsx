import React from 'react';
import Container from '@material-ui/core/Container';
import { Typography,Grid,Paper } from '@material-ui/core';
import Slider from '@material-ui/lab/Slider';


export default function AthleteType(props){
    console.log(props.data)

   let keys = Object.keys(props.data.TAPresults).map((type)=>{
        return (type)
    })

    console.log(keys)
    return (
        <Container style={{paddingTop:'2%'}}>
            <Typography variant='h4' color='primary' style={{paddingBottom:'2%'}}>ATHLETE TYPE REPORT</Typography>
            <Paper elevation={3}>
              <Grid container spacing={4}>
                {/* <Grid item xs={4} container direction='column' justify='center' alignContent='center' style={{ borderRight: '0.07em solid grey', alignContent:'left' }}>
                    {
                        Object.values(props.data.TAPresults).map((type,key)=>{
                            console.log(type)
                            return(
                                <Grid item xs={12} key={key}>
                                <Typography variant='h5' color='primary' align='center'>{keys[key]}</Typography>
                                <Typography variant='subtitle1' align='center'>{type.Score}</Typography>
                                </Grid>
                            )
                        })
                    }
                </Grid> */}

                <Grid item xs={12} container style={{paddingTop:'2%'}} spacing={2}>
                {
                        Object.values(props.data.TAPresults).map((type,key)=>{
                            console.log(type)
                            return(
                                <Grid item xs={12} container key={key} >
                                <Grid item xs={4}>
                                <Typography variant='h6' color='primary' align='center'>{keys[key]}</Typography>
                                </Grid>
                                <Grid item xs={8} style={{paddingRight:'5%'}}>
                                    <Slider disabled={true} marks defaultValue={type.Score} max={100} valueLabelDisplay='on' />
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