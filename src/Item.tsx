import React from "react";
import styled from "styled-components";

const Item = styled.div`
  width: 56px;
  height: 56px;
  border: 1px solid black;
  border-radius: 4px;
  margin: 15px 0;
  margin-left: 10px;
  flex: 0 0 auto;
`;

const SmallItem = () => {
  return <Item></Item>;
};

export default SmallItem;
