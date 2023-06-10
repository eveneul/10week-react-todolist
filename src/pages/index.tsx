import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { isDarkAtom, todoState } from "../state/atoms";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Wrapper } from "../components/wrapper";
import { Box } from "../components/box";
import { motion } from "framer-motion";

const TodoList = () => {
  return (
    <>
      <Wrapper>
        <Box
          initial={{
            scale: 0,
          }}
          animate={{
            scale: 1,
            rotateZ: 360,
          }}
          transition={{
            type: "spring",
            damping: 10,
          }}
        />
        {/* <motion.div></motion.div> */}
      </Wrapper>
    </>
  );
};

export default TodoList;
