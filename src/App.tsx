import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyle from "./style/CreateGlobalStyle";
import Variants from "./components/Variants";

const Container = styled.div`
  background: salmon;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        {/* 0. framer moiton */}
        <Variants />
      </Container>
    </>
  );
}

export default App;
