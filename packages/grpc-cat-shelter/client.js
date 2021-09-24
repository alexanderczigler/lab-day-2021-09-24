const PROTO_PATH = './shelter.proto';

const parseArgs = require('minimist');
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(
  PROTO_PATH,
  {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
  });
const shelter_proto = grpc.loadPackageDefinition(packageDefinition).catshelter;

function main() {
  const argv = parseArgs(process.argv.slice(2), {
    string: 'target'
  });
  let target;
  if (argv.target) {
    target = argv.target;
  } else {
    target = 'localhost:50051';
  }
  const client = new shelter_proto.Shelter(target,
    grpc.credentials.createInsecure());

  client.rescue({ colour: 'white', name: 'misty' }, (_, response) => {
    console.log('Rescued cat', response)
  })

  client.rescue({ colour: 'calico', name: 'beans' }, (_, response) => {
    console.log('Rescued cat', response)
  })

  client.browse(null, (_, response) => {
    console.log('Eligible cats', response)
  })

  client.vaccinate({ name: 'beans' }, (_, response) => {
    console.log('Vaccinated cat:', response.name)
  })

  client.browse(null, (_, response) => {
    console.log('Eligible cats', response)
  })

  client.vaccinate({ name: 'misty' }, (_, response) => {
    console.log('Vaccinated cat:', response.name)
  })

  client.adopt({ name: 'misty' }, (_, response) => {
    console.log('Adopted cat:', response.name)
  })

  client.browse(null, (_, response) => {
    console.log('Eligible cats', response)
  })
}

setTimeout(main, 1000)
