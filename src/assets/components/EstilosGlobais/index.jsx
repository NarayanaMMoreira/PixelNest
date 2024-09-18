import { createGlobalStyle } from "styled-components"

const EstilosGlobais = createGlobalStyle`
//Padrão de Estilo

  :root {
    --primary-color: #36009C;
    --secondary-color: #F1E0FF;
    --tertiary-color: #00C2BA;
    --font-color: #000000;
  }

  body {
    background-color: #FFFFFF;
    font-family: 'Poppins', sans-serif;
  }

  h1 {
    font-size: 60px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: var(--primary-color);
  }

  h2 {
    font-size: 40px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: var(--primary-color);
  }

  h3 {
    font-size: 30px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    color: var(--primary-color);
  }

  p {
    font-size: 18px;
    font-family: 'Poppins', sans-serif;
    font-weight: normal;
  }

  button {
    font-size: 28px;
    font-family: 'Poppins', sans-serif;
    font-weight: bold;
    padding: 16px 40px;
    border: none;
    background-color: var(--tertiary-color);
    color: #FFFFFF;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: var(--primary-color);
    }
  }
//Reset
html {
  line-height: 1.15; 
  -webkit-text-size-adjust: 100%; 
}
body {
  margin: 0;
  min-height: 100vh;
}
main {
  display: block;
}
h1 {
  font-size: 2em;
  margin: 0.67em 0;
}
hr {
  box-sizing: content-box; 
  height: 0; 
  overflow: visible; 
}
a {
  background-color: transparent;
}
abbr[title] {
  border-bottom: none; 
  text-decoration: underline; 
  text-decoration: underline dotted; 
}
b,
strong {
  font-weight: bolder;
}
code,
kbd,
samp {
  font-family: monospace, monospace; 
  font-size: 1em; 
}
small {
  font-size: 80%;
}
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
img {
  border-style: none;
}
button,
input,
optgroup,
select,
textarea {
  font-family: inherit; 
  font-size: 100%; 
  line-height: 1.15; 
  margin: 0; 
}
button,
input { 
  overflow: visible;
}
button,
select { 
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: none;
  padding: 0;
}
button:-moz-focusring,
[type="button"]:-moz-focusring,
[type="reset"]:-moz-focusring,
[type="submit"]:-moz-focusring {
  outline: 1px dotted ButtonText;
}
fieldset {
  padding: 0.35em 0.75em 0.625em;
}
legend {
  box-sizing: border-box; 
  color: inherit; 
  display: table; 
  max-width: 100%; 
  padding: 0; 
  white-space: normal; 
}
progress {
  vertical-align: baseline;
}
textarea {
  overflow: auto;
}
[type="checkbox"],
[type="radio"] {
  box-sizing: border-box; 
  padding: 0; 
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  -webkit-appearance: textfield; 
  outline-offset: -2px; 
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  -webkit-appearance: button; 
  font: inherit; 
}
details {
  display: block;
}
summary {
  display: list-item;
}
template {
  display: none;
}
[hidden] {
  display: none;
}
`
export default EstilosGlobais