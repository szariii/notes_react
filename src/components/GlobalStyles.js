import { createGlobalStyle } from "styled-components";

const GlobalStyleComponent = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        font-family: 'Open Sans', sans-serif;
        background-color: #7da9f0;
    }

    button{
        font-family: 'Open Sans', sans-serif;
        width: 10rem;
        height: 2.5rem;
    }

    input{
        font-family: 'Open Sans', sans-serif;
    }

    a{
        text-decoration: none;
        color: black;
    }

`;

export default GlobalStyleComponent;
