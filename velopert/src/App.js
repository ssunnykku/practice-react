import './App.css';
import React, { useRef, useState, useMemo } from 'react';
import InputSample from './ch10_InputSample';
import UserList from './UserList';
import CreateUser from './ch12_CreateUser';

function countActiveUsers(users) {
  console.log('활성 사용자 수를 세는 중...');
  return users.filter((user) => user.active).length;
}

function App() {
  const [inputs, setInputs] = useState({
    username: '',
    email: '',
  });

  const { username, email } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [users, setUsers] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ]);

  // useRef(여기) : 여기 값이 .current 값의 기본이 된다. .current 값을 수정 혹은 조회할 수 있다.
  const nextId = useRef(4);

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
    };
    // setUsers([...users, user]);
    setUsers(users.concat(user));
    setInputs({
      username: '',
      email: '',
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
    // = user.id 가 id 인 것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) => {
        return user.id === id ? { ...user, active: !user.active } : user;
      })
    );
  };
  //  성능적 문제 : input의 값을 바꿀 때에도 countActiveUsers 함수가 호출된다.
  const count = countActiveUsers(users);
  // useMemo : memoized, 이전에 계산 한 값을 재사용한다는 의미
  // deps 배열 안에 넣은 내용이 바뀌면 등록한 함수를 호출해서 값을 연산해줌
  // const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <div>
      {/* <InputSample /> */}
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </div>
  );
}

export default App;
