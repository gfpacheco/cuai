// TODO:
// [x] create http server
// [x] listen requests
// [x] implement dumb ai (plays if can)
// [ ] implement better ai (probably will never be finished)

const restify = require('restify');

if (process.argv.length < 3) {
  console.log('Missing ai name argument');
  process.exit();
}

const aiName = process.argv[2];
let ai;

try {
  ai = require(`./ais/${aiName}`);
} catch (e) {
  console.log('Ai not found');
  process.exit();
}

if (typeof ai.play !== 'function') {
  console.log('Ai has no `play` method');
  process.exit();
}

const port = process.env.PORT || 3000;
const server = restify.createServer();

server.use(restify.bodyParser());

server.post('/', (req, res) => {
  res.send(ai.play(req.body));
});

server.listen(port, function() {
  console.log(`CuAI listening at http://localhost:${port}`);
});
