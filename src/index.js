//Establish the server connection
const server = require("./server");

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
server.listen(port, () => console.log(`Server running on port ${port}..`));