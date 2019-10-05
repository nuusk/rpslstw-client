import React, { Component } from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Wall from '../components/Wall';

export default class Game extends Component {
  constructor() {
    super();

    this.startGame = this.startGame.bind(this);
  }

  componentDidMount() {
    this.ws = new WebSocket('ws://rpslstw-server.herokuapp.com', 'rpslstw-protocol');

    this.ws.onopen = () => {
      console.log('connected');

      var debug = { type: "getRooms" };
      var blob = new Blob([JSON.stringify(debug, null, 2)], { type: 'application/json' });

      this.ws.send(blob);
    }

    this.ws.onmessage = (message) => {
      console.log(message.data.text().then(data => {
        console.log(data);
      }));

      const dataFromServer = JSON.parse(message.data);
      console.log(dataFromServer);
      const stateToChange = {};
      if (dataFromServer.type === "userevent") {
        stateToChange.currentUsers = Object.values(dataFromServer.data.users);
      } else if (dataFromServer.type === "contentchange") {
        // stateToChange.text = dataFromServer.data.editorContent || contentDefaultMessage;
      }
      // stateToChange.userActivity = dataFromServer.data.userActivity;
      // this.setState({
      //   ...stateToChange
      // });
    };
  }

  startGame() {

  }

  render() {
    return (
      <Layout columned narrow>
        <AppHeader />
        <main>
          <Wall>
            <h1>
              {'Wanna play?'}
            </h1>
            <h3 onClick={this.startGame}>
              <div>START</div>
            </h3>
          </Wall>
        </main>
        <AppFooter />
      </Layout>
    )
  }
}
