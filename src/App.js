import React from 'react';
import SearchBar from './components/searchbar/searchBar';
import AthleteDetails from './components/athletedetails/athleteDetails';
class App extends React.Component {

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
      return (
        <div>
          <AthleteDetails email={params.email} />
        </div>
      );
    }
  }
}

export default App;
