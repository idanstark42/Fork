import Board from './board'
import TimelinesPool from './timelines-pool'
import Gameplay from './gameplay'
import pieces from './pieces'
import Positions from './positions'

export default class Game {
  constructor () {
    this.timelinesPool = new TimelinesPool()
    this.gameplay = new Gameplay()
    this.positions = new Positions(this)
    this.boards = []
  }

  move (piece, target) { // target is { board, position }
    if (!piece.possibilities().includes(target)) throw new Error('Illegal move')
    this.gameplay.move(piece, target)
  }

  boardsByTimestamp (timestamp) {
    return this.boards.filter(board => board.timestamp === timestamp)
  }

  finishTurn () {
    this.gameplay.flush(this)
  }

  static initial () {
    const game = new Game()
    const mainTimeline = game.timelinesPool.timelines[0]
    const board = new Board(pieces.initialLayout(), null, [], mainTimeline)
    game.boards.push(board)
    return game
  }
}