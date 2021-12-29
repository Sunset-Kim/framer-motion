import React, { useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 50vw;
  gap: 10px;
  div:first-child,
  div:last-child {
    grid-column: span 2;
  }
`;

const Box = styled(motion.div)`
  background-color: rgba(255, 255, 255, 1);
  border-radius: 40px;
  width: 100%;
  height: 200px;
`;

const Overlay = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Final = () => {
  const [id, setId] = useState<string | null>();

  return (
    <Container>
      <Grid>
        {[1, 2, 3, 4].map((item) => (
          <Box
            key={item}
            layoutId={item + ""}
            onClick={() => setId(item.toString())}
          ></Box>
        ))}
      </Grid>
      <AnimatePresence>
        {id && (
          <Overlay
            onClick={() => setId(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Box
              layoutId={id}
              style={{
                width: 400,
                height: 200,
              }}
            ></Box>
          </Overlay>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Final;
