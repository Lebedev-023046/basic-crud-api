import { METHODS, createServer } from 'node:http';
import dotenv from 'dotenv';
import { getUsers } from './controllers/userController';
import { userUrl } from './constants';

type Methods = 'GET' | 'POST' | 'PUT' | 'DELETE';

const envData = dotenv.config();

const server = createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);
  if (req.url === userUrl.getAllUsers && req.method === ('GET' as Methods)) {
    getUsers(req, res);
  } else {
    res.writeHead(404, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not Found' }));
  }
});

const PORT = envData.parsed?.PORT || 3000;

server.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
});
