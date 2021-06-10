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
    <>
      <TodoListHeader />
      <ScTodoListBody>
        <TodoListInputsContainer />
        <TodosContainer />
      </ScTodoListBody>
      <TodoListFooter />
    </>
  );
};

const ScTodoListBody = styled.section`
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 3.75rem;
`;
