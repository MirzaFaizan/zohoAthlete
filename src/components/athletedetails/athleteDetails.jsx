import React from 'react';
import TitleBar from './titlebar/titleBax';
import PerosnalInfo from './personalinfo/personalnfo';
import AthleteStatistics from './athletestatistics/athleteStatistics';

function AthleteDetailsView(props) {
  return (
    <div>
      <TitleBar email={props.email}/>
      <PerosnalInfo/>
      <AthleteStatistics/>
    </div>
  );
}

export default AthleteDetailsView;