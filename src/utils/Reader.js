class Reader {
  constructor(text, interval) {
    this.text = text || ''
    this.interval = interval || 50
    this.length = text.length
    this.index = 0
  }

  isEnd() {
    return this.index >= this.length
  }

  readNext(cb, resolve) {
    setTimeout(() => {
      this.index += 1
      let readData = this.text.substr(0, this.index)
      cb(readData)
      if (!this.isEnd()) {
        this.readNext(cb, resolve)
      } else {
        console.log('end read')
        resolve()
      }
    }, this.interval)
  }

  read(cb) {
    console.log('start read')
    return new Promise((resolve) => {
      this.readNext(cb, resolve)
    })
  }
}

export default Reader
