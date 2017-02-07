// TODO:
// [x] create http server
// [x] listen requests
// [ ] implement dumb ai (plays if can)
// [ ] implement better ai (probably will never be finished)

const restify = require('restify');

const port = process.env.PORT || 3000;
const server = restify.createServer();

server.use(restify.bodyParser());

server.post('/', (req, res) => {
  res.send([]);
});

server.listen(port, function() {
  console.log(`CuAI listening on port ${port}!`);
});
