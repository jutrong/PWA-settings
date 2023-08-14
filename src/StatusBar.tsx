import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const Logo = styled.div`
  padding: 15px 16px;
  font-size: 20px;
  font-weight: 700;
`;

const Icons = styled.div`
  display: flex;
  padding: 13px 16px;
  > div:not(:last-child) {
    margin-right: 12px;
  }
`;

const Icon = styled.div`
  border: 1px solid black;
  width: 24px;
  height: 24px;
  &:last-child {
    margin-right: 0;
  }
`;

const StatusBar = () => {
  return (
    <Container>
      <Logo>로고</Logo>
      <Icons>
        <Icon />
        <Icon />
        <Icon />
      </Icons>
    </Container>
  );
};

export default StatusBar;
