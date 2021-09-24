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
const hello_proto = grpc.loadPackageDefinition(packageDefinition).catshelter;

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
  const client = new hello_proto.Shelter(target,
    grpc.credentials.createInsecure());

  client.rescue({ colour: 'white', name: 'misty' }, (error, response) => {
    console.log(response.message)
  })
}

setTimeout(main, 1000)