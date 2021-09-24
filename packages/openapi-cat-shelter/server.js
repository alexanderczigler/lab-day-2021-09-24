const express = require('express');
const { initialize } = require('express-openapi');
const v1ShelterService = require('./services/shelterService.js');
const v1ApiDoc = require('./api-doc.js');

const app = express();
initialize({
  app,
  apiDoc: v1ApiDoc,
  dependencies: {
    shelterService: v1ShelterService
  },
  paths: './paths'
});

app.listen(3000);