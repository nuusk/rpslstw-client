import { toBlob } from './communication';

export const GET_TOKEN = 'getToken';
export const NEW_ROOM = 'newRoom';
export const GET_ROOMS = 'getRooms';
export const JOIN_ROOM = 'joinRoom';
export const CLEAR_ROOMS = 'clearRooms';
export const READY = 'ready';
export const CHOICE = 'choice';
export const GAME_STARTED = 'gameStarted';

export const getToken = () => (
  toBlob({
    type: GET_TOKEN,
  })
);

export const newRoom = (maxUsers = 2) => (
  toBlob({
    type: NEW_ROOM,
    maxUsers,
  })
);

export const getRooms = (token = '') => (
  toBlob({
    type: GET_ROOMS,
    token,
  })
);

export const joinRoom = (roomId, token) => (
  toBlob({
    type: JOIN_ROOM,
    roomId,
    token,
  })
);

export const clearRooms = () => (
  toBlob({
    type: CLEAR_ROOMS,
  })
);

export const ready = (token) => (
  toBlob({
    type: READY,
    token,
  })
);

export const choice = (myChoice, token) => (
  toBlob({
    type: CHOICE,
    choice: myChoice,
    token,
  })
);
