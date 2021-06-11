import React, { FC } from "react";
import { CheckBox, UnCheckedCheckBox } from "./icon";
import styled from "styled-components";
import ICON_CLOSE from "./icon/icon_close.png";

export const TodosContainer: FC = () => {
  return (
    <ScTodosContainer>
      <ScTodolistBox>
        <ScTodo>
          <span>react</span>
          <ScTodoSettingsBox>
            <ScDeadline>2021년 0월 0일 까지</ScDeadline>
            <UnCheckedCheckBox />
            <img src={ICON_CLOSE} />
          </ScTodoSettingsBox>
        </ScTodo>
        <ScTodo>
          <span>typescript</span>
          <ScTodoSettingsBox>
            <ScDeadline>2021년 0월 0일 까지</ScDeadline>
            <CheckBox />
            <img src={ICON_CLOSE} />
          </ScTodoSettingsBox>
        </ScTodo>
        <ScTodo>
          <span>nodejs</span>
          <ScTodoSettingsBox>
            <ScDeadline>2021년 0월 0일 까지</ScDeadline>
            <CheckBox />
            <img src={ICON_CLOSE} />
          </ScTodoSettingsBox>
        </ScTodo>
        <ScTodo>
          <span>aws</span>
          <ScTodoSettingsBox>
            <ScDeadline>2021년 0월 0일 까지</ScDeadline>
            <CheckBox />
            <img src={ICON_CLOSE} />
          </ScTodoSettingsBox>
        </ScTodo>
      </ScTodolistBox>
    </ScTodosContainer>
  );
};

const ScTodosContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const ScTodolistBox = styled.ul`
  width: 50%;
`;

const ScTodo = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - 2.5rem);
  height: 3.125rem;
  padding: 0 1.25rem;
  margin-bottom: 0.938rem;
  border-radius: 30px;
  font-size: ${({ theme }) => theme.fontSizes.standard};
  box-shadow: 10px 5px 15px rgba(0, 0, 0, 0.3);

  &:hover {
    box-shadow: 10px 5px 15px #9198e5;
  }
`;

const ScTodoSettingsBox = styled.div`
  display: flex;
  align-items: center;
`;

const ScDeadline = styled.div`
  margin-right: 0.625rem;
  font-size: ${({ theme }) => theme.fontSizes.small};
  color: rgba(0, 0, 0, 0.5);
`;
