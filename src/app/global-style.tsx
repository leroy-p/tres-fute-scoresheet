import { createGlobalStyle } from 'styled-components'
import { ITheme } from './context/theme/hook'

import shortStack from '../assets/fonts/EduNSWACTFoundation-Bold.ttf'

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
    @font-face {
      font-family: "ShortStack";
      src: url("${shortStack}");
      font-style: normal;
    }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #444444;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 16px;
    min-height: 100vh;
    margin: 0;
    width: 100vw;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-weight: bold;
    outline:none;
  }

  input:focus {
    outline: none;
  }

  textarea:focus {
    outline: none;
  }

  a, button, p, div, h1, h2, h3, h4, h5, h6, span {
    font-family: 'ShortStack', sans-serif;
  }
`

export default GlobalStyle
