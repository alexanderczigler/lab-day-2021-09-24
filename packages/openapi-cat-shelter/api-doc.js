const apiDoc = {
  openapi: '3.0',
  info: {
    title: 'Cat Shelter API.',
    version: '1.0.0'
  },
  components: {
    schemas: {
      Cat: {
        type: 'object',
        properties: {
          adopted: {
            description: 'When the cat was adopted.',
            type: 'string'
          },
          colour: {
            description: 'The colour of the cat.',
            type: 'string'
          },
          name: {
            description: 'The name of the cat.',
            type: 'string'
          }
        },
        required: ['colour', 'name']
      }
    }

  },
  paths: {}
};

module.exports = apiDoc