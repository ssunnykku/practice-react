import React from 'react';

import { styled } from 'styled-components';

import MainPlus from '../icon/MainPlus.svg';

import CafeCard from '../components/Main/CafeCard';
import Navigation from '../components/Main/Navigation';

const MainBackgroundDiv = styled.div`
  background-color: aliceblue;
  height: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainTitleBackDiv = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 50px;
  align-items: center;
`;

const TitleH2 = styled.h2`
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
`;

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
    <MainBackgroundDiv>
      <MainTitleBackDiv>
        <TitleH2>구독 리스트</TitleH2>
        <PlusBtnBackDiv>
          <PlusBtnDiv></PlusBtnDiv>
          <MainPlusImg src={MainPlus} alt="plusBtn" />
        </PlusBtnBackDiv>
      </MainTitleBackDiv>
      <MainSection>
        <CafeCard />
        <Navigation />
      </MainSection>
    </MainBackgroundDiv>
  );
}

export default Main;
