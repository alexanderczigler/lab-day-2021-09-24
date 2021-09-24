module.exports = function (shelterService) {
  let operations = {
    GET,
    POST
  };

  function GET(req, res, next) {
    res.status(200).json(shelterService.browse(req.query.name));
  }

  function POST(req, res, next) {
    console.log(req.body, req.params, req.query)
    res.status(200).json(shelterService.rescue(req));
  }

  GET.apiDoc = {
    summary: 'Browse cats eligible for adoption.',
    operationId: 'browse',
    parameters: [],
    responses: {
      200: {
        description: 'Cats :)',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Cat'
              }
            }
          }
        }
      },
      default: {
        description: 'An error occurred',
        content: {
          'application/json': {
            schema: {
              additionalProperties: true
            }
          }
        }
      }
    }
  };

  POST.apiDoc = {
    summary: 'Add a cat to the shelter, thus rescuing it.',
    operationId: 'rescue',
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/Cat'
          }
        }
      }
    },
    responses: {
      200: {
        description: 'A list of worlds that match the requested name.',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/Cat'
              }
            }
          }
        }

      },
      default: {
        description: 'An error occurred',
        content: {
          'application/json': {
            schema: {
              additionalProperties: true
            }
          }
        }
      }
    }
  }

  return operations;
}