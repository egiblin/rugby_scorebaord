import React, { Component } from 'react';
import Fixture from './fixture';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      aviva_fixtures: [],
      pro12_fixtures: []
    };
  }

  componentDidMount(){
    this.updatePage();
  }

  updatePage() {
    fetch('https://api.drop22.net/fixtures/aviva')
    .then(response => response.json())
    .then(body => {
      let games = body.data;
      let count = 0;
      games.map(function(game){
        game.id = count;
        game.key = count;
        count ++;
      });
      games.reverse();
      this.setState({ aviva_fixtures: games});
    });
    fetch('https://api.drop22.net/fixtures/pro12')
    .then(response => response.json())
    .then(body => {
      let games = body.data;
      let count = 0;
      games.map(function(game){
        game.id = count;
        game.key = count;
        count ++;
      });
      games.reverse();
      this.setState({ pro12_fixtures: games});
    });
  }

  render() {
    let aviva_past_fixtures = this.state.aviva_fixtures.map(fixture => {
      if (fixture.home_score != null) {
        return(
          <Fixture
          key={fixture.id}
          id={fixture.id}
          home_team={fixture.home_team.name}
          away_team={fixture.away_team.name}
          home_score={fixture.home_score}
          away_score={fixture.away_score}
          kickoff={fixture.kickoff}
          />
        );
      }
    });
    let aviva_future_fixtures = this.state.aviva_fixtures.map(fixture => {
      if (fixture.home_score == null) {
        return(
          <Fixture
          key={fixture.id}
          id={fixture.id}
          home_team={fixture.home_team.name}
          away_team={fixture.away_team.name}
          home_score={fixture.home_score}
          away_score={fixture.away_score}
          kickoff={fixture.kickoff}
          />
        );
      }
    });
    let pro12_past_fixtures = this.state.pro12_fixtures.map(fixture => {
      if (fixture.home_score != null) {
        return(
          <Fixture
          key={fixture.id}
          id={fixture.id}
          home_team={fixture.home_team.name}
          away_team={fixture.away_team.name}
          home_score={fixture.home_score}
          away_score={fixture.away_score}
          kickoff={fixture.kickoff}
          />
        );
      }
    });
    let pro12_future_fixtures = this.state.pro12_fixtures.map(fixture => {
      if (fixture.home_score == null) {
        return(
          <Fixture
          key={fixture.id}
          id={fixture.id}
          home_team={fixture.home_team.name}
          away_team={fixture.away_team.name}
          home_score={fixture.home_score}
          away_score={fixture.away_score}
          kickoff={fixture.kickoff}
          />
        );
      }
    });
    return(
      <div>
        <h1>Future Fixtures</h1>
          <h2>Aviva</h2>
          {aviva_future_fixtures}
          <h2>Pro 12</h2>
          {pro12_future_fixtures}
        <h1>Past Fixtures</h1>
          <h2>Aviva</h2>
          {aviva_past_fixtures}
          <h2>Pro 12</h2>
          {pro12_past_fixtures}
      </div>
    );
  }
}

export default App;
