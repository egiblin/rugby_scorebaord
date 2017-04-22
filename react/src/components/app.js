import React, { Component } from 'react';
import Fixture from './fixture';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fixtures: []
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
      this.setState({ fixtures: games});
    });
  }

  render() {
    let past_fixtures = this.state.fixtures.map(fixture => {
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
    let future_fixtures = this.state.fixtures.map(fixture => {
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
      {future_fixtures}
      <h1>Past Fixtures</h1>
      {past_fixtures}
      </div>
    );
  }
}

export default App;
