import React from "react";
import styled from "styled-components";

const CommentWrap = styled.div`
  width: 48px;
  margin-left: 16px;
  display: flex;
  align-items: center;
`;
const CommentIcon = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid black;
`;
const CommentNumber = styled.span`
  font-size: 15px;
  margin-left: 3px;
  color: #6c7080;
`;
const Comment = () => {
  return (
    <CommentWrap>
      <CommentIcon></CommentIcon>
      <CommentNumber>2</CommentNumber>
    </CommentWrap>
  );
};

export default Comment;
