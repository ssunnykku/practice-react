// 컴포넌트 안에서 조회 및 수정 할 수 있는 변수를 관리하기 : useRef로 관리하는 변수는 값이 변경되어도 컴포넌트가 리렌더링되지 않는다.
// - setTimeout, setInterval을 통해서 만들어진 id
// - 외부 라이브러리를 사용하여 생성된 인스턴스
// - scroll 위치 와 같은 값을 관리할 수 있다.

/**
 useRef는 일반적인 자바스크립트 객체입니다 즉 heap 영역에 저장됩니다
그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 참조할 때 마다 같은 메모리 주소를 가지게 되고
같은 메모리 주소를 가지기 때문에 === 연산이 항상 true를 반환하고, 값이 바뀌어도 리렌더링 되지 않습니다.

하지만 함수 컴포넌트 내부에 변수를 선언한다면, 렌더링 될 때마다 값이 초기화 됩니다.
 */

/**
 컴포넌트는 그 컴포넌트의 state나 props가 변경될 때마다 호출되는데(re-rendering), 함수형 컴포넌트는 일반 자바스크립트 함수와 마찬가지로 호출될 때마다 함수 내부에 정의된 로컬 변수들을 초기화합니다. 따라서

const nextId = { current: 4 };
nextId.current는 함수가 호출될 때마다 4입니다.

반면 useRef로 만들어진 객체는 React가 만든 전역 저장소에 저장되기 때문에 함수를 재 호출하더라도 마지막으로 업데이트한 current 값이 유지됩니다.
https://ko.legacy.reactjs.org/docs/hooks-reference.html#useref
 */
import React, { useEffect } from 'react';

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    // console.log(user);
    // useEffect 안에서 사용하는 상태나, props 가 있다면, useEffect 의 deps 에 넣어주어야 한다. (최신 props/상태를 가르키게 하기 위해)
  }, []);

  return (
    <div>
      <b
        style={{
          cursor: 'pointer',
          color: user.active ? 'green' : 'black',
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>{' '}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList;
