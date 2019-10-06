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

    this.resGetToken = this.resGetToken.bind(this);
    this.resGetRooms = this.resGetRooms.bind(this);
    this.resNewRoom = this.resNewRoom.bind(this);
    this.resJoinRoom = this.resJoinRoom.bind(this);

    this.renderRooms = this.renderRooms.bind(this);

    this.reqGetToken = this.reqGetToken.bind(this);
    this.reqJoinRoom = this.reqJoinRoom.bind(this);
    this.reqNewRoom = this.reqNewRoom.bind(this);
    this.reqGetRooms = this.reqGetRooms.bind(this);

    this.state = {
      rooms: [],
      isLoading: true,
    };
  }

  resGetToken(data) {
    setCookie(TOKEN_COOKIE, data.uid);
  }

  resGetRooms(data) {
    let rooms = [];
    data.rooms.forEach(room => {
      rooms[room.id] = room;
    });

    this.setState({
      rooms: rooms,
    });
  }

  resNewRoom(data) {
    console.log('[resNewRoom]: ');
    console.log(data);
  }

  resJoinRoom(data) {
    console.log('[resJoinRoom]: ');
    console.log(data);
  }

  handleMessage(message) {
    toJson(message)
      .then(data => JSON.parse(data))
      .then(data => {
        switch (data.type) {
          case GET_TOKEN: this.resGetToken(data); break;
          case GET_ROOMS: this.resGetRooms(data); break;
          case NEW_ROOM: this.resNewRoom(data); break;
          case JOIN_ROOM: this.resJoinRoom(data); break;
          default: break;
        }
      });
  }

  componentDidMount() {
    this.ws = new WebSocket('wss://rpslstw-server.herokuapp.com', 'rpslstw-protocol');

    this.ws.onopen = () => {
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
      <Tile key={room.id} title={room.id} onClick={() => { this.reqJoinRoom(room.id) }}>
        <div>players:</div>
        <strong>{room.users.length}/{room.maxUsers}</strong>
      </Tile>
    ));
  }

  reqNewRoom() {
    this.ws.send(newRoom());
    this.reqGetRooms();
  }

  reqJoinRoom(roomId = 1) {
    this.ws.send(joinRoom(roomId, getCookie(TOKEN_COOKIE)));
    this.reqGetRooms();
  }

  reqGetRooms() {
    this.ws.send(getRooms());
  }

  reqGetToken() {
    this.ws.send(getToken());
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
                </>
            }
            <h3>
              <div onClick={this.reqNewRoom}>NEW ROOM</div>
            </h3>
          </Wall>
        </main>
        <AppFooter />
      </Layout>
    )
  }
}
