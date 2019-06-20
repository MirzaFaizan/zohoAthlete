import React from 'react';
import { withStyles,makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

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

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

export default function DenseTable(props) {
  const classes = useStyles();
   
  // console.log(props.data)
  return (
    <Container> 
    <Grid container spacing={0}>
        <Grid item xs={12}>
        <Typography variant="h4" color="primary" style={{marginTop:10}} > COMBINE RESULTS </Typography>            
        </Grid>

        <Grid item xs={12}>
        <div className={classes.root}>
      <Paper className={classes.paper}>
        <Table className={classes.table} size="small">
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>TEST</StyledTableCell>
              <StyledTableCell >CATEGORY</StyledTableCell>
              <StyledTableCell >SCORE</StyledTableCell>
              <StyledTableCell >AVERAGE</StyledTableCell>
              <StyledTableCell >COMBINE BEST</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {props.data.map((row,key)=>{
              return(
                <StyledTableRow key={key}>
                  <StyledTableCell component="th" scope="row">
                    {row[0]}
                  </StyledTableCell>
                  <StyledTableCell>{row[1]}</StyledTableCell>
                  <StyledTableCell>{row[2]}</StyledTableCell>
                  <StyledTableCell>{row[3].toPrecision(5)}</StyledTableCell>
                  <StyledTableCell>{row[4]}</StyledTableCell>
                </StyledTableRow>
              )
            }) 
            }
          </TableBody>
        </Table>
      </Paper>
    </div>
        </Grid>
    </Grid>
    </Container>
  );
}
