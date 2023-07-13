import { styled } from 'styled-components';

const BackgroundDiv = styled.div`
  background-color: aliceblue;
  height: 800px;
  display: flex;
  flex-direction: column;
  /* align-items: center; */
`;

const TitleBackDiv = styled.div`
  height: 110px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-left: 15px;
  align-items: center;
`;

const TitleH2 = styled.h2`
  padding-left: 20px;
  font-family: Pretendard;
  font-size: 25px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
`;

export { TitleBackDiv, TitleH2, BackgroundDiv };
