import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, Typography} from '@material-ui/core';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    paper: {
      marginTop: theme.spacing(3),
      width: '100%',
      overflowX: 'auto',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
  }));

const data = [
  {quarter: 1, earnings: 1.7},
  {quarter: 2, earnings: 3.5},
  {quarter: 3, earnings: 2.2},
];

function AthletePhysical(props) {
    const classes = useStyles();

  return (

    <div>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > 10 M SPRINT </Typography>
                        <Paper className={classes.paper} elevation={3}>
                            <VictoryChart
                                domainPadding={10}
                                theme={VictoryTheme.material}
                                >
                                <VictoryAxis
                                    tickValues={["Athlete", "Combined Best", "Combined Avergae"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={[0,0.5,1,1.5,2,2.5,3,3.5]}
                                />
                                <VictoryBar
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                    data={data}
                                    x={"quarter"}
                                    y={"earnings"}
                                />
                            </VictoryChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > 3/4 M SPRINT </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <VictoryChart
                                domainPadding={10}
                                theme={VictoryTheme.material}
                                >
                                <VictoryAxis
                                    tickValues={["Athlete", "Combined Best", "Combined Avergae"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={[0,0.5,1,1.5,2,2.5,3,3.5]}
                                />
                                <VictoryBar
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                    data={data}
                                    x={"quarter"}
                                    y={"earnings"}
                                />
                            </VictoryChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > 3/4 SPRINT (w/ Ball) </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <VictoryChart
                                domainPadding={10}
                                theme={VictoryTheme.material}
                                >
                                <VictoryAxis
                                    tickValues={["Athlete", "Combined Best", "Combined Avergae"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={[0,0.5,1,1.5,2,2.5,3,3.5]}
                                />
                                <VictoryBar
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                    data={data}
                                    x={"quarter"}
                                    y={"earnings"}
                                />
                            </VictoryChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > WING ATTAK-Imperial </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <VictoryChart
                                domainPadding={10}
                                theme={VictoryTheme.material}
                                >
                                <VictoryAxis
                                    tickValues={["Athlete", "Combined Best", "Combined Avergae"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={[0,0.5,1,1.5,2,2.5,3,3.5]}
                                />
                                <VictoryBar
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                    data={data}
                                    x={"quarter"}
                                    y={"earnings"}
                                />
                            </VictoryChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > PRO AGILITY </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <VictoryChart
                                domainPadding={10}
                                theme={VictoryTheme.material}
                                >
                                <VictoryAxis
                                    tickValues={["Athlete", "Combined Best", "Combined Avergae"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={[0,0.5,1,1.5,2,2.5,3,3.5]}
                                />
                                <VictoryBar
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                    data={data}
                                    x={"quarter"}
                                    y={"earnings"}
                                />
                            </VictoryChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > BROAD JUMP-Imperial </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <VictoryChart
                                domainPadding={10}
                                theme={VictoryTheme.material}
                                >
                                <VictoryAxis
                                    tickValues={["Athlete", "Combined Best", "Combined Avergae"]}
                                />
                                <VictoryAxis
                                    dependentAxis
                                    tickFormat={[0,0.5,1,1.5,2,2.5,3,3.5]}
                                />
                                <VictoryBar
                                    animate={{
                                        duration: 2000,
                                        onLoad: { duration: 1000 }
                                    }}
                                    data={data}
                                    x={"quarter"}
                                    y={"earnings"}
                                />
                            </VictoryChart>
                        </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
      
    </div>
  );
}

export default AthletePhysical;