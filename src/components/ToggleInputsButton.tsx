import React, { FC } from "react";
import styled from "styled-components";
import { PlusIcon } from "./icon";

export const ToggleInputsButton: FC = () => {
  return (
    <ScToggleInputsButtonContainer>
      <ScToggleInputsButton>
        <PlusIcon />
      </ScToggleInputsButton>
    </ScToggleInputsButtonContainer>
  );
};

const ScToggleInputsButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 5rem;
  background: linear-gradient(rgba(255, 255, 255, 0.1), #fff);
`;

const ScToggleInputsButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3.75rem;
  height: 3.75rem;
  margin-bottom: 1.25rem;
  border-radius: 50%;
  background-color: #000;
  box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.3);
  cursor: pointer;

  &:active {
    margin-left: 0.125rem;
    margin-top: 0.125rem;
  }
`;
