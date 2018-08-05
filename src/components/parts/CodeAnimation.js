import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { hopscotch } from 'react-syntax-highlighter/styles/hljs';

export default class CodeAnimation extends React.Component {
  codeString = `#include <iostream>
using std::cout;

auto main() -> int {

  int32_t x { 1 << 3 };
  cout << x;
}
`

  state = {
    codeText: '',
  }

  writeCode = (i) => {
    if (i >= this.codeString.length) 
      return;

    this.setState((prevState) => ({
      codeText: prevState.codeText + this.codeString[i]
    }));

    setTimeout(() => {
      this.writeCode(i + 1);
    }, 50)
      
  }

  componentDidMount() {
    this.writeCode(0);
  }

  render() {
    return (
        <SyntaxHighlighter
          className="tips-and-tricks__animation__code"
          language="cpp" style={hopscotch}
        >
          {this.state.codeText}
        </SyntaxHighlighter>
    );
  }
};