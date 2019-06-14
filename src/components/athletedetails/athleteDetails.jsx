import React from 'react';
import TitleBar from './titlebar/titleBax';
import PerosnalInfo from './personalinfo/personalnfo';
import AthleteStatistics from './athletestatistics/athleteStatistics';
import AthletePhysical from './athletephysical/athletePhysical';
import AthleteVisualAnalysis from './athletevisualanalysis/athleteVisualAnalysis';
function AthleteDetailsView(props) {
  // console.log(props.data)
  return (
    <div>
      <TitleBar email={props.email}/>
      <PerosnalInfo data={props.data.personal }/>
      <AthleteStatistics name={props.data.personal} data={props.data.conginitiveresult}/>
      <AthletePhysical data={props.data.skilllevel}/>
      <AthleteVisualAnalysis data={props.data.visualsensoryresult}/>
    </div>
  );
}

export default AthleteDetailsView;