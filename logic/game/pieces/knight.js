import Piece from './piece'

export default class Knight extends Piece {
  constructor (player, position) {
    super('knight', player, position)
  }
}