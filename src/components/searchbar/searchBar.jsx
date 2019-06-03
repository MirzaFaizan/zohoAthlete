import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';
import { Redirect } from 'react-router-dom'


class CustomizedInputBase extends React.Component {
  

    state = {
        redirect: false,
        searchBy:'',
      }
      setRedirect = () => {
        this.setState({
          redirect: true
        })
      }
      renderRedirect = () => {
        if (this.state.redirect) {
            let string = `/${this.state.searchBy}`
          return <Redirect to={string} />
        }
      }
    
      handleKeyPress = (event) => {
        if(event.key === 'Enter'){
          this.setRedirect()
        }
      }

      updateSearch=(e)=>{
          this.setState({searchBy:e.target.value})
      }

  
    render(){

    return (
      <div style={{marginTop:'20%'}}>
          {this.renderRedirect()}          
          <Grid
              container
              spacing={0}
              align="center"
              justify="center"
          >
              <Grid item>
                  <Paper style={{
                        padding: '2px 4px',
                        display: 'flex',
                        alignItems: 'center',
                        width: 600,
                    }}>
                      <InputBase style={{
                            marginLeft: 20,
                            flex: 1,
                        }} placeholder="Search Athlete"
                        autoFocus={true}
                        value={this.state.searchBy}
                        onKeyPress={this.handleKeyPress}
                        onChange={(e)=>this.updateSearch(e)}/>

                      <IconButton style={{
                            padding: 20,
                        }} aria-label="Search" onClick={this.setRedirect}>
                          <SearchIcon />
                      </IconButton>
                  </Paper>
              </Grid>
          </Grid>
      </div>
    );
  }
}

export default CustomizedInputBase;