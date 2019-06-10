import React from 'react';
import TitleBar from './titlebar/titleBax';
import PerosnalInfo from './personalinfo/personalnfo';
import AthleteStatistics from './athletestatistics/athleteStatistics';
import AthletePhysical from './athletephysical/athletePhysical';
function AthleteDetailsView(props) {
  return (
    <div>
      <TitleBar email={props.email}/>
      <PerosnalInfo/>
      <AthleteStatistics/>
      <AthletePhysical/>
    </div>
  );
}

export default AthleteDetailsView;