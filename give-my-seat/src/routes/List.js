import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import CafeCard from '../components/Main/CafeCard';
import Navigation from '../components/Main/Navigation';
import { TitleH2, TitleBackDiv } from '../styles/main/main';
import SearchOutlined from '../icon/SearchOutlined.svg';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getCafeList } from '../redux/cafeListSlice.js';

const ListBackDiv = styled.div`
  background-color: aliceblue;
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

const CafeListDiv = styled.div`
  height: 80%;
`;

const SortedCafeDiv = styled.div``;

const SubTitleH4 = styled.h4``;

function List() {
  const cafeList = useSelector((state) => state.cafeList.cafe);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_CAFELIST_API)
      .then((res) => res.data)
      .then((res) => dispatch(getCafeList(res)));
    console.log(cafeList[0]['address']);
  }, []);
  return (
    <ListBackDiv>
      <TitleBackDiv>
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
      <CafeListDiv>
        <SortedCafeDiv>
          <SubTitleH4>내 주변 카페</SubTitleH4>
          {cafeList.map((cafe, i) => {
            return (
              <CafeCard
                key={cafe['id']}
                address={cafe['address']}
                name={cafe['name']}
                tags={cafe['tags']}
                phoneNumber={cafe['phoneNumber']}
                sit={cafe['sit']}
                time={cafe['time']}
              />
            );
          })}
        </SortedCafeDiv>
        <SortedCafeDiv>
          <SubTitleH4>인기 카페</SubTitleH4>
          <CafeCard />
        </SortedCafeDiv>
        <SortedCafeDiv>
          <SubTitleH4>한산한 카페</SubTitleH4>
          <CafeCard />
        </SortedCafeDiv>
      </CafeListDiv>
      <Navigation />
    </ListBackDiv>
  );
}

export default List;
