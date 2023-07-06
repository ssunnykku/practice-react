import React from 'react';
import { styled } from 'styled-components';
import CafeCard from '../components/Main/CafeCard';
import Navigation from '../components/Main/Navigation';

const ListBackDiv = styled.div``;

const TitleDiv = styled.div``;

const Title = styled.title``;

const SearchDiv = styled.div``;

const FilterDiv = styled.div``;

const SearchInput = styled.input``;

const NearCafeDiv = styled.div``;

const NearCafeTitle = styled.title``;

function List() {
  return (
    <ListBackDiv>
      <TitleDiv>
        <Title></Title>
      </TitleDiv>
      <SearchDiv>
        <FilterDiv></FilterDiv>
        <SearchInput />
      </SearchDiv>
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
