import React from 'react';
import TitleBar from './titlebar/titleBax';
function AthleteDetailsView(props) {
  return (
    <div>
      <TitleBar email={props.email}/>
    </div>
  );
}

export default AthleteDetailsView;