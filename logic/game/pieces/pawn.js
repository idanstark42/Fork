import Piece from './piece'

export default class Pawn extends Piece {
  constructor (player, position) {
    super('pawn', player, position)
  }
}