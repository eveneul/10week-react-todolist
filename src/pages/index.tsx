import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, todoState } from "../state/atoms";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "../components/wrapper";
import { BiggerBox, Box, Circle } from "../components/box";
import { motion, useMotionValue } from "framer-motion";

const TodoList = () => {
  const x = useMotionValue(0);
  console.log(x);
  return (
    <>
      <Wrapper>
        <button onClick={() => x.set(200)}>click me</button>
        <Box style={{ x }}></Box>
      </Wrapper>
    </>
  );
};

export default TodoList;
