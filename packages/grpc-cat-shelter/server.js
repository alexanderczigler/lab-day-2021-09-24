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
const shelter_proto = grpc.loadPackageDefinition(packageDefinition).catshelter;

const Cat = require('../lib/Cat')
const Shelter = require('../lib/Shelter')

const shelter = new Shelter()

const adopt = (call, callback) => {
  const { name } = call.request
  const cat = shelter.find(name)

  cat.adopt()

  callback(null, cat)
}

const rescue = (call, callback) => {
  const { colour, name } = call.request

  const cat = new Cat(colour, name)
  shelter.rescue(cat)
  callback(null, cat)
}

const browse = (_, callback) => {
  callback(null, { cats: shelter.eligibleCats() })
}

const vaccinate = (call, callback) => {
  const { name } = call.request
  const cat = shelter.find(name)

  cat.vaccinate()

  callback(null, cat)
}

function main() {
  const server = new grpc.Server();
  server.addService(shelter_proto.Shelter.service, {
    adopt,
    browse,
    rescue,
    vaccinate,
  });
  server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
    server.start();
  });
}

main();