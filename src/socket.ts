import { Server } from 'socket.io'
import { Server as HttpServer } from 'http'

let io: Server

export function initSocket(httpServer: HttpServer) {
  io = new Server(httpServer, {
    cors: {
      origin: '*',
    },
  })

  io.on('connection', (socket) => {
    console.log('a user connected')
    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })

  return io
}

export function getIO() {
  if (!io) {
    throw new Error('Socket.io not initialized!')
  }
  return io
}
