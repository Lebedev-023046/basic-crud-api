import users from '../../data/users.json';
import { User } from '../types';

export async function getAllUsers(): Promise<User[]> {
  return new Promise((res, rej) => {
    res(users);
    rej('Smth went wrong accessing users');
  });
}
