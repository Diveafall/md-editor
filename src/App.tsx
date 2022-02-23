import React from "react";
import logo from "./logo.svg";
import "./App.css";
import MarkdownEditor from "./md-editor";
import { Container, createTheme, ThemeProvider } from "@material-ui/core";

const theme = createTheme();

// Did you know you can use tildes instead of backticks for code in markdown? ✨
const markdown = `
## Title
---

My favorite search engine is [Duck Duck Go](https://duckduckgo.com).

![The San Juan Mountains are beautiful!](https://images.unsplash.com/photo-1645420526417-dcdf13a43c3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80 "San Juan Mountains")

> Dorothy followed her through many of the beautiful rooms in her castle.

Here is some JavaScript code \`console.log\`:

~~~js
console.log('It works!')
~~~
~~~python
a = int(5)
~~~
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <MarkdownEditor children={markdown} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
