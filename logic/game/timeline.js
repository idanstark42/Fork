export default class Timeline {
  constructor (player) {
    this.active = true
    this.player = player
  }

  deactivate () {
    this.active = false
  }
}
