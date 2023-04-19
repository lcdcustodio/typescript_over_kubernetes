import express from 'express';
//import redis, { RedisClient } from 'redis';
import redis, { createClient } from 'redis'
//import { RedisClient } from "../node_modules/@redis";

// Create a Redis client
/*
const client = redis.createClient({
  host: 'redis-headless', // Redis host
  port: 6379, // Redis port
});
*/



// Connect to Redis
//client.on('connect', () => {
//  console.log('Connected to Redis');
//});

//function get value from redis
async function getRedis(){

  const client = createClient({ url: 'redis://redis-headless:6379' })
  client.connect();
  client.on("error", (error) => {
    console.error(error);
  });

  const result = await client.set("key", "value");
  console.log(`result: ${result}`);
  
  const result2 = await client.get("key");
  console.log(`result2: ${result2}`);  

  //const value = await client.get('name');
  return result2

}
// Set a key-value pair
//client.set('name', 'John')

const app = express();
app.listen(3000, () => {
  console.log(`server running on port 3000`);
});


app.get('/', (req, res) => {
    console.log('Hello World, from express');
    res.send('Hello World, from express');
});


app.get('/get', async (req, res) => {
  const response  = await getRedis()
  console.log('Hello World, from express: ' + response);
  res.send('Redis Value: ' + response);
});


app.listen(() => console.log(`Hello world app listening on port`))

