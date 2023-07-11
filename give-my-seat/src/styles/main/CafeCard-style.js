import { styled } from 'styled-components';

const ContentDiv = styled.div`
  background: rgba(238, 238, 238, 1);
  width: 374px;
  height: 190px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding-left: 10px;
`;

const CafeImage = styled.img`
  width: 170px;
`;

const CafeInfoDiv = styled.div`
  height: 160px;
  width: 160px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-evenly;
`;

const CafeNameDiv = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  height: 20px;
  padding-top: 10px;
`;

const CafeDetailDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100px;
`;

const CafeInfoNameH3 = styled.h3`
  width: 100px;
  height: 100%;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  text-align: left;
`;

const CafeInfoP = styled.p`
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

const TagsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-right: 30px;
`;

const TagBack1 = styled.div`
  background: rgba(48, 162, 255, 1);
  width: 70px;
  height: 27px;
  border-radius: 5px;
`;

const TagBack2 = styled.div`
  background: rgba(48, 162, 255, 1);
  width: 38px;
  height: 27px;
  border-radius: 5px;
  padding-bottom: 2px;
`;

const TagP = styled.p`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 710;
  line-height: 30px;
  color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 21px;

  text-align: center;
`;

const CafeSeatInfoP = styled.p`
  font-family: Pretendard;
  font-size: 13px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0em;
  padding-left: 70px;
`;

export {
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
};
