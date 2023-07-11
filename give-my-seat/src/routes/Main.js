// 더미데이터 만들고, 데이터 뿌려주기

import React from 'react';

import { styled } from 'styled-components';

import MainPlus from '../icon/MainPlus.svg';
import BackBtn from '../icon/BackBtn.svg';

import CafeCard from '../components/Main/CafeCard';
import Navigation from '../components/Main/Navigation';
import {
  TitleBackDiv,
  TitleH2,
  BackgroundDiv,
  BackBtnImg,
} from '../styles/main/main';

const PlusBtnBackDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 40px;
`;

const PlusBtnDiv = styled.div`
  background: rgba(48, 162, 255, 0.5);
  width: 35px;
  height: 35px;
  border-radius: 50%;
  position: relative;
`;

const MainPlusImg = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  margin-right: 10px;
  margin-top: 10px;
`;

const MainSection = styled.section`
  display: flex;
  height: 700px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

function Main() {
  return (
    <BackgroundDiv>
      <TitleBackDiv>
        <BackBtnImg src={BackBtn} alt="back_button" />
        <TitleH2>구독 리스트</TitleH2>
        <PlusBtnBackDiv>
          <PlusBtnDiv></PlusBtnDiv>
          <MainPlusImg src={MainPlus} alt="plusBtn" />
        </PlusBtnBackDiv>
      </TitleBackDiv>
      <MainSection>
        <CafeCard />
        <Navigation />
      </MainSection>
    </BackgroundDiv>
  );
}

export default Main;
