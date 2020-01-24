import { User, UserAPI } from './UserApi';
import { ThunkDispatch } from 'redux-thunk';
import axios from 'axios';
const GET_USERS = 'GET_USERS';

export interface SetUsers {
  type: typeof GET_USERS;
  users: User[];
}

export function setUsers(users: User[]): SetUsers {
  return {type: GET_USERS, users};
}

export function getUsers(): any {
  return ((dispatch: ThunkDispatch<{}, {}, SetUsers>) => {
    new UserAPI().post().then(users => {
      dispatch(setUsers(users));
    });
  } );
}
