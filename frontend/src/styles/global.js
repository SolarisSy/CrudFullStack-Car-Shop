import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: auto;
    height: auto;
    display: flex;
    justify-content: center;
    background-color: #f2f2f2;
  }
`;

export default Global;
