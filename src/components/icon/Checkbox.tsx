import React from "react";
import styled from "styled-components";

export const CheckBox = () => {
  return (
    <UnCheckedCheckBox>
      <ScInnerCheckBox />
    </UnCheckedCheckBox>
  );
};

export const UnCheckedCheckBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid #9198e5;
  border-radius: 50%;
`;

const ScInnerCheckBox = styled.div`
  width: 0.625rem;
  height: 0.625rem;
  border-radius: 50%;
  background-color: #9198e5;
`;
