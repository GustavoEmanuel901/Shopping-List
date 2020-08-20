import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        font: 400 14px Roboto, sans-serif;
        background-color: #B6DCFE;
        -webkit-font-smoothing: antialiased;

        height: 100vh;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    body,
    input,
    button,
    textarea {
        font: 500 16px Roboto;
        color: #000;
    }

    h1 {
        text-align: center;
        padding: 20px 0;
    }

    .button {
        width: 100%;
        height: 60px;
        background: #81F7E5;
        border: 0;
        border-radius: 20px;
        color: #444;
        font-weight: 700;
        margin-top: 16px;
        display: inline-block;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        line-height: 60px;
        cursor: pointer;
        transition: 0.2s;
    }

    .button:hover {
        filter: brightness(90%);
        border-radius: 8px;
    }

    ul {
        list-style: none;
    }
    

`