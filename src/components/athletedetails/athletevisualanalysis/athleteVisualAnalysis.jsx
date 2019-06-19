import React from 'react';
import Paper from '@material-ui/core/Paper';
import {Grid, Container, Typography} from '@material-ui/core';
// import { VictoryArea, VictoryChart, VictoryPolarAxis, VictoryTheme } from 'victory';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,Tooltip
} from 'recharts';

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

// const data01 = [
//   { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
// ];
// const data02 = [
//   { name: 'A1', value: 100 },
//   { name: 'A2', value: 300 },
//   { name: 'B1', value: 100 },
//   { name: 'B2', value: 80 },
//   { name: 'B3', value: 40 },
//   { name: 'B4', value: 30 },
//   { name: 'B5', value: 50 },
//   { name: 'C1', value: 100 },
//   { name: 'C2', value: 200 },
//   { name: 'D1', value: 150 },
//   { name: 'D2', value: 50 },
// ];

// const COLORS = ['#00C49F', '#FFBB28', '#FF8042','#808080','#FF0000','#0088FE', '#0eca10','#888400' ];

function AthleteVisualAnalysis(props) {
  const { classes } = props;
  // console.log(props.data)

  
  let data = []
  Object.values(props.data).map((type,key)=>{
    // console.log(type)
    if(type.Score){
      type.Score = parseInt(type.Score);
      data.push(type)
    }
    else{
      type.Score = 0
      data.push(type)
    }
   
    return (
      type
    )
  })

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
                    

                    <Grid item xs={12} sm={8} container alignContent="center">

                    <RadarChart cx={290} cy={200} outerRadius={150} width={700} height={500} data={data} >
                    <Tooltip />
                      <PolarGrid />
                      <PolarAngleAxis dataKey="name" />
                      <PolarRadiusAxis />
                      <Radar name="Mike" dataKey="Score" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    </RadarChart>
                    {/* <PieChart width={600} height={600}>
                    <Pie data={data} dataKey="Score"  cx={200} cy={200} outerRadius={60} fill="#8884d8" />
                    <Pie data={data} dataKey="Score" cx={250} cy={250} outerRadius={200} fill="#82ca9d" label>
                      {
                        data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
                      }
                     </Pie> 
                    <Legend verticalAlign="top" wrapperStyle={{ lineHeight: '40px' }}/>
                    <Tooltip />
                    </PieChart> */}

                    {/* <VictoryChart polar
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
                    </VictoryChart> */}
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

