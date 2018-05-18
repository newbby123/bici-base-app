import { IS_DEV } from './config'

export class Logger {
  constructor (level) {
    if (level === undefined) {
      level = IS_DEV ? 'debug' : 'info'
    }
    this.level = level
  }

  debug (...args) {
    if (this.level === 'debug') {
      console.log(this.time(), ...args)
    }
  }

  info (...args) {
    if (this.level === 'debug' || this.level === 'info') {
      console.log(this.time(), ...args)
    }
  }

  warn (...args) {
    if (this.level === 'debug' || this.level === 'info' || this.level === 'warn') {
      console.log(this.time(), ...args)
    }
  }

  error (...args) {
    console.log(this.time(), ...args)
  }

  time () {
    let d = new Date()
    return d.toTimeString().substring(0, 8) + '.' + d.getMilliseconds()
  }
}

export default new Logger()
