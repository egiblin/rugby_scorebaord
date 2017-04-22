import React from 'react';

const Fixture = props => {
  let datetime = props.kickoff.split("");
  let date = datetime.slice(0, 10);
  date.join();
  let time = datetime.slice(11, 16);
  time.join();
  if (props.home_score == null) {
    return (
      <div>
        <h3>{props.home_team} at {props.away_team}</h3>
        <h4>{time}</h4>
        <h5>{date}</h5>
      </div>
  );}
  else {
    return (
      <div>
        <h3>{props.home_team} {props.home_score}-{props.away_score} {props.away_team}</h3>
        <h4>{time}</h4>
        <h5>{date}</h5>
      </div>
  );
  }
};


export default Fixture;
