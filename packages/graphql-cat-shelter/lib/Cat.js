class Cat {
  constructor(colour, name) {
    this.colour = colour
    this.name = name

    this.adopted = null
    this.rescued = new Date()
    this.vaccinated = false
  }
}

module.exports = Cat