import { IncomingMessage, ServerResponse } from 'node:http';
import { getAllUsers } from '../models/userModel';

export async function getUsers(req: IncomingMessage, res: ServerResponse<IncomingMessage>) {
  try {
    const users = await getAllUsers();

    res.writeHead(200, { 'content-type': 'application/json' });
    res.end(JSON.stringify(users));
  } catch (error) {
    console.log('Error: ', error);
  }
}

export async function getUser(req: IncomingMessage, res: ServerResponse<IncomingMessage>) {
  try {
    const userId = req.url?.split('/').at(-1);

    if (!userId) {
      res.writeHead(400, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ message: 'Invalid user ID' }));
    }

    const users = await getAllUsers();
    const currentUser = users.find((user) => user.id === userId);

    console.log('HELLO', currentUser);

    // res.end();
    if (currentUser) {
      res.writeHead(200, { 'content-type': 'application/json' });
      res.end(JSON.stringify(currentUser));
    } else {
      res.writeHead(404, { 'content-type': 'application/json' });
      res.end(JSON.stringify({ message: 'User not Found' }));
    }
  } catch (error) {
    console.log('Error: ', error);
  }
}
