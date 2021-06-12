import React, { FC } from "react";
import { TodoItem, ToggleInputsButton } from "./";
import styled from "styled-components";

export const TodosContainer: FC = () => {
  return (
    <ScTodosContainer>
      <ScTodolistBox>
        <TodoItem />
      </ScTodolistBox>
      <ToggleInputsButton />
    </ScTodosContainer>
  );
};

const ScTodosContainer = styled.section`
  display: flex;
  justify-content: center;
  max-height: calc(100vh - 14.375rem);
  padding: 0.625rem 0.625rem 5rem;
  overflow: scroll;
`;

const ScTodolistBox = styled.ul`
  width: 50%;
`;
