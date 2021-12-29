import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, Variants } from "framer-motion";

const Container = styled.div``;

const Box = styled(motion.div)`
  width: 200px;
  height: 100px;
  border-radius: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.3);
  background: white;
`;

const boxVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    rotateZ: 360,
  },
  leaving: {
    opacity: 0,
    scale: 0,
    y: 20,
  },
};

const Presence = () => {
  const [showing, setShowing] = useState(false);

  return (
    <Container>
      <AnimatePresence>
        {showing && (
          <Box
            variants={boxVariants}
            initial="intial"
            animate="visible"
            exit="leaving"
          />
        )}
      </AnimatePresence>
      <button onClick={() => setShowing((prev) => !prev)}>toggle Open</button>
    </Container>
  );
};

export default Presence;
