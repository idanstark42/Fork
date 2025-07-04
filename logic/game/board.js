import Position from "./position"

export default class Board {
  constructor (pieces = [], parent = null, children = [], timeline = null) {
    this.pieces = pieces
    this.parent = parent
    this.children = children
    this.timeline = timeline

    this._initTurn()
  }

  _initTurn () {
    if (this.parent === null || this.parent.turn === 'black')
      this.turn = 'white'
    else
      this.turn = 'black'
  }

  next (piece, action, timeline) {
    let newPieces = this.pieces.map(p => p.copy())
    switch (action) {
      case 'add':
        newPieces.push(piece)
        break
      case 'remove':
        newPieces = newPieces.filter(p => !p.equals(piece))
        break
      default:
        if (!(action instanceof Position))  throw new Error('Unkown action ' + action)
        newPieces.find(p => p.equals(piece)).position = action
    }
    const next = new Board(newPieces, this, [], timeline || this.timeline)
    this.children.push(next)
    return next
  }

  get ancestors () {
    if (this.parent === null) {
        return []
    } else {
        return [...this.parent.ancestors, this.parent]
    }
  }

  get playable () {
    return this.children.length === 0
  }

  get active () {
    return this.playable && this.timeline && this.timeline.active
  }
}