import server from './server';

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`Server listening at ${PORT}`));
