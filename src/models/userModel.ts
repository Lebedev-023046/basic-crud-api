import users from '../../data/users.json';

export async function getAllUsers(): Promise<unknown> {
  return new Promise((res, rej) => {
    res(users);
    rej('Smth went wrong accessing users');
  });
}
