import Piece from './piece'

export default class Queen extends Piece {
  constructor (player, position) {
    super('queen', player, position)
  }
}