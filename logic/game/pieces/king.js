import Piece from './piece'

export default class King extends Piece {
  constructor (player, position) {
    super('king', player, position)
  }
}