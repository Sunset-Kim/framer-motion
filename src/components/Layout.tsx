import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled.div``;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: white;
  border-radius: 20px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: rgb(0, 139, 130);
`;

const Layout = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClick = () => setClicked((prev) => !prev);
  return (
    <Container>
      <button onClick={toggleClick}>click</button>
      {/* 01. layout */}
      {/* <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        <Circle layout />
        <Circle layout />
      </Box> */}

      {/* 02. layout id  */}
      <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        {clicked && <Circle layoutId="circle" />}
      </Box>
      <Box
        style={{
          justifyContent: clicked ? "center" : "flex-start",
          alignItems: clicked ? "center" : "flex-start",
        }}
      >
        {!clicked && <Circle layoutId="circle" />}
      </Box>
    </Container>
  );
};

export default Layout;
