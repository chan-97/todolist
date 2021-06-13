import React, { FC } from "react";
import { TodoItem, ToggleInputsButton } from "./";
import styled from "styled-components";

interface ITask {
  taskName: string;
  deadline: number;
}

interface IProps {
  handleInputs(): void;
  todoList: ITask[];
}

export const TodosContainer: FC<IProps> = ({
  handleInputs,
  todoList,
}): JSX.Element => {
  return (
    <ScTodosContainer>
      <ScTodolistBox>
        {todoList.map((todo: ITask, idx: number) => {
          return <TodoItem key={idx} todo={todo} />;
        })}
      </ScTodolistBox>
      <ToggleInputsButton handleInputs={handleInputs} />
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
