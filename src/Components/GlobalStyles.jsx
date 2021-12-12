import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
    box-sizing: border-box;
}

:root {
    --primary: red;
}

body {
    margin: 0;
    text-align: center;
}
`;
