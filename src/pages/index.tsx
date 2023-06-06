import { useSetRecoilState } from "recoil";
import { Container } from "../components/container";
import { Header } from "../components/header";
import { isDarkAtom } from "../state/atoms";
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

  const onValid = (data: any) => {
    console.log(data);
  };

  return (
    <>
      <Header>
        <h1>내가 가고 싶은 나라들</h1>
      </Header>
      <Container>
        <div className="form-area">
          <form onSubmit={handleSubmit(onValid)}>
            <input
              {...register("todo", { required: "필수 입력" })}
              type="text"
              placeholder="write to do"
            />
            <button>Add</button>
          </form>
          <span>{errors.todo?.type === "required" && "입력"}</span>
        </div>
      </Container>
    </>
  );
};

// const TodoList = () => {
//   const [value, setValue] = useState("");
//   const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
//     const {
//       currentTarget: { value },
//     } = event;

//     setValue(value);
//   };

//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     console.log(value);
//   };

//   return (
//     <>
//       <Header>
//         <h1>내가 가고 싶은 나라들</h1>
//       </Header>
//       <Container>
//         <div className="form-area">
//           <form onSubmit={handleSubmit}>
//             <input
//               value={value}
//               onChange={handleChange}
//               type="text"
//               placeholder="write to do"
//             />
//             <button>Add</button>
//           </form>
//         </div>
//       </Container>
//     </>
//   );
// };

export default TodoList;
