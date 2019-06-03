import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
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

function createData(name, attention, coordination, memory, perception, reasoning, score) {
  return { name, attention, coordination, memory, perception, reasoning, score };
}

const rows = [
  createData('Faizan Ejaz', 159, 557, 324, 124,456,400),
  createData('Adnan Ejaz', 159, 557, 324, 124,456,400),
  createData('Umair Ejaz', 159, 557, 324, 124,456,400),
  createData('Irum Ejaz', 159, 557, 324, 124,456,400),
  createData('Ahmed Raza', 159, 557, 324, 124,456,400),

];

function DenseTable() {
  const classes = useStyles();

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
                        <TableCell>Full Name</TableCell>
                        <TableCell align="right">Attention</TableCell>
                        <TableCell align="right">Coordination</TableCell>
                        <TableCell align="right">Memory</TableCell>
                        <TableCell align="right">Perception</TableCell>
                        <TableCell align="right">Reasoning</TableCell>
                        <TableCell align="right">Score</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                        <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell align="right">{row.attention}</TableCell>
                            <TableCell align="right">{row.coordination}</TableCell>
                            <TableCell align="right">{row.memory}</TableCell>
                            <TableCell align="right">{row.perception}</TableCell>
                            <TableCell align="right">{row.reasoning}</TableCell>
                            <TableCell align="right">{row.score}</TableCell>
                        </TableRow>
                        ))}
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