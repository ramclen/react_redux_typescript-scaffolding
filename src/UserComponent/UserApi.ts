import axios from 'axios';

export class UserAPI {
  constructor() {

  }

  post(): Promise<User[]> {
    return axios.post('/users/list').then(res => {
      console.log(res);
      return <User[]>res.data;
    });
  }

  get(): Promise<void> {
    return axios.get('/users').then(res => {
      console.log(res);
    });
  }
}

export class User {
  name: string = '';
  id: number = 0;
}
