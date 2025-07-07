export default class Positions {
  constructor (game) {
    this.game = game
  }

  relative (board, position, vector, piece='block', bidirectional=false, repeat=true) {
    if (bidirectional) {
      return [
        ...this.relative(board, position, vector, piece, bidirectional=false, repeat=repeat),
        ...this.relative(board, position, this.minus(vector), piece, bidirectional=false, repeat=repeat)
      ]
    }
  }

  minus (vector) {
    return
  }
}