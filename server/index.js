const server = require("./app.js");

var PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(`server is listening on http://localhost:${PORT}`)
})