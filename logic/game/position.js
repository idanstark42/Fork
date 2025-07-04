export default class Position {
  constructor (row = 1, column = 1) {
    this.row = row
    this.column = column
  }

  get row () {
    return this._row
  }

  set row (row) {
    this._row = Math.max(Math.min(row, 8), 1)
  }

  get column () {
    return this._column
  }

  set column (column) {
    this._column = Math.max(Math.min(column, 8), 1)
  }

  toString () {
    return 'ABCDEFG'[this.column - 1] + this.row
  }
}