import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
        font-family: "Spoqa Han Sans";
        font-display: swap;
        letter-spacing: -0.03rem;
    }
    body {
        width: 100%;
        height: 100%;

        margin: 0;
        padding: 0;

        background: #131416;

        word-break: keep-all;
        color: #fff;
    }
    p, h1, h2, h3, h4, h5{
        margin: 0;
        padding: 0;
    }
    input{
        font-family: "Spoqa Han Sans";
        border: none;
        outline: none;
        background: transparent;

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        :-webkit-autofill,
        :-webkit-autofill:hover, 
        :-webkit-autofill:focus, 
        :-webkit-autofill:active{
            -webkit-background-clip: text;
            -webkit-text-fill-color: #ffffff;
            transition: background-color 5000s ease-in-out 0s;
            box-shadow: inset 0 0 20px 20px #23232329;
        }
    }
    ul{
        margin-block-start: 0;
        margin-inline-start: 0;
        padding-inline-start: 0;
        margin-block-end: 0;
    }
    li{
        list-style: none;
    }
    button{
        font-family: "Spoqa Han Sans";
        border: none;
        outline: none;
    }
    :root{
        --gradient: radial-gradient(300.02% 130.63% at 164.62% 165.58%, rgba(84, 100, 242, 0.9) 0%, rgba(52, 62, 135, 0) 100%) #131416;
    }

    .click-enabler{
        width: 100%;
        pointer-events: auto;
    }

    a{
        text-decoration: none;
    }
`;

export default GlobalStyle;
