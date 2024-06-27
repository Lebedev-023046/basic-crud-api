import { createServer } from 'node:http';
import dotenv from 'dotenv';
import { getUser, getUsers } from './controllers/userController';
import { userUrl } from './constants';
import { matchPath } from './helpers/matchPath';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE';

const envData = dotenv.config();

const server = createServer((req, res) => {
  console.log(req);
  if (matchPath(req.url as string, userUrl.getAllUsers) && req.method === ('GET' as Method)) {
    getUsers(req, res);
  } else if (matchPath(req.url as string, userUrl.getUser) && req.method === ('GET' as Method)) {
    getUser(req, res);
  } else {
    res.writeHead(404, { 'content-type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route not Found' }));
  }
});

const PORT = envData.parsed?.PORT || 3000;

server.listen(PORT, () => {
  console.log(`SERVER IS LISTENING ON PORT ${PORT}`);
});
