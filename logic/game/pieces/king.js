import Piece from './piece'

export default class King extends Piece {
  constructor (player, position) {
    super('king', player, position)
  }

  possibilities (game) {
    const sourceBoard = game.boards.find(board => board.pieces.includes(this))
    return [
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 0, 0], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 0, 0], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 1, 0], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 0, 0, 1], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 1, 0, 0], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 1, 0], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 0, 1], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 1, 0], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 0, 1], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 1, 1, 0], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 1, 0, 1], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 0, 1, 1], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [0, 1, 1, 1], { bidirectional: true, repeat: false }),
      ...game.positions.relative(sourceBoard, this.position, [1, 1, 1, 1], { bidirectional: true, repeat: false })
    ]
  }
}