import React from 'react';
import { styled } from 'styled-components';
import CafeCard from '../components/Main/CafeCard';
import Navigation from '../components/Main/Navigation';
import { TitleH2, TitleBackDiv, BackBtnImg } from '../styles/main/main';
import SearchOutlined from '../icon/SearchOutlined.svg';
import BackBtn from '../icon/BackBtn.svg';

const ListBackDiv = styled.div`
  height: 1200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* overflow-y: scroll; */
`;

const SearchForm = styled.div`
  height: 50px;
  display: flex;
  flex-direction: row;
`;

const SearchInputDiv = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
`;

const SearchImg = styled.img`
  position: relative;
`;

const SearchInput = styled.input`
  border: 1px solid rgba(143, 143, 144, 1);
  color: rgba(143, 143, 144, 1);
  width: 250px;
  height: 45px;
  border-radius: 10px;
  border: 1px;
  position: absolute;
`;

const NearCafeDiv = styled.div``;

const NearCafeTitle = styled.title``;

function List() {
  return (
    <ListBackDiv>
      <TitleBackDiv>
        <BackBtnImg src={BackBtn} alt="back_button" />
        <TitleH2>카페 찾기</TitleH2>
      </TitleBackDiv>
      <SearchForm>
        <select>
          <option>전체</option>
          <option>내 주변 카페</option>
          <option>인기 카페</option>
          <option>한산한 카페</option>
        </select>
        <SearchInputDiv>
          <SearchInput placeholder="키워드를 입력하세요" id="search" />
          <label for="search">
            <SearchImg src={SearchOutlined} type="button" />
          </label>
        </SearchInputDiv>
      </SearchForm>
      <NearCafeDiv>
        <NearCafeTitle>내 주변 카페</NearCafeTitle>
        <CafeCard />
      </NearCafeDiv>
      <NearCafeDiv>
        <NearCafeTitle>인기 카페</NearCafeTitle>
        <CafeCard />
      </NearCafeDiv>
      <NearCafeDiv>
        <NearCafeTitle>한산한 카페</NearCafeTitle>
        <CafeCard />
      </NearCafeDiv>
      <Navigation />
    </ListBackDiv>
  );
}

export default List;
