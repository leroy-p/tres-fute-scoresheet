import { createGlobalStyle } from "styled-components"
import { ITheme } from "./context/theme/hook"

const GlobalStyle = createGlobalStyle<{ theme: ITheme }>`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  background-color: #444444;
  font-size: 16px;
  min-height: 100vh;
  margin: 0;
  width: 100vw;
}

button {
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline:none;
}

input:focus {
  outline: none;
}

textarea:focus {
  outline: none;
}
`

export default GlobalStyle