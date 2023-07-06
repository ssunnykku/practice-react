import React from 'react';
import { styled } from 'styled-components';
// icon
import Google from '../icon/Google.svg';
import LoginLogo from '../icon/LoginLogo.svg';

const LoginBackgroudDiv = styled.div`
  height: 800px;
  background-color: aliceblue;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
`;

const LoginLogoBackgroundDiv = styled.div`
  height: 50%;
`;

const LoginLogoImg = styled.img`
  width: 130px;
`;
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 40%;
  margin-bottom: 100px;
`;
const LoginInputBackgroundDiv = styled.div`
  width: 280px;
  height: 52px;
  border-radius: 50px;
  background: rgba(48, 162, 255, 0.16);
  display: flex;
  padding-left: 20px;
`;
const LoginInput = styled.input`
  font-family: Pretendard;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.34);
`;

const LoginBtn = styled.button`
  width: 280px;
  height: 52px;
  background: rgba(48, 162, 255, 1);
  border-radius: 50px;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
`;

const GoogleLoginBtn = styled.button`
  border-radius: 50px;
  width: 280px;
  height: 60px;
  border-radius: 50px;
  border: 1px solid rgba(0, 0, 0, 1);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoogleLoginP = styled.p`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  text-align: center;
  color: rgba(0, 0, 0, 0.52);
  padding-left: 10px;
`;

const GoogleImg = styled.img``;

function Login() {
  return (
    <LoginBackgroudDiv>
      <LoginLogoBackgroundDiv>
        <LoginLogoImg src={LoginLogo} />
      </LoginLogoBackgroundDiv>
      <LoginForm>
        <LoginInputBackgroundDiv>
          <LoginInput type="emali" placeholder="Email" />
        </LoginInputBackgroundDiv>
        <LoginInputBackgroundDiv>
          <LoginInput type="password" placeholder="Password" />
        </LoginInputBackgroundDiv>
        <LoginBtn type="submit">Login</LoginBtn>
        <GoogleLoginBtn type="submit">
          <GoogleImg src={Google} />
          <GoogleLoginP>Login with Google</GoogleLoginP>
        </GoogleLoginBtn>
      </LoginForm>
    </LoginBackgroudDiv>
  );
}

export default Login;
