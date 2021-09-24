const Cat = require('../../lib/Cat')
const Shelter = require('../../lib/Shelter')

const shelter = new Shelter()

const shelterService = {
  browse() {
    console.log('All cats', shelter.cats)
    return shelter.eligibleCats()
  },
  rescue({ colour, name }) {
    console.log('Rescue a cat!')
    console.log(colour, name)

    const cat = new Cat(colour, name)
    shelter.rescue(cat)

    return cat
  }
};

module.exports = shelterService;