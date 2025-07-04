import Timeline from './timleine'

export default class TimelinesPool {
  constructor (maxDifference = 1) {
    this.timelines = [new Timeline('initial')]
    this.maxDifference = maxDifference
  }

  create (player) {
    const newTimeline = new Timeline(player)
    this.timelines.push(newTimeline)
    this.expireOldTimelines()
    return newTimeline
  }

  expireOldTimelines () {
    const playerTimelines = this.activePlayerTimlines
    
    const difference = playerTimelines.length - playerTimelines.length
    
    if (difference > this.maxDifference) {
      playerTimelines.slice(0, difference - this.maxDifference).forEach(timeline => timeline.deactivate())
    } else if (difference < -this.maxDifference) {
      playerTimelines.slice(0, Math.abs(difference) - this.maxDifference).forEach(timeline => timeline.deactivate())
    }
  }

  get playerTimelines () {
    return this.timelines.reduce((res, timeline) => {
      res[timeline.player].push(timeline)
      return res
    }, { white: [], black: [] })
  }

  get activePlayerTimlines () {
    return this.timelines.filter(timeline => timeline.active).reduce((res, timeline) => {
      res[timeline.player].push(timeline)
      return res
    }, { white: [], black: [] })
  }
}