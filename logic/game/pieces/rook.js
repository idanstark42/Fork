import Piece from './piece'

export default class Rook extends Piece {
  constructor (player, position) {
    super('rook', player, position)
  }

  possibilities (game) {
    const sourceBoard = game.boards.find(board => board.pieces.includes(this))
    return [
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 0, 0], { piece: 'block', bidirectional: true }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 0, 0], { piece: 'block', bidirectional: true }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 1, 0], { piece: 'block', bidirectional: true }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 0, 1], { piece: 'block', bidirectional: true })
    ]
  }
}