import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, todoState } from "../state/atoms";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "../components/wrapper";
import { Box, Circle } from "../components/box";
import { motion } from "framer-motion";

const TodoList = () => {
  const boxAnimation = {
    start: {
      opacity: 0,
      scale: 0.5,
    },
    end: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "string",
        duration: 0.5,
        bounce: 0.5,
        delayChildren: 0.5,
        staggerChildren: 0.1,
      },
    },
  };

  const circleAnimation = {
    start: {
      opacity: 0,
      y: 10,
    },
    end: {
      opacity: 1,
      y: 0,
      transition: {
        type: "string",
        bounce: 0.5,
      },
    },
  };

  return (
    <>
      <Wrapper>
        <Box variants={boxAnimation} initial="start" animate="end">
          <Circle variants={circleAnimation} />
          <Circle variants={circleAnimation} />
          <Circle variants={circleAnimation} />
          <Circle variants={circleAnimation} />
        </Box>
      </Wrapper>
    </>
  );
};

export default TodoList;
