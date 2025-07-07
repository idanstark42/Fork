import Piece from './piece'

export default class Knight extends Piece {
  constructor (player, position) {
    super('knight', player, position)
  }

  possibilities (game) {
    const sourceBoard = game.boards.find(board => board.pieces.includes(this))
    return [
      ...game.positions.relative(sourceBoard, this.position, [1, 2, 0, 0], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 2, 0], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 0, 2], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [2, 1, 0, 0], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 2, 0], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 0, 2], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [2, 0, 1, 0], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 2, 1, 0], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 1, 2], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [2, 0, 0, 1], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 2, 0, 1], { piece: 'ignore', bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 2, 1], { piece: 'ignore', bidirectional: true, repeat: false }),
    ]
  }
}