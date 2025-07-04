import Pawn from './pawn'
import Rook from './rook'
import Knight from './knight'
import Bishop from './bishop'
import King from './king'
import Queen from './queen'

import Position from '../position'

class PieceFactory {
  getPawn (player, position) {
    return new Pawn(player, position)
  }

  getRook (player, position) {
    return new Rook(player, position)
  }

  getKnight (player, position) {
    return new Knight(player, position)
  }

  getBishop (player, position) {
    return new Bishop(player, position)
  }

  getKing (player, position) {
    return new King(player, position)
  }

  getQueen (player, position) {
    return new Queen(player, position)
  }

  initialLayout () {
    return [
      getRook('white', new Position(1, 1)),
      getKnight('white', new Position(1, 2)),
      getBishop('white', new Position(1, 3)),
      getQueen('white', new Position(1, 4)),
      getKing('white', new Position(1, 5)),
      getBishop('white', new Position(1, 6)),
      getKnight('white', new Position(1, 7)),
      getRook('white', new Position(1, 8)),
      
      getPawn('white', new Position(2, 1)),
      getPawn('white', new Position(2, 2)),
      getPawn('white', new Position(2, 3)),
      getPawn('white', new Position(2, 4)),
      getPawn('white', new Position(2, 5)),
      getPawn('white', new Position(2, 6)),
      getPawn('white', new Position(2, 7)),
      getPawn('white', new Position(2, 8)),
      
      getRook('black', new Position(8, 1)),
      getKnight('black', new Position(8, 2)),
      getBishop('black', new Position(8, 3)),
      getQueen('black', new Position(8, 4)),
      getKing('black', new Position(8, 5)),
      getBishop('black', new Position(8, 6)),
      getKnight('black', new Position(8, 7)),
      getRook('black', new Position(8, 8)),
      
      getPawn('black', new Position(7, 1)),
      getPawn('black', new Position(7, 2)),
      getPawn('black', new Position(7, 3)),
      getPawn('black', new Position(7, 4)),
      getPawn('black', new Position(7, 5)),
      getPawn('black', new Position(7, 6)),
      getPawn('black', new Position(7, 7)),
      getPawn('black', new Position(7, 8))
    ]
  }
}

const pieces = new PieceFactory()

export default pieces
