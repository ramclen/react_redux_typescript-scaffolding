import { SetUsers } from './UserActions';
import { User } from './UserApi';

export function setUsersReducer(store: any= [], action: SetUsers): any {
  if (!action.users) {
    return store;
  }
  return [...action.users];
}

export interface State {
  users: User[];
}
