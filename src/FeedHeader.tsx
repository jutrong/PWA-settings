import React from "react";
import styled from "styled-components";

const Container = styled.div`
  widht: 100%;
  height: 60px;
  border: 1px solid gray;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
`;
const Profile = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 40px;
  background-color: lightgray;
`;
const HeaderContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  width: 294px;
`;
const Nickname = styled.div`
  // height: 14px;
  font-size: 14px;
  display: inline-block;
  font-weight: 700;
  margin-bottom: 6px;
  display: flex;
`;
const ContentWrap = styled.div`
  font-size: 13px;
  display: flex;
`;
const FeedName = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
const Time = styled.div`
  color: #666;
  font-family: Pretendard;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  margin-left: 10px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background-color: #D9D9D9;
    margin-right: 5px;
    top: 50%;
    left: -6px;
    transform: translateY(-50%);
  }
`;
const MoreBtn = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid black;
`;

const FeedHeader = () => {
  return (
    <Container>
      <Profile />
      <HeaderContent>
        <Nickname>정의로운 손민수</Nickname>
        <ContentWrap>
          <FeedName>꾹이의 모든 것</FeedName>
          <Time>10분 전</Time>
        </ContentWrap>
      </HeaderContent>
      <MoreBtn />
    </Container>
  );
};

export default FeedHeader;
