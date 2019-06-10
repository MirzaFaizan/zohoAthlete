import React from 'react';
import TitleBar from './titlebar/titleBax';
import PerosnalInfo from './personalinfo/personalnfo';
import AthleteStatistics from './athletestatistics/athleteStatistics';
import AthletePhysical from './athletephysical/athletePhysical';
import AthleteVisualAnalysis from './athletevisualanalysis/athleteVisualAnalysis';
function AthleteDetailsView(props) {
  return (
    <div>
      <TitleBar email={props.email}/>
      <PerosnalInfo/>
      <AthleteStatistics/>
      <AthletePhysical/>
      <AthleteVisualAnalysis/>
    </div>
  );
}

export default AthleteDetailsView;