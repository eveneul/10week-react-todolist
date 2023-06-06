import { useSetRecoilState } from "recoil";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { isDarkAtom } from "../state/atoms";
import { useState } from "react";

const TodoList = () => {
  const [value, setValue] = useState("");
  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;

    setValue(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(value);
  };

  return (
    <>
      <Header>
        <h1>내가 가고 싶은 나라들</h1>
      </Header>
      <Container>
        <div className="form-area">
          <form onSubmit={handleSubmit}>
            <input
              value={value}
              onChange={handleChange}
              type="text"
              placeholder="write to do"
            />
            <button>Add</button>
          </form>
        </div>
      </Container>
    </>
  );
};

export default TodoList;
