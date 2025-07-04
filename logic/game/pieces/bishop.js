import Piece from './piece'

export default class Bishop extends Piece {
  constructor (player, position) {
    super('bishop', player, position)
  }
}