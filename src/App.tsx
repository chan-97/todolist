import React, { FC } from "react";
import {
  TodoListHeader,
  TodoListInputsContainer,
  TodosContainer,
  TodoListFooter,
} from "./components";
import styled from "styled-components";

export const App: FC = () => {
  return (
    <ScAppContainer>
      <TodoListHeader />
      <TodoListInputsContainer />
      <TodosContainer />
      <TodoListFooter />
    </ScAppContainer>
  );
};

const ScAppContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.gray};
`;
