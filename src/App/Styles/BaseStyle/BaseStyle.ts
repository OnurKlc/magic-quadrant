import { createGlobalStyle } from 'styled-components'

export const BaseStyle = createGlobalStyle`
  :root {
    --view-height: 100vh;
  }

  html {
    -webkit-text-size-adjust: 100%;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
  
  #app {
    display: flex;
    justify-content: center;
    margin-top: 120px;
    
    & > div {
      margin: 0 20px;
    }
  }
  
  button {
    cursor: pointer;
  }
`