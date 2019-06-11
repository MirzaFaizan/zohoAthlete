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
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:10}} > 10 M SPRINT </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={data}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="earnings" fill="#8884d8" barSize={7.5}/>
                        {/* <Bar dataKey="earnings" fill="#82ca9d" barSize={5}/> */}
                        {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > 3/4 M SPRINT </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={data}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="quarter" fill="#82ca9d" barSize={7.5}/>
                        {/* <Bar dataKey="earnings" fill="#82ca9d" barSize={5}/> */}
                        {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > 3/4 SPRINT (w/ Ball) </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={data}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="earnings" fill="#8884d8" barSize={7.5}/>
                        {/* <Bar dataKey="earnings" fill="#82ca9d" barSize={5}/> */}
                        {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > WING ATTAK-Imperial </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={data}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="quarter" fill="#82ca9d" barSize={7.5}/>
                        {/* <Bar dataKey="earnings" fill="#82ca9d" barSize={5}/> */}
                        {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > PRO AGILITY </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={data}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="earnings" fill="#8884d8" barSize={7.5}/>
                        {/* <Bar dataKey="earnings" fill="#82ca9d" barSize={5}/> */}
                        {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={4}>
                    <div className={classes.root}>
                    <Typography variant="h4" color="primary" style={{marginTop:15}} > BROAD JUMP-Imperial </Typography>
                        <Paper className={classes.paper} elevation={3}>
                        <BarChart
                        width={350}
                        height={395}
                        data={data}
                        margin={{
                        top: 5, right: 0, left: 5, bottom: 5,
                        }}
                        >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="quarter" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }} />
                        <ReferenceLine y={0} stroke="#000" />
                        {/* <Brush dataKey="name" height={30} stroke="#8884d8" /> */}
                        <Bar dataKey="quarter" fill="#82ca9d" barSize={7.5}/>
                        {/* <Bar dataKey="earnings" fill="#82ca9d" barSize={5}/> */}
                        {/* <Bar dataKey="Combined Avg" fill="#BDB76B" /> */}
                        </BarChart>
                        </Paper>
                        </div>
                    </Grid>
                </Grid>
            </Container>
      
    </div>
  );
}

export default AthletePhysical;