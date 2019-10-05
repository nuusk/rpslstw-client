import React, { Component } from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Wall from '../components/Wall';
import { toJson } from '../helpers/communication';
import { getToken, newRoom, getRooms, joinRoom, GET_TOKEN, GET_ROOMS, NEW_ROOM, JOIN_ROOM } from '../helpers/events';
import { setCookie, getCookie, removeCookie, TOKEN_COOKIE } from '../helpers/cookies';

export default class Game extends Component {
  constructor() {
    super();

    this.startGame = this.startGame.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
    this.wsGetToken = this.wsGetToken.bind(this);
    this.wsGetRooms = this.wsGetRooms.bind(this);
    this.wsNewRoom = this.wsNewRoom.bind(this);
    this.wsJoinRoom = this.wsJoinRoom.bind(this);
    this.joinRoom = this.joinRoom.bind(this);
  }

  wsGetToken(data) {
    console.log('[wsGetToken]: ');
    console.log(data);
    setCookie(TOKEN_COOKIE, data.uid);
  }

  wsGetRooms(data) {
    console.log('[wsGetRooms]: ');
    console.log(data);
  }

  wsNewRoom(data) {
    console.log('[wsNewRoom]: ');
    console.log(data);
  }

  wsJoinRoom(data) {
    console.log('[wsJoinRoom]: ');
    console.log(data);
  }


  handleMessage(message) {
    toJson(message)
      .then(data => JSON.parse(data))
      .then(data => {
        console.log(data);
        console.log(data["type"]);
        switch (data.type) {
          case GET_TOKEN: this.wsGetToken(data); break;
          case GET_ROOMS: this.wsGetRooms(data); break;
          case NEW_ROOM: this.wsNewRoom(data); break;
          case JOIN_ROOM: this.wsJoinRoom(data); break;
          default: break;
        }
      });
  }

  componentDidMount() {
    this.ws = new WebSocket('ws://rpslstw-server.herokuapp.com', 'rpslstw-protocol');

    this.ws.onopen = () => {
      // this.ws.send(newRoom());
      this.ws.send(getToken());
    }

    this.ws.onmessage = this.handleMessage;


    // const dataFromServer = JSON.parse(message.data);
    // console.log(dataFromServer);
    // const stateToChange = {};
    // if (dataFromServer.type === "userevent") {
    // stateToChange.currentUsers = Object.values(dataFromServer.data.users);
    // } else if (dataFromServer.type === "contentchange") {
    // stateToChange.text = dataFromServer.data.editorContent || contentDefaultMessage;
    // }
    // stateToChange.userActivity = dataFromServer.data.userActivity;
    // this.setState({
    //   ...stateToChange
    // });
  }

  startGame() {

  }

  joinRoom() {
    // this.ws.send(getRooms());
    this.ws.send(newRoom());
    console.log(getCookie(TOKEN_COOKIE));
    this.ws.send(joinRoom(1, getCookie(TOKEN_COOKIE)))
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
              <div onClick={this.joinRoom}>START</div>
            </h3>
          </Wall>
        </main>
        <AppFooter />
      </Layout>
    )
  }
}
