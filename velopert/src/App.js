import './App.css';
import React, { useRef } from 'react';
import InputSample from './InputSample';
import UserList from './UserList';

function App() {
  const users = [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
    },
  ];

  // useRef(여기) : 여기 값이 .current 값의 기본이 된다. .current 값을 수정 혹은 조회할 수 있다.
  const nextId = useRef(4);

  const onCreate = () => {
    nextId.current += 1;
  };
  return (
    <div>
      {/* <InputSample /> */}
      <UserList users={users} />
    </div>
  );
}

export default App;
