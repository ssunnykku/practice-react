import React, { useEffect } from 'react';
import {
  BackgroundDiv,
  TitleBackDiv,
  TitleH2,
  BackBtnImg,
} from '../styles/main/main';
import { styled } from 'styled-components';
import HeartFilled from '../icon/HeartFilled.svg';
import HeartOutlined from '../icon/HeartOutlined.svg';
import Camera from '../icon/Camera.svg';
import CafeImg2 from '../image/CafeImg2.png';
import Phone from '../icon/Phone.svg';
import Vector from '../icon/Vector.svg';
import BackBtn from '../icon/BackBtn.svg';
import FieldTimeOutlined from '../icon/FieldTimeOutlined.svg';
import Navigation from '../components/Main/Navigation';

// 네비게이션 제외 감싸기
const CafeDetailInfoDiv = styled.div`
  height: 800px;
  margin-left: 35px;
  margin-right: 35px;
`;

// 상단 아이콘
const CafeTitleIconDiv = styled.div`
  width: 80px;
  display: flex;
  justify-content: space-evenly;
`;

const CameraImg = styled.img`
  width: 29px;
`;

const HeartFilledImg = styled.img`
  width: 29px;
`;

const CafeImg = styled.img`
  width: 380px;
  margin-bottom: 20px;
`;

// 카페 정보 (상세정보 + 좌석현황 버튼)
const CafeInfoBackDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
// 카페 상세 정보
const CafeInfoContentDiv = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

// 위치
const CafeInfoDetailDiv = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 10px;
`;

const CafeInfoDetailImg = styled.img`
  width: 15px;
`;

const CafeInfoDetailP = styled.p`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

// 좌석 현황 버튼
const CafeSeatStatusBtn = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 10px;
  font-family: Pretendard;
  font-size: 17px;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: 0em;
  text-align: center;
  background: rgba(48, 162, 255, 1);
`;

// 메뉴
const CafeMenuBackDiv = styled.div`
  /* margin-left: 20px; */
`;
const CafeMenuTitleH4 = styled.h4``;

const CafeMenuContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  color: rgba(143, 143, 144, 1);
`;

const CafeMenuDiv = styled.div`
  padding-bottom: 5px;
  width: 200px;
  display: flex;
  justify-content: space-around;
`;

const GetMoreBtn = styled.button`
  color: rgba(143, 143, 144, 1);
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

function Cafe() {
  return (
    <BackgroundDiv>
      <CafeDetailInfoDiv>
        <TitleBackDiv>
          <BackBtnImg src={BackBtn} alt="back_button" />
          <TitleH2>카페 여기</TitleH2>
          <CafeTitleIconDiv>
            <CameraImg src={Camera} />
            <HeartFilledImg src={HeartFilled} />
          </CafeTitleIconDiv>
        </TitleBackDiv>
        <CafeImg src={CafeImg2} alt="cafe_image" />
        <CafeInfoBackDiv>
          <CafeInfoContentDiv>
            <CafeInfoDetailDiv>
              <CafeInfoDetailImg src={Vector} />
              <CafeInfoDetailP>
                서울특별시 강서구 어디동 무슨동 어쩌구저쩌구
              </CafeInfoDetailP>
            </CafeInfoDetailDiv>
            <CafeInfoDetailDiv>
              <CafeInfoDetailImg
                src={FieldTimeOutlined}
                alt="operating_hours"
              />
              <CafeInfoDetailP>평일, 토요일 10:00 ~ 22:00</CafeInfoDetailP>
            </CafeInfoDetailDiv>
            <CafeInfoDetailDiv>
              <CafeInfoDetailImg src={Phone} alt="phone_number" />
              <CafeInfoDetailP>010-1234-5678</CafeInfoDetailP>
            </CafeInfoDetailDiv>
          </CafeInfoContentDiv>
          <CafeSeatStatusBtn>좌석 현황</CafeSeatStatusBtn>
        </CafeInfoBackDiv>
        <CafeMenuBackDiv>
          <CafeMenuTitleH4>메뉴</CafeMenuTitleH4>
          <CafeMenuContainer>
            <CafeMenuDiv>
              <span>아아</span>
              <span>5000원</span>
            </CafeMenuDiv>
            <CafeMenuDiv>
              {' '}
              <span>아아</span>
              <span>5000원</span>
            </CafeMenuDiv>
            <CafeMenuDiv>
              {' '}
              <span>아아</span>
              <span>5000원</span>
            </CafeMenuDiv>
            <CafeMenuDiv>
              {' '}
              <span>아아</span>
              <span>5000원</span>
            </CafeMenuDiv>
            <CafeMenuDiv>
              {' '}
              <span>아아</span>
              <span>5000원</span>
            </CafeMenuDiv>
            <CafeMenuDiv>
              {' '}
              <span>아아</span>
              <span>5000원</span>
            </CafeMenuDiv>
          </CafeMenuContainer>
          <GetMoreBtn>더보기 ▼</GetMoreBtn>
        </CafeMenuBackDiv>
      </CafeDetailInfoDiv>
      <Navigation />
    </BackgroundDiv>
  );
}

export default Cafe;
