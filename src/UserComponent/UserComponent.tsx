import React from 'react';
import {UserAPI, User} from './UserApi';

interface UserComponentProps {
  getUsers: Function;
  users: User[];
}

export class UserComponent extends React.Component<UserComponentProps> {

  constructor(props: UserComponentProps) {
    super(props);
  }

  componentDidMount(): void {
    this.props.getUsers();
  }

  renderUserList(users: User[]): JSX.Element[] {
    console.log(users);
    return users.map(user => {
      return (
        <li key={user.id} >{user.name}</li>
      );
    });
  }

  render(): JSX.Element {
    return (
      <div >
        <a>hello Users</a>
        <ul>
          {this.renderUserList(this.props.users)}
        </ul>
      </div >
    );
  }
}
