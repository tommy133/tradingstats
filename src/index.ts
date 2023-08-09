import server from './server';

const hostname = '0.0.0.0'
const port = 3000

server.listen(port, hostname, () => console.log(`Server listening at http://${hostname}:${port}/`));
