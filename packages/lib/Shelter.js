class Shelter {
  constructor() {
    this.cats = []
  }

  eligibleCats() {
    return this.cats.filter(cat => cat.vaccinated)
  }

  find(name) {
    // This code assumes names are unique, for now.
    return this.cats.filter(cat => cat.name === name)[0]
  }

  rescue(cat) {
    this.cats.push(cat)
  }
}

module.exports = Shelter