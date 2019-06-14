import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Container, Typography} from '@material-ui/core';
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


function DenseTable(props) {
  const classes = useStyles();
  // console.log(props.data)
  const score = (parseInt(props.data.Attention.Score) + parseInt(props.data.Coordination.Score) + parseInt(props.data.Memory.Score) + parseInt(props.data.Perception.Score) +parseInt(props.data.Reasoning.Score))/5
  return (
    
    <Container>
        
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <div className={classes.root}>
            <Typography variant="h4" color="primary" style={{marginTop:15}} > STATISTICS </Typography>
                <Paper className={classes.paper} elevation={3}>
                    <Table className={classes.table} size="small">
                    <TableHead>
                        <TableRow>
                        <TableCell>Username</TableCell>
                        <TableCell align="right">Attention</TableCell>
                        <TableCell align="right">Coordination</TableCell>
                        <TableCell align="right">Memory</TableCell>
                        <TableCell align="right">Perception</TableCell>
                        <TableCell align="right">Reasoning</TableCell>
                        <TableCell align="right">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {rows.map(row => ( */}
                        <TableRow>
                            <TableCell component="th" scope="row">
                            {props.name.AccountUsername}
                            </TableCell>
                            <TableCell align="right">{props.data.Attention.Score}</TableCell>
                            <TableCell align="right">{props.data.Coordination.Score}</TableCell>
                            <TableCell align="right">{props.data.Memory.Score}</TableCell>
                            <TableCell align="right">{props.data.Perception.Score}</TableCell>
                            <TableCell align="right">{props.data.Reasoning.Score}</TableCell>
                            <TableCell align="right">{score}</TableCell>
                       </TableRow> 
                    </TableBody>
                    </Table>
                </Paper>
                </div>
            </Grid>
                
        </Grid>
    </Container>
    
    
  );
}

export default DenseTable;