import React from 'react';
import Container from '@material-ui/core/Container';
import  Grid  from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';

export default function skillanalysis(props){

    // console.log(props.data)
    
    let category = props.data.map((type,key)=>{
        return type[1]
    })    
    category = [...new Set(category)];
    // console.log(category)
     
    let newArray = [];
    
    category.forEach(element => {
        let allSuchElements = props.data.filter(ind =>{
            return ind[1] === element;
        })
        let sum =0;
        allSuchElements.forEach(ele => {
           sum  = sum + parseInt(ele[2]);
        })
        newArray.push({
            "category": element,
            "avg": sum/allSuchElements.length
        })
        
    });

    console.log(newArray);

    return(
        <Container>
            
             <Typography variant="h4" color="primary" style={{marginTop:10}} > 
             SKILL ANALYSIS
             </Typography>
          
            <Grid container spacing={0} justify='center' alignItems='center' >
            <Grid item xs={3} >
                <Grid item xs={12}>
                <CircularProgress size={90} thickness={2} variant="static" value={parseFloat(newArray[0].avg)} style={{borderRadius:'50%',border: '4px solid blue',padding:'2%'}} />         
                </Grid>
                <Grid item xs={12}>
                <Typography variant='subtitle1'>{newArray[0].category}:{newArray[0].avg}</Typography>
                </Grid>
            </Grid>   

            <Grid item xs={3}>
                <Grid item xs={12}>
                <CircularProgress size={90} thickness={2} variant="static" value={parseFloat(newArray[1].avg)} style={{borderRadius:'50%',border: '4px solid blue',padding:'2%'}} />         
                </Grid>
                <Grid item xs={12}>
                <Typography variant='subtitle1'>{newArray[1].category}:{newArray[1].avg}</Typography>
                </Grid>
            </Grid>  

               <Grid item xs={3}>
                <Grid item xs={12}>
                <CircularProgress size={90} thickness={2} variant="static" value={parseFloat(newArray[2].avg)} style={{borderRadius:'50%',border: '4px solid blue',padding:'2%'}} />         
                </Grid>
                <Grid item xs={12}>
                <Typography variant='subtitle1' style={{paddingLeft:'5%'}}>{newArray[2].category}:{newArray[2].avg}</Typography>
                </Grid>
            </Grid>    

            <Grid item xs={3} container justify='center' alignItems='center'>
                <Grid item xs={12}>
                <CircularProgress size={90} thickness={2} variant="static" value={parseFloat(newArray[3].avg)} style={{borderRadius:'50%',border: '4px solid blue',padding:'2%'}} />         
                </Grid>
                <Grid item xs={12}>
                <Typography variant='subtitle1' style={{paddingLeft:'8%'}}>{newArray[3].category}:{newArray[3].avg}</Typography>
                </Grid>
            </Grid>    

             </Grid>       
        </Container>
    )
}