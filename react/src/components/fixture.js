/* jshint esversion: 6 */
import React from 'react';

const Fixture = props => {
  return (
    <div className="game-box">
      <h3>{props.home_team} at {props.away_team}</h3>
      <div className="time">{props.kickoff}</div>
    </div>
  );
};


export default Fixture;
