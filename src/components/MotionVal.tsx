import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import styled from "styled-components";

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  border-radius: 10px;
`;

const ScrollWrapper = styled.div`
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MotionVal = () => {
  const y = useMotionValue(0);
  const boxY = useMotionValue(0);
  const scale = useTransform(boxY, [-800, 0, 800], [2, 1, 0]);
  const rotate = useTransform(boxY, [-800, 800], [-360, 360]);
  const gradient = useTransform(
    boxY,
    [-800, 0, 800],
    ["rgb(255, 182, 57)", "rgb(114, 250, 216)", "rgb(114, 125, 250)"]
  );

  useEffect(() => {
    // boxY.onChange(() => console.log(boxY));
    // scale.onChange(() => console.log("scale:", scale.get()));
    // rotate.onChange(() => console.log("rotate", rotate.get()));
    return () => {};
  }, [y, boxY]);

  // 스크롤
  const { scrollY, scrollYProgress } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => console.log("스크롤y : ", scrollYProgress.get()));
  }, [scrollY, scrollYProgress]);

  return (
    <ScrollWrapper>
      {/* basic motion value : 재렌더링이 일어나지 않음 */}
      {/* <Box drag="y" style={{ y: boxY }}></Box> */}

      {/* interfolation */}
      {/* <Box style={{ y, scale }} drag="y" dragSnapToOrigin></Box> */}

      {/* motion value */}
      <Box
        style={{
          y: boxY,
          scale: scrollYProgress,
          background: gradient,
          rotateZ: rotate,
        }}
      ></Box>
    </ScrollWrapper>
  );
};

export default MotionVal;
