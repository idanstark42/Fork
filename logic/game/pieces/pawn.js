import Piece from './piece'

export default class Pawn extends Piece {
  constructor (player, position) {
    super('pawn', player, position)
  }

  possibilities (game) {
    const sourceBoard = game.boards.find(board => board.pieces.includes(this))
    return [
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 0, 0], { repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 1, 0], { repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 1, 0, 0], { piece: 'require', repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, -1, 0, 0], { piece: 'require', repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 1, 1], { piece: 'require', repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 1, -1], { piece: 'require', repeat: false })
    ]
  }
}