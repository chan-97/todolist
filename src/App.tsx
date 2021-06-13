import React, { FC, useState, ChangeEvent } from "react";
import {
  TodoListHeader,
  TodoListInputsContainer,
  TodosContainer,
} from "./components";
import styled from "styled-components";

interface ITask {
  taskName: string;
  deadline: number;
}

export const App: FC = () => {
  const [toggleInputs, setToggleInputs] = useState<boolean>(false);
  const [task, setTask] = useState<ITask>({
    taskName: "",
    deadline: 0,
  });
  const [todoList, setTodoList] = useState<ITask[]>([]);

  const handleInputs = (): void => setToggleInputs(!toggleInputs);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "taskName") {
      setTask({ ...task, taskName: e.target.value });
    } else {
      setTask({ ...task, deadline: Number(e.target.value) });
    }
  };

  const addTodo = (): void => {
    if (task.taskName !== "") {
      setTodoList([...todoList, task]);
      setTask({ taskName: "", deadline: 0 });
    } else {
      alert("task를 작성하세요");
    }
  };

  return (
    <>
      <TodoListHeader />
      <ScTodoListBody>
        {toggleInputs && (
          <TodoListInputsContainer
            handleChange={handleChange}
            addTodo={addTodo}
            task={task}
          />
        )}
        <TodosContainer handleInputs={handleInputs} todoList={todoList} />
      </ScTodoListBody>
    </>
  );
};

const ScTodoListBody = styled.section`
  max-width: 1256px;
  margin: 0 auto;
  padding: 0 3.75rem;
`;
