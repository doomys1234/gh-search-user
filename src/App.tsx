import React from 'react';
import { useSelector } from 'react-redux';
import UserSearchControl from './components/UserSearchControl/UserSearchControl';
import UserSearchForm from './components/UserSearchForm/UserSearchForm';
import { getUsernameSelector } from './redux/selectors/userSelector';
import { RootState } from './redux/store/store';
import './App.css';

function App() {
  const username = useSelector((state: RootState) => getUsernameSelector(state));
  return (
    <div className="App">
      <UserSearchForm />
      {username?.length > 0 && <UserSearchControl username={username} />}
    </div>
  );
}

export default App;
