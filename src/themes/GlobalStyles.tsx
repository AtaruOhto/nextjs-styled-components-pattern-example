import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *, ::before, ::after {
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
  }

  body {
    margin: 0;
  }
  
  main {
    display: block;
  }
    
  p,
  table,
  blockquote,
  address,
  pre,
  iframe,
  form,
  figure,
  dl,
  h1, 
  h2,
  h3,
  h4,
  h5,
  h6  {
    margin: 0;
  }  
`
