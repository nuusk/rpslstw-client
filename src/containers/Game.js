import React, { Component } from 'react';
import Layout from '../components/Layout';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import Wall from '../components/Wall';
import Gallery from '../components/Gallery';
import Tile from '../components/Tile';
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
    this.renderRooms = this.renderRooms.bind(this);

    this.state = {
      rooms: [],
      isLoading: true,
    };
  }

  wsGetToken(data) {
    console.log('[wsGetToken]: ');
    console.log(data);
    setCookie(TOKEN_COOKIE, data.uid);
  }

  wsGetRooms(data) {
    console.log('[wsGetRooms]: ');
    console.log(data);

    let rooms = [];
    data.rooms.forEach(room => {
      rooms[room.id] = room;
    });

    this.setState({
      rooms: rooms,
    });
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
    this.ws = new WebSocket('wss://rpslstw-server.herokuapp.com', 'rpslstw-protocol');

    this.ws.onopen = () => {
      // this.ws.send(newRoom());
      this.ws.send(getToken());
      this.ws.send(getRooms());

      this.setState({
        isLoading: false,
      });
    }

    this.ws.onmessage = this.handleMessage;
  }

  startGame() {

  }

  renderRooms() {
    const { rooms } = this.state;

    return rooms.map(room => (
      <Tile key={room.id} title={room.id} onClick={() => { this.joinRoom(room.id) }}>
        <div>players:</div>
        <strong>{room.users.length}/{room.maxUsers}</strong>
      </Tile>
    ));
  }

  joinRoom(roomId = 1) {
    // this.ws.send(getRooms());
    console.log(getCookie(TOKEN_COOKIE));
    this.ws.send(joinRoom(roomId, getCookie(TOKEN_COOKIE)));
  }

  render() {
    const { rooms, isLoading } = this.state;

    return (
      <Layout columned narrow>
        <AppHeader />
        <main>
          <Wall isLoading={isLoading}>
            {
              rooms.length
                ? <Gallery>
                  {this.renderRooms()}
                </Gallery>
                : <>
                  <h1>
                    {'There are no active rooms...'}
                  </h1>
                  <h3>
                    <div onClick={this.joinRoom}>NEW ROOM</div>
                  </h3>
                </>
            }
          </Wall>
        </main>
        <AppFooter />
      </Layout>
    )
  }
}
