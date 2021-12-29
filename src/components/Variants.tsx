import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50px;
`;

const Circle = styled(motion.div)`
  background: white;
  height: 70px;
  width: 70px;
  place-self: center;
  border-radius: 100px;
`;

const boxVariants = {
  start: {
    scale: 0,
  },

  end: {
    scale: 1,
    transition: {
      type: "tween",
      bounce: 0.8,
      duration: 2,
      delayChildren: 2,
      staggerChildren: 0.5,
    },
  },
};

const circleVariants = {
  start: {
    scale: 0,
    opacity: 0,
  },
  end: {
    scale: 1.2,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.8,
    },
  },
};

const Variants = () => {
  return (
    <>
      <Box variants={boxVariants} initial="start" animate="end">
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
        <Circle variants={circleVariants} />
      </Box>
    </>
  );
};

export default Variants;
