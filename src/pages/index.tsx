import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { isDarkAtom, todoState } from "../state/atoms";
import { useState } from "react";
import { useForm } from "react-hook-form";

const TodoList = () => {
  //register: onChange, onBlur 함수를 대신 해 줌
  //watch: form의 입력값들의 변화를 관찰할 수 있게 해 주는 함수
  //handleSubmit: 밸리데이션 담당
  //handleSubmit(데이터가 유효할 때 함수, 데이터가 유효하지 않을 때 호출 함수)
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // const todoList = useRecoilValue(todoState);
  // const modifyTodo = useSetRecoilState(todoState);
  const [todo, setTodo] = useRecoilState(todoState);

  const handleValid = ({ todo }: any) => {
    setTodo((prev) => [
      { text: todo, id: Date.now(), category: "TO_DO" },
      ...prev,
    ]);
  };

  console.log(todo);
  return (
    <>
      <Header>
        <h1>내가 가고 싶은 나라들</h1>
      </Header>
      <Container>
        <div className="form-area">
          <form onSubmit={handleSubmit(handleValid)}>
            <input
              {...register("todo", { required: "필수 입력" })}
              type="text"
              placeholder="write to do"
            />
            <button>Add</button>
          </form>
          <span>{errors.todo?.type === "required" && "입력"}</span>
        </div>
        <div>
          <ul className="todo-list">
            {todo.map((item) => (
              <li key={item.id}>{item.text}</li>
            ))}
          </ul>
        </div>
      </Container>
    </>
  );
};

export default TodoList;
