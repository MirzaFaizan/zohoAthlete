import React from 'react';
import SearchBar from './components/searchbar/searchBar';
import AthleteDetails from './components/athletedetails/athleteDetails';
import axios from 'axios';
class App extends React.Component {

  constructor(props){
    super(props)
    this.state={
      data:''
    }
    
  }
  componentDidMount(){
    const { params } = this.props.match;
    axios
    .post(
      // `https://zohoathlete.herokuapp.com/athlete/${params.email}`
      `http://localhost:9092/athlete/${params.email}`
      //, { headers: {"Authorization" : `Bearer ${token}`} }
    )
    .then(res => {
      if (res) {
        // console.log(res.data.athlete);
        this.setState({
          data:res.data.athlete
        })
      } else {
        //console.log(dat);
       alert('Error Occures while Fetching Data')
      }
    })
    .catch(error => {
      alert('Internal Server error, Server Resopnded with "' + error + '"');
    });
  }

  render(){
    const { params } = this.props.match;
    if(params.email===undefined){
      return (
        <div>
          <SearchBar/>
        </div>
      );
    }
    else {
      if(this.state.data===''){
        return (
          <div>
            Loading
          </div>
        )
      }
      else{
        return (
          <div>
            <AthleteDetails email={params.email} data={this.state.data} />
          </div>
        );
      }
     
    }
  }
}

export default App;
