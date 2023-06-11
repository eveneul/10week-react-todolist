import { motion } from "framer-motion";
import { styled } from "styled-components";

export const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 30px;
`;

export const Circle = styled(motion.div)`
  background-color: #fff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  place-self: center;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.1);
`;
