import React, { FC } from "react";
import styled from "styled-components";

export const TodoListHeader: FC = () => {
  return (
    <ScTodoListHeaderContainer>
      <ScTodoListHeader>TODOLIST</ScTodoListHeader>
    </ScTodoListHeaderContainer>
  );
};

const ScTodoListHeaderContainer = styled.header`
  height: 5rem;
  box-shadow: 0px 3px 5px rgba(116, 109, 105, 0.1);
  background-color: #fff;
`;

const ScTodoListHeader = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1256px;
  height: 100%;
  margin: 0 auto;
  padding: 0 3.75rem;
  font-size: ${({ theme }) => theme.fontSizes.title};
  font-weight: 700;
`;
