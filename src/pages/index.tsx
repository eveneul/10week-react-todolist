import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, todoState } from "../state/atoms";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "../components/wrapper";
import { Box, Circle } from "../components/box";
import { motion } from "framer-motion";

const TodoList = () => {
  const boxAnimation = {};

  return (
    <>
      <Wrapper>
        <Box
          whileHover={{
            scale: 1.5,
            rotateZ: 90,
          }}
          whileTap={{
            borderRadius: "100px",
            scale: 1,
          }}
        ></Box>
      </Wrapper>
    </>
  );
};

export default TodoList;
