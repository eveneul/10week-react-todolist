import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, todoState } from "../state/atoms";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "../components/wrapper";
import { Box, Circle } from "../components/box";
import { motion } from "framer-motion";

const TodoList = () => {
  const boxAnimation = {
    hover: {
      scale: 1.5,
      rotateZ: 90,
    },
    click: {
      borderRadius: "100px",
      scale: 1,
    },
    drag: {
      backgroundColor: "rgba(0, 0, 0, 0.4)",
    },
  };

  return (
    <>
      <Wrapper>
        <Box
          drag
          variants={boxAnimation}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        ></Box>
      </Wrapper>
    </>
  );
};

export default TodoList;
