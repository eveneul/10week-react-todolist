import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, todoState } from "../state/atoms";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "../components/wrapper";
import { BiggerBox, Box, Circle } from "../components/box";
import { motion } from "framer-motion";

const TodoList = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

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
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragConstraints={biggerBoxRef}
            variants={boxAnimation}
            whileHover="hover"
            whileTap="click"
            whileDrag="drag"
          ></Box>
        </BiggerBox>
      </Wrapper>
    </>
  );
};

export default TodoList;
