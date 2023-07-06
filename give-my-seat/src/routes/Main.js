import React from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import MainPlus from '../icon/MainPlus.svg';
import CafeImg from '../image/CafeImg.svg';
import HeartFilled from '../icon/HeartFilled.svg';
import HomeOutlined from '../icon/HomeOutlined.svg';
import Person from '../icon/Person.svg';
import Alert from '../icon/Alert.svg';
import HeartOutlined from '../icon/HeartOutlined.svg';

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

const MainTitleH2 = styled.h2`
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

const MainContentDiv = styled.div`
  background: rgba(238, 238, 238, 1);
  width: 374px;
  height: 190px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 10px;
`;

const MainCafeImg = styled.img`
  width: 170px;
`;

const MainCafeInfoDiv = styled.div`
  height: 160px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const MainCafeNameDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding-top: 10px;
`;

const MainCafeDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
`;

const MainCafeInfoNameH3 = styled.h3`
  width: 100px;
  height: 100%;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`;

const MainCafeInfoP = styled.p`
  font-family: Pretendard;
  font-size: 15px;
  font-weight: 500;
  line-height: 12px;
  text-align: left;
  padding-left: 1px;
  width: 150px;
`;

const HeartImg = styled.img`
  width: 23px;
  height: 23px;
`;

const MainTagsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-right: 30px;
`;

const MainTagBack1 = styled.div`
  background: rgba(48, 162, 255, 1);
  width: 70px;
  height: 27px;
  border-radius: 5px;
`;

const MainTagBack2 = styled.div`
  background: rgba(48, 162, 255, 1);
  width: 38px;
  height: 27px;
  border-radius: 5px;
  padding-bottom: 2px;
`;

const MainTagP = styled.p`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 710;
  line-height: 30px;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 21px;

  text-align: center;
`;

const MainCafeSeatInfoP = styled.p``;

const Navbar = styled.div`
  height: 70px;
  width: 100%;
  background: rgba(238, 238, 238, 1);
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

function Main() {
  return (
    <MainBackgroundDiv>
      <MainTitleBackDiv>
        <MainTitleH2>구독 리스트</MainTitleH2>
        <PlusBtnBackDiv>
          <PlusBtnDiv></PlusBtnDiv>
          <MainPlusImg src={MainPlus} alt="plusBtn" />
        </PlusBtnBackDiv>
      </MainTitleBackDiv>
      <MainSection>
        <MainContentDiv>
          <MainCafeImg src={CafeImg} alt="cafeImg" />
          <MainCafeInfoDiv>
            <MainCafeNameDiv>
              <MainCafeInfoNameH3>카페 여기</MainCafeInfoNameH3>
              <HeartImg src={HeartFilled} alt="heart" />
            </MainCafeNameDiv>
            <MainCafeDetailDiv>
              <MainCafeInfoP>서울시 마포구 와우산로 ..</MainCafeInfoP>
              <MainTagsDiv>
                <MainTagBack1>
                  <MainTagP>분위기 좋은</MainTagP>
                </MainTagBack1>
                <MainTagBack2>
                  <MainTagP>카공</MainTagP>
                </MainTagBack2>
              </MainTagsDiv>
            </MainCafeDetailDiv>
            <MainCafeSeatInfoP></MainCafeSeatInfoP>
          </MainCafeInfoDiv>
        </MainContentDiv>
        <Navbar>
          <Link to="">
            <img src={HomeOutlined} alt="homeBtn" width="120%" />
          </Link>
          <Link to="">
            <img src={Alert} alt="homeBtn" width="120%" />
          </Link>
          <Link to="">
            <img src={HeartOutlined} alt="homeBtn" width="120%" />
          </Link>
          <Link to="">
            <img src={Person} alt="homeBtn" width="120%" />
          </Link>
        </Navbar>
      </MainSection>
    </MainBackgroundDiv>
  );
}

export default Main;
