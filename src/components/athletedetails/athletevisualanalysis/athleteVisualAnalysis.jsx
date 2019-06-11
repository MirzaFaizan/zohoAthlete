import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Grid, Container, Typography} from '@material-ui/core';
import { VictoryArea, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

const data=[
    { x: 1, y: 2, y0: 0 },
    { x: 2, y: 3, y0: 1 },
    { x: 3, y: 5, y0: 1 },
    { x: 4, y: 4, y0: 2 },
    { x: 5, y: 6, y0: 2 }
  ];

function AthleteVisualAnalysis(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
        <Container>

        <Grid container spacing={3}>
            <Grid item xs={12}>
            <Typography variant="h4" color="primary" style={{marginTop:15, marginBottom:15}} > ATHLETE VISUAL ANALYSIS </Typography>

            <Paper className={classes.paper} elevation={3}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={4} style={{ borderRight: '0.07em solid grey', alignContent:'left' }}>
                    <Typography variant="h5" color="primary">
                        Sports and Position
                    </Typography>
                    <Typography variant="subtitle2">
                        TennisN/A
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Current Level
                    </Typography>
                    <Typography variant="subtitle2">
                        Recreational
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Compare To
                    </Typography>
                    <Typography variant="subtitle2">
                        TennisRecreational                    
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Strengths
                    </Typography>
                    <Typography variant="subtitle2">
                        Recreation TimeVisual ClarityPreception SpanMulti Object TrackRecreational
                    </Typography>
                    <Typography variant="h5" color="primary">
                        Opportunities
                    </Typography>
                    <Typography variant="subtitle2">
                        Near Far QuicknessContrast SensivityDepth Preception
                    </Typography>
                    
                    </Grid>
                    

                    <Grid item xs={12} sm={8} alignContent="center">
                    <VictoryChart polar
                      theme={VictoryTheme.material}
                    >
                    <VictoryPolarAxis dependentAxis
                        style={{ axis: { stroke: "none" } }}
                        tickFormat={() => null}
                    />
                    <VictoryPolarAxis/>
                    <VictoryArea
                        data={data}
                        style={{
                            height:'50%',
                        data: { fill: "#c43a31" },
                        }}
                    />
                    </VictoryChart>
                    </Grid>        
                    </Grid>   
                </Paper>
                </Grid>
                
            </Grid>
        </Container>
    </div>
  );
}

AthleteVisualAnalysis.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AthleteVisualAnalysis);

