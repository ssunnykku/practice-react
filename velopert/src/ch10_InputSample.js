// useRef로 특정 DOM 선택하기
// ref : DOM을 선택해야 할 때 사용
// ex) 특정 엘리먼트의 크기 가져오기, 스크롤바 위치 가져오거나 설정하기, 포커스 설정 등
// 초기화 버튼을 클릭했을 때 이름 input에 포커스가 잡히게 하기

import React, { useState, useRef, useEffect } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: '',
  });
  const nameInput = useRef();

  const { name, nickname } = inputs;

  const onChange = (e) => {
    //  input에서 value와 name값을 가지오고오기
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // name의 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInputs({
      name: '',
      nickname: '',
    });
    // 여기에 포커스
    console.log(nameInput.current);
    nameInput.current.focus();
  };

  return (
    <div>
      <input
        name="name"
        placeholder="이름"
        onChange={onChange}
        value={name}
        ref={nameInput}
      />
      <input
        name="nickname"
        placeholder="닉네임"
        onChange={onChange}
        value={nickname}
        // ref={nickname}
      />
      {/* <input /> */}
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: </b>
        {name} ({nickname})
      </div>
    </div>
  );
}

export default InputSample;
