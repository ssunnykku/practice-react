import React, { useState, useEffect } from 'react';
import axios from 'axios';

// 요청에 대한 상태를 관리 할 때에는 다음과 같이 총 3가지 상태를 관리해주어야합니다.

// 1. 요청의 결과
// 2. 로딩 상태
// 3. 에러

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청 시작, error와 users를 초기화
      setError(null);
      setUsers(null);

      // loading 상태를 true로 변경
      setLoading(true);
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );

      setUsers(response.data); // 데이터는 response.data 안에 들어있다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중...</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!users) return null;

  return (
    <div>
      <ul>
        {users.map((user, i) => {
          return (
            <li key={user.id}>
              {user.username} ({user.name})
            </li>
          );
        })}
      </ul>
      <button onClick={fetchUsers}>API 요청</button>
    </div>
  );
}

export default Users;
