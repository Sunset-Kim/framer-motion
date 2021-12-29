import React from "react";
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

body,html {
  height: 100%;
}

#root {
  height: 100%;
}
`;

export default GlobalStyle;
