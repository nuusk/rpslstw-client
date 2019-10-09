import React, { Component } from 'react';
import Layout from '../components/Layout';
import Wall from '../components/Wall';
import Gallery from '../components/Gallery';
import Tile from '../components/Tile';
import Button from '../components/Button';
import { toJson } from '../helpers/communication';
import {
  getToken, newRoom, getRooms,
  joinRoom, clearRooms, ready,
  choice, GET_TOKEN, GET_ROOMS,
  NEW_ROOM, JOIN_ROOM, GAME_STARTED, CHOICE,
} from '../helpers/events';
import {
  setCookie, getCookie, TOKEN_COOKIE,
} from '../helpers/cookies';
import { fancyWait, seconds } from '../helpers/time';
import ChoicesTable from '../components/ChoicesTable';
import ResolveTable from '../components/ResolveTable';
import ScoreTable from '../components/ScoreTable';

export default class Game extends Component {
  constructor() {
    super();

    this.handleMessage = this.handleMessage.bind(this);

    this.resGetToken = this.resGetToken.bind(this);
    this.resGetRooms = this.resGetRooms.bind(this);
    this.resGameStarted = this.resGameStarted.bind(this);
    this.resChoice = this.resChoice.bind(this);
    this.resJoinRoom = this.resJoinRoom.bind(this);

    this.reqGetToken = this.reqGetToken.bind(this);
    this.reqJoinRoom = this.reqJoinRoom.bind(this);
    this.reqNewRoom = this.reqNewRoom.bind(this);
    this.reqGetRooms = this.reqGetRooms.bind(this);
    this.reqClearRooms = this.reqClearRooms.bind(this);
    this.reqReady = this.reqReady.bind(this);
    this.reqChoice = this.reqChoice.bind(this);

    this.renderRooms = this.renderRooms.bind(this);
    this.renderGame = this.renderGame.bind(this);

    this.state = {
      rooms: [],
      isLoading: true,
      myRoomID: null,
      yourPoints: 0,
      enemyPoints: 0,
      currentChoice: '',
      resolveTurn: false,
      yourMove: '',
      enemyMove: '',
    };
  }

  componentDidMount() {
    this.ws = new WebSocket('wss://rpslstw-server.herokuapp.com', 'rpslstw-protocol');

    this.ws.onopen = () => {
      const myToken = getCookie(TOKEN_COOKIE);
      if (!myToken) {
        this.ws.send(getToken());
      }
      this.ws.send(getRooms(myToken));

      fancyWait(() => {
        this.setState({
          isLoading: false,
        });
      });
    };

    this.ws.onmessage = this.handleMessage;
  }

  // eslint-disable-next-line class-methods-use-this
  resGetToken(data) {
    setCookie(TOKEN_COOKIE, data.uid);
  }

  resGetRooms(data) {
    const rooms = [];
    data.rooms.forEach((room) => {
      if (room.users.includes(getCookie(TOKEN_COOKIE)) && room.status === 'Started') {
        this.setState({
          myRoomID: room.id,
        });
      }
      rooms[room.id] = room;
    });

    this.setState({
      rooms,
    });
  }

  resGameStarted(data) {
    this.setState({
      myRoomID: data.id,
    });
  }

  resJoinRoom() {
    this.setState({
      inLobby: true,
    });
  }

  resChoice(data) {
    console.log('~~~~~~~~~~~~');
    console.log(data.status);
    const { status } = data;

    const player1 = status[0];
    const player2 = status[1];
    let myScore;
    let enemyScore;
    let yourMove;
    let enemyMove;

    if (player1.id === getCookie(TOKEN_COOKIE)) {
      myScore = player1.score;
      yourMove = player1.move;
      enemyScore = player2.score;
      enemyMove = player2.move;
    } else {
      myScore = player2.score;
      yourMove = player2.move;
      enemyScore = player1.score;
      enemyMove = player1.move;
    }

    fancyWait(() => {
      this.setState({
        enemyPoints: enemyScore,
        yourPoints: myScore,
        resolveTurn: true,
        yourMove,
        enemyMove,
      }, () => {
        fancyWait(() => {
          this.setState({
            resolveTurn: false,
            currentChoice: null,
            yourMove: '',
            enemyMove: '',
          });
        }, seconds(5));
      });
    });
  }

  handleMessage(message) {
    toJson(message)
      .then((data) => JSON.parse(data))
      .then((data) => {
        console.log(data);
        switch (data.type) {
          case GET_TOKEN: this.resGetToken(data); break;
          case GET_ROOMS: this.resGetRooms(data); break;
          case JOIN_ROOM: this.resJoinRoom(data); break;
          case GAME_STARTED: this.resGameStarted(data); break;
          case CHOICE: this.resChoice(data); break;
          default: break;
        }
      });
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
    this.ws.send(getRooms(getCookie(TOKEN_COOKIE)));
  }

  reqGetToken() {
    this.ws.send(getToken());
  }

  reqClearRooms() {
    this.ws.send(clearRooms());
    this.reqGetRooms();
  }

  reqReady() {
    this.ws.send(ready(getCookie(TOKEN_COOKIE)));
    this.reqGetRooms();
  }

  reqChoice(myChoice) {
    this.ws.send(choice(myChoice, getCookie(TOKEN_COOKIE)));
    this.setState({
      currentChoice: myChoice,
    });
  }

  renderRooms() {
    const { rooms, inLobby } = this.state;

    return (
      <>
        {rooms.length
          ? (
            <Gallery>
              {
                rooms.map((room) => (
                  <Tile
                    key={room.id}
                    title={room.id}
                    onClick={() => { this.reqJoinRoom(room.id); }}
                  >
                    <div>players:</div>
                    <strong>
                      {room.users.length}
                      /
                      {room.maxUsers}
                    </strong>
                  </Tile>
                ))
              }
            </Gallery>
          )
          : (
            <>
              <h1>
                There are no active rooms...
              </h1>
            </>
          )}

        <h3>
          <Button onClick={this.reqNewRoom}>NEW ROOM</Button>
          <Button onClick={this.reqClearRooms}>CLEAR ROOMS</Button>
          {inLobby && <Button onClick={this.reqReady}>READY</Button>}
        </h3>
      </>
    );
  }

  renderGame() {
    const {
      currentChoice, yourPoints, enemyPoints, resolveTurn, yourMove, enemyMove, youWinTurn,
    } = this.state;

    return (
      resolveTurn
        ? (
          <>
            <ScoreTable you={yourPoints} enemy={enemyPoints} />
            <ResolveTable yourMove={yourMove} enemyMove={enemyMove} youWin={youWinTurn} />
          </>
        )
        : (
          <>
            <ScoreTable you={yourPoints} enemy={enemyPoints} />
            <ChoicesTable pickChoice={this.reqChoice} currentChoice={currentChoice} />
          </>
        )

    );
  }

  render() {
    const { isLoading, myRoomID } = this.state;

    return (
      <Layout columned narrow>
        <Wall isLoading={isLoading}>
          {myRoomID ? this.renderGame() : this.renderRooms()}
        </Wall>
      </Layout>
    );
  }
}
