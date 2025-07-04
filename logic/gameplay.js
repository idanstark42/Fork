export default class TurnManager {
  constructor () {
    this.current = 1
    this.currentMoves = []
  }

  move (piece, target) {
    if (piece.player !== this.player) throw new Error('Wrong player')
  
    this.currentMoves.push({ piece, target })
  }

  flush (game) {
    for (move in this.currentMoves) {
      this.apply(move, game)
    }
    this.currentMoves = []
    this.current = this.current + 1
  }

  reset () {
    this.currentMoves = []
  }

  apply (move, game) {
    const { piece, target } = move
    const { board: targetBoard, position: targetPosition } = target
    const sourceBoard = game.boards.find(board => board.pieces.includes(piece))
    if (targetBoard === sourceBoard) {
      this.moveInBoard(sourceBoard, piece, targetPosition, game)
    } else {
      this.moveBetweenBoards(sourceBoard, targetBoard, targetPosition, piece, game)
    }
  }

  moveInBoard (board, piece, target, game) {
    game.boards.push(board.next(piece, target))
  }

  moveBetweenBoards (sourceBoard, targetBoard, targetPosition, piece, game) {
    const positionedPiece = piece.copy()
    positionedPiece.position = targetPosition

    game.boards.push(sourceBoard.next(piece, 'remove'))
    game.boards.push(targetBoard.next(positionedPiece, 'add', game.timelinesPool.create(this.player)))
  }

  get player () {
    return this.current % 2 === 0 ? 'black' : 'white'
  }
}