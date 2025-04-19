// lib/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URI;
let client;
let clientPromise;

if (!uri) {
    console.log('no uri')
  throw new Error('Please add your Mongo URI to .env.local');
}
if (process.env.NODE_ENV === 'development') {
//@ts-expect-error "something could go wrong"
  if (!global._mongoClientPromise) {
    //@ts-expect-error "something could go wrong"
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    //@ts-expect-error "something could go wrong"
    global._mongoClientPromise = client.connect();
  }
  //@ts-expect-error "something could go wrong"
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable
  //@ts-expect-error "something could go wrong"
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  clientPromise = client.connect();
}

export default clientPromise;
