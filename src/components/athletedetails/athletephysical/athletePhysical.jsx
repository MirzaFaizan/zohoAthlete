import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, Typography} from '@material-ui/core';
// import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

import {
    BarChart, Bar, 
    // Brush,
     ReferenceLine, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';


const useStyles = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    paper: {
      marginTop: theme.spacing(3),
      width: '100%',
    //   overflowX: 'auto',
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 650,
    },
  }));



function AthletePhysical(props) {
    const classes = useStyles();
    // console.log(props.data)
    const sprintData = props.data.Speed['10MSprint'];
    const laneData = props.data.Agility['LaneAgility'];
    const proData = props.data.Agility['ProAgility'];
    const heightData = props.data.Biometric['Height'];
    const standingData = props.data.Biometric['StandingReach'];
    const weightData = props.data.Biometric['Weight'];
    const wingspanData = props.data.Biometric['Wingspan'];
    const broadData = props.data.LowerBodyPower['BroadJump'];
    const verticalData = props.data.LowerBodyPower['VerticalJump'];
    return (
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:10}} > 10 M SPRINT </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={390}
                        data={sprintData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={'name'} />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        {/* <ReferenceLine y={0} stroke="#000" /> */}
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                     
                       
                        {/* {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > Lane Agility </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={laneData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                        {/* <Bar dataKey="earnings" fill="#82ca9d" barSize={5}/> */}
                        {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} >Pro Agility </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={proData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} payload={[{ value: 'item name', type: 'line', id: 'ID01' }]} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > Biometric Height </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={heightData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                        {/* <Bar dataKey="earnings" fill="#82ca9d" barSize={5}/> */}
                        {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > Standing Reach </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={standingData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > Biometric Weight </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={weightData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > Biometric Wingspan </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={wingspanData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > Broad Jump </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={broadData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > Vertical Jump </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={verticalData}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar dataKey="score" fill="#8884D8" barSize={5}/>
                        <Bar dataKey="avg" fill="#F9D71C" barSize={5}/>
                        <Bar dataKey="best" fill="#82CA9D" barSize={5}/>
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
  );
}

export default AthletePhysical;