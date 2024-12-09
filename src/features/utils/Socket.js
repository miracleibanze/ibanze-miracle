import { io } from 'socket.io-client';

let socket;

export const connectSocket = () => {
  if (!socket) {
    socket = io('http://localhost:4000');
  }
  return socket;
};

export const getSocket = () => {
  if (!socket) {
    throw new Error('Socket.io not initialized! Call connectSocket() first.');
  }
  return socket;
};
