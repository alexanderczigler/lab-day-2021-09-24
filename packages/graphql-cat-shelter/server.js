const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { buildSchema } = require('graphql')

const Cat = require('../lib/Cat')

const CATS = []

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  scalar Date

  type Cat {
    adopted: Date
    colour: String
    name: String
    rescued: Date
    vaccinated: Boolean
  }

  type Query {
    adopt(name: String!): Cat
    browse: [Cat]
    rescue(colour: String!, name: String!): Cat
    vaccinate(name: String!): Cat
  }
`)

// The root provides a resolver function for each API endpoint
var root = {
  adopt: ({ name }) => {
    const cat = CATS.filter(cat => cat.name === name)[0]

    if (!cat) {
      throw { error: `There is no cat named ${name}` }
    }

    cat.adopt()
    return cat
  },
  browse: () => {
    return CATS.filter(cat => cat.vaccinated)
  },
  rescue: ({ colour, name }) => {
    if (CATS.filter(cat => cat.name === name).length > 0) {
      throw {
        error: `There is already a cat named ${name}`
      }
    }

    const rescuedCat = new Cat(colour, name)
    CATS.push(rescuedCat)

    return rescuedCat
  },
  vaccinate: ({ name }) => {
    const cat = CATS.filter(cat => cat.name === name)[0]

    if (!cat) {
      throw { error: `There is no cat named ${name}` }
    }

    cat.vaccinate()
    return cat
  }
}

var app = express()
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}))
app.listen(4000)
console.log('Running a GraphQL API server at http://localhost:4000/graphql')