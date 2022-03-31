import { api } from '../config';

const loginAuth = (user: any) => {
  return api({
    method: 'POST',
    url: '/adm/session',
    data: user,
  });
};
export { loginAuth };
