import React from "react";
import styled from "styled-components";

const LikeWrap = styled.div`
  width: 48px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;
const LikeIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid black;
`;
const LikeNumber = styled.span`
  font-size: 15px;
  margin-left: 3px;
  color: #6c7080;
`;
const Like = () => {
  return (
    <LikeWrap>
      <LikeIcon></LikeIcon>
      <LikeNumber>23</LikeNumber>
    </LikeWrap>
  );
};

export default Like;
