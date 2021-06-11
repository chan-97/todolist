import React, { FC } from "react";
import styled from "styled-components";

export const TodoListInputsContainer: FC = () => {
  return (
    <ScFormContainer>
      <ScFormWrapper>
        <ScTodoInputsBox>
          <ScTodoInput type="string" placeholder="todo" />
          <ScTodoInput type="number" placeholder="deadline" />
        </ScTodoInputsBox>
        <ScSubmitButton>Submit</ScSubmitButton>
      </ScFormWrapper>
    </ScFormContainer>
  );
};

const ScFormContainer = styled.div`
  display: flex;
  align-items: center;
  height: 9.375rem;
`;

const ScFormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5rem;
`;

const ScTodoInputsBox = styled.div`
  width: 50%;
  height: 70%;
`;

const ScTodoInput = styled.input`
  width: 40%;
  padding: 0.938rem;
  margin-right: 1.25rem;
  border: 3px solid rgba(0, 0, 0, 0.3);
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSizes.standard};

  &:focus {
    border: 3px solid #000;
    outline: none;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

const ScSubmitButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 70%;
  border-radius: 3px;
  font-size: ${({ theme }) => theme.fontSizes.standard};
  background: linear-gradient(#e66465, #9198e5);
  color: #fff;
  cursor: pointer;
`;
