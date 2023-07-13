import React from 'react';

function CreateUser({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input />
      <input />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
export default CreateUser;
