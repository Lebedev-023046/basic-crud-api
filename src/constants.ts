export const userUrl = {
  getAllUsers: RegExp(/^\/api\/users$/g),
  getUser: RegExp(/\/api\/users\/[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}/g),
};
