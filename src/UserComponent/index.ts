import { connect } from 'react-redux';
import { State } from './UserReducers';
import { UserComponent } from './UserComponent';
import { setUsers, getUsers } from './UserActions';


const mapStateToProps = (state: State): State => {
  return {users: state.users};
};

const mapDispatchToProps = (dispatch: any) => {
  return {getUsers: () => dispatch(getUsers()) };
};

export const UserList = connect(mapStateToProps, mapDispatchToProps)(UserComponent);
