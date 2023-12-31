import React from 'react';
import CafeImg from '../../image/CafeImg.svg';
import HeartFilled from '../../icon/HeartFilled.svg';

import {
  CafeSeatInfoP,
  ContentDiv,
  CafeImage,
  CafeInfoDiv,
  CafeNameDiv,
  CafeInfoNameH3,
  HeartImg,
  CafeDetailDiv,
  CafeInfoP,
  TagsDiv,
  TagBack1,
  TagP,
  TagBack2,
} from '../../styles/main/CafeCard-style.js';

function CafeCard(props) {
  return (
    <ContentDiv>
      <CafeImage src={CafeImg} alt="cafeImg" />
      <CafeInfoDiv>
        <CafeNameDiv>
          <CafeInfoNameH3>{props.name}</CafeInfoNameH3>
          <HeartImg src={HeartFilled} alt="heart" />
        </CafeNameDiv>
        <CafeDetailDiv>
          <CafeInfoP>{props.address}</CafeInfoP>
          <TagsDiv>
            <TagBack1>
              <TagP>분위기 좋은</TagP>
            </TagBack1>
            <TagBack2>
              <TagP>카공</TagP>
            </TagBack2>
          </TagsDiv>
        </CafeDetailDiv>
        <CafeSeatInfoP>잔여좌석 : 4/16</CafeSeatInfoP>
      </CafeInfoDiv>
    </ContentDiv>
  );
}

export default CafeCard;
