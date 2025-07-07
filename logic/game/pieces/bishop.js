import Piece from './piece'

export default class Bishop extends Piece {
  constructor (player, position) {
    super('bishop', player, position)
  }

  possibilities (game) {
    const sourceBoard = game.boards.find(board => board.pieces.includes(this))
    return [
      ...game.positions.relative(sourceBoard, this.position, [1, 1, 0, 0], { bidirectional: true }),
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 1, 0], { bidirectional: true }),
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 0, 1], { bidirectional: true }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 1, 0], { bidirectional: true }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 0, 1], { bidirectional: true }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 1, 1], { bidirectional: true })
    ]
  }
}