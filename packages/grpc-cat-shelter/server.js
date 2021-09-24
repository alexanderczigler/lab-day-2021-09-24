const PROTO_PATH = './shelter.proto';

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

const Cat = require('../lib/Cat')
const Shelter = require('../lib/Shelter')

const shelter = new Shelter()

const rescue = (call, callback) => {
  const { colour, name } = call.request
  shelter.rescue(new Cat(colour, name))
  callback(null, { message: `Rescued a ${colour} cat named ${name}!` })
}

function main() {
  const server = new grpc.Server();
  server.addService(hello_proto.Shelter.service, { rescue });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();