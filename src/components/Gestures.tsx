import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Box = styled(motion.div)`
  display: grid;
  box-sizing: border-box;
  grid-template-columns: repeat(2, 1fr);
  width: 200px;
  height: 200px;
  background: rgb(255, 255, 255);
  border-radius: 50px;
`;

const ConstraintBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(240, 248, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

const boxVariants = {
  hover: { scale: 1.5, rotateZ: "90deg" },
  tab: { borderRadius: "100px", scale: 1 },
  drag: { backgroundColor: "rgb(46,123,250)", transition: { duration: 2 } },
};

const Gestures = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* basic */}
      {/* <Box variants={boxVariants} whileHover="hover" whileTap="tab"></Box> */}

      {/* drag */}
      {/* <Box
        variants={boxVariants}
        whileHover="hover"
        whileDrag="drag"
        whileTap="tab"
      ></Box> */}

      {/* drag consit */}
      <ConstraintBox ref={biggerBoxRef}>
        <Box
          // x, y 값으로 방향제한
          drag
          // 마우스 force Elastic : 마우스에 탄성
          dragElastic={0.5}
          // 원래자리
          dragSnapToOrigin
          // 드래그 영역 제한 {top, bottom, left,right} or ref
          dragConstraints={biggerBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileDrag="drag"
          whileTap="tab"
        ></Box>
      </ConstraintBox>
    </>
  );
};

export default Gestures;
