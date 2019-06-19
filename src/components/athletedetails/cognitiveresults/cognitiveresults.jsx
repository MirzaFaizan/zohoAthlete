import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
// import { Slider } from 'material-ui-slider';
import Rating from 'react-rating'


function text(type){
    if(type==='Reasoning'){
        return('Ability to efficiently use (organize relate etc) acquired information')
    }
    else if(type==='Memory'){
        return('Ability to retain and manipulate new information and recover past memories')
    }
    else if(type==='Attention'){
        return('Ability to filter distractions and concentrate on relevant information')
    }
    else if(type==='Coordination'){
        return('Ability to efficiently and precisely carry out organized movements')
    }
    else if(type==='Perception'){
        return ('Abllity to interpret stimuli from environment')
    }
    else{
        return('None')
    }
}

export default function CoginitiveResult(props){

    // console.log(props.data)

    const keys = Object.keys(props.data)
    // console.log(keys)
    return (
        <Container>
            <Paper elevation={3}>
            <Container>
            <Grid container spacing={0}>
                {
                    keys.map((type,key)=>{

                        const rate = (parseInt(props.data[type].Score)/800)
                        // console.log(rate)
                        return (
                            <Grid item xs={4} style={{margin:'5%'}} key={key}>
                                <Typography variant='h4' color='primary'>{type}</Typography>
                                <Typography variant='h4'>{props.data[type].Score}/800</Typography>
                               <Typography>
                               {
                                   text(type)
                               }
                               </Typography>
                                <Rating
                               emptySymbol="fa fa-star-o fa-2x"
                               fullSymbol="fa fa-star fa-2x"
                                initialRating={rate*5}
                                readonly={true}/>
                            </Grid>
                        )
                    })
                }

            </Grid>
            </Container>
            </Paper>
        </Container>
    )
}