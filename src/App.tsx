import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import GlobalStyle from "./style/CreateGlobalStyle";
import Variants from "./components/Variants";
import Gestures from "./components/Gestures";
import MotionVal from "./components/MotionVal";
import SvgAnimation from "./components/SvgAnimation";
import Presence from "./components/Presence";
import PresenceSlide from "./components/PresenceSlide";
import Layout from "./components/Layout";
import Final from "./components/Final";

const Container = styled.div`
  background: rgb(250, 128, 114);
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
        {/* <Variants /> */}

        {/* 1. Gestures */}
        {/* <Gestures /> */}

        {/* 2. Motion Value : 움직이는 양에따른 변화 */}
        {/* <MotionVal /> */}

        {/* 3. svg : ariBNB logo svg paht length animation */}
        {/* <SvgAnimation /> */}

        {/* 4. animtaion Presence */}
        {/* 4.1 basic */}
        {/* <Presence /> */}
        {/* 4.2 slide */}
        {/* <PresenceSlide /> */}

        {/* 5. layout  */}
        {/* <Layout /> */}

        {/* 6. final modal animation */}
        <Final />
      </Container>
    </>
  );
}

export default App;
