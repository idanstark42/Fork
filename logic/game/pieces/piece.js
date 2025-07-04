export default class Piece {
  constructor (name, player, position) {
    this.name = name
    this.player = player
    this.position = position
  }

  possibilities (game) {
    throw new Error('unimplemented method possiblities has been called on parent class Pieace.')
  }

  copy () {
    return new this.constructor(this.player, this.position)
  }
}