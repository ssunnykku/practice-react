import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BackgroundDiv, TitleH2 } from '../styles/main/main';
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

const TitleBackDiv = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackBtnImg = styled.img`
  width: 25px;
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

const HeartOutlinedImg = styled.img`
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
  width: 170px;
  display: flex;
  justify-content: space-between;
`;

const CafeMenuSpan = styled.span``;

const GetMoreBtn = styled.button`
  color: rgba(143, 143, 144, 1);
  width: 100%;
  text-align: center;
  padding-top: 20px;
`;

function Cafe() {
  const [cafeInfo, setCafeInfo] = useState([]);
  const [cafeMenu, setCafeMenu] = useState([]);
  const [getMore, setGetMore] = useState(false);
  const [heart, setHeart] = useState(false);
  useEffect(() => {
    axios
      .get('https://give-my-seat-default-rtdb.firebaseio.com/cafeList/0.json')
      .then((res) => res.data)
      .then((res) => {
        return setCafeInfo(res);
      });
    cafeInfo.menu && setCafeMenu(Object.keys(cafeInfo.menu));
    // false면 더보기 보이게, true면 더보기 없어지게
    // 더보기 : cafeMenu.slice(7) 가 있을 때만 필요
  }, [cafeInfo]);

  return (
    <BackgroundDiv>
      <CafeDetailInfoDiv>
        <TitleBackDiv>
          <BackBtnImg src={BackBtn} alt="back_button" />
          <TitleH2>{cafeInfo.name}</TitleH2>
          <CafeTitleIconDiv>
            <CameraImg src={Camera} />
            {heart ? (
              <HeartFilledImg
                type="button"
                src={HeartFilled}
                onClick={() => {
                  setHeart(false);
                }}
              />
            ) : (
              <HeartOutlinedImg
                type="button"
                src={HeartOutlined}
                onClick={() => {
                  setHeart(true);
                }}
              />
            )}
          </CafeTitleIconDiv>
        </TitleBackDiv>
        <CafeImg src={CafeImg2} alt="cafe_image" />
        <CafeInfoBackDiv>
          <CafeInfoContentDiv>
            <CafeInfoDetailDiv>
              <CafeInfoDetailImg src={Vector} />
              <CafeInfoDetailP>{cafeInfo.address}</CafeInfoDetailP>
            </CafeInfoDetailDiv>
            <CafeInfoDetailDiv>
              <CafeInfoDetailImg
                src={FieldTimeOutlined}
                alt="operating_hours"
              />
              <CafeInfoDetailP>{cafeInfo.time}</CafeInfoDetailP>
            </CafeInfoDetailDiv>
            <CafeInfoDetailDiv>
              <CafeInfoDetailImg src={Phone} alt="phone_number" />
              <CafeInfoDetailP>{cafeInfo.phoneNumber}8</CafeInfoDetailP>
            </CafeInfoDetailDiv>
          </CafeInfoContentDiv>
          <CafeSeatStatusBtn>좌석 현황</CafeSeatStatusBtn>
        </CafeInfoBackDiv>
        <CafeMenuBackDiv>
          <CafeMenuTitleH4>메뉴</CafeMenuTitleH4>
          <CafeMenuContainer>
            {cafeMenu.slice(0, 6).map((menu) => {
              return (
                <CafeMenuDiv key={menu}>
                  <span>{menu}</span>
                  <span>{cafeInfo.menu[menu]}</span>
                </CafeMenuDiv>
              );
            })}
            {getMore &&
              cafeMenu.slice(6).map((menu) => {
                return (
                  <CafeMenuDiv key={menu}>
                    <CafeMenuSpan>{menu}</CafeMenuSpan>
                    <CafeMenuSpan>{cafeInfo.menu[menu]}</CafeMenuSpan>
                  </CafeMenuDiv>
                );
              })}
          </CafeMenuContainer>
          {getMore ? (
            <GetMoreBtn
              type="submit"
              onClick={() => {
                setGetMore(false);
              }}
            >
              접기 ▲{' '}
            </GetMoreBtn>
          ) : (
            <GetMoreBtn
              type="submit"
              onClick={() => {
                setGetMore(true);
              }}
            >
              더보기 ▼
            </GetMoreBtn>
          )}
        </CafeMenuBackDiv>
      </CafeDetailInfoDiv>
      <Navigation />
    </BackgroundDiv>
  );
}

export default Cafe;
