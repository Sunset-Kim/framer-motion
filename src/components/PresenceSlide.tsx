import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";

const Container = styled.div`
  display: flex;
`;

const Slide = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 200px;
  height: 200px;
  background: transparent;
  margin: 50px;
`;

const Box = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  background: white;
  border-radius: 20px;
`;

const getArray = (row: number) => {
  return Array.from(Array(row), (v, k) => {
    return k;
  });
};

// variants
const boxVariants: Variants = {
  start: (isBack: boolean) => {
    return {
      x: isBack ? 50 : -50,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
      },
    };
  },
  end: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
    },
  },
  exit: (isBack: boolean) => {
    return {
      x: isBack ? -50 : 50,
      opacity: 0,
      scale: 0,
      transition: {
        duration: 1,
      },
    };
  },
};

const PresenceSlide = () => {
  const [visible, setVisible] = useState<number>(0);
  const [back, setBack] = useState(false);

  const nextVisible = () => {
    setBack(false);
    setVisible((prev) => (prev === 9 ? 0 : prev + 1));
  };
  const prevVisible = () => {
    setBack(true);
    setVisible((prev) => (prev === 9 ? 0 : prev + 1));
  };

  return (
    <Container>
      <button onClick={prevVisible}>prev</button>

      <Slide>
        <AnimatePresence custom={back} exitBeforeEnter>
          <Box
            custom={back}
            variants={boxVariants}
            initial="start"
            animate="end"
            exit="exit"
            key={visible}
          >
            {visible}
          </Box>
        </AnimatePresence>
      </Slide>

      <button onClick={nextVisible}>next</button>
    </Container>
  );
};

export default PresenceSlide;
