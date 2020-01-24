import React from 'react';
import logo from './logo.svg';
import './App.css';
import { UserList } from './UserComponent/index';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import { setUsersReducer } from './UserComponent/UserReducers';

const stateReducer = combineReducers({
  users: setUsersReducer,
});

const store = createStore(stateReducer, {}, applyMiddleware(thunkMiddleware));

const App: React.FC = () => {
  return (
    <Provider store= {store}>
      <div className='App'>
        <header className='App-header'>
          Hello React-Redux-Typescript!
        </header>
        <UserList></UserList>
      </div>
    </Provider>
  );
};

export default App;
