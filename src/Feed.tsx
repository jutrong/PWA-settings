import React, { useState } from "react";
import styled from "styled-components";
import FeedHeader from "./FeedHeader";
import StatusBar from "./StatusBar";
import SmallItem from "./Item";
import HashTag from "./HashTag";
import Like from "./Like";
import Comment from "./Comment";

const Container = styled.div`
  width: 100%;
`;
const FeedImage = styled.img`
  width: 100%;
  height: 390px;
`;
const SmallItems = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
`;
const FeedText = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  margin: 16px;
  width: 239px;
`;
const More = styled.p`
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;
  display: inline-block;
`;
const BtnWrap = styled.div`
  display: flex;
`;
const Feed = () => {
  const [img] = useState([1, 2, 3, 4, 5, 6, 7]);
  return (
    <Container>
      <StatusBar />
      <FeedHeader />
      <FeedImage />
      <SmallItems>
        {img.map((_, index) => (
          <SmallItem key={index} />
        ))}
      </SmallItems>
      <FeedText>
        럽셒 울정꾸기 리허설 영상 ㅜㅜ 무대 올라왔을 때는 마냥 멋지고 좋았는데
        ㅜㅜ 저때 비오고 난리 였대...
        <More>더보기</More>
      </FeedText>
      <HashTag />
      <BtnWrap>
        <Like />
        <Comment />
      </BtnWrap>
    </Container>
  );
};

export default Feed;
