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
