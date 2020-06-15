const express = require("express");

const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

const server = express();

const isPrime = (num) => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) {
      return false;
    }
  return num > 1;
};

server.get("/low", (request, response) => {
  const limit = 50000;
  let result = 0;

  for (let i = 0; i < limit; i++) {
    const prime = isPrime(i);

    prime && result++;
  }

  response.json({ primeNumbers: result });
});

server.get("/high", (request, response) => {
  const limit = 300000;
  let result = 0;

  for (let i = 0; i < limit; i++) {
    const prime = isPrime(i);

    prime && result++;
  }

  response.json({ primeNumbers: result });
});

server.listen(3333);
