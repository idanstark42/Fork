import Piece from './piece'

export default class Rook extends Piece {
  constructor (player, position) {
    super('rook', player, position)
  }
}