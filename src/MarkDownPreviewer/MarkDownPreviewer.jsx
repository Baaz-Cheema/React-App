import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { useState } from "react"
import './MarkDownPreviewer.css'

const markdownInput = `# Welcome to my React \`Markdown Previewer\`!

## Try to Write text here! all of it will be converted to valid JSX
### And here's some other cool stuff:

Heres some code, \`<div>hello</div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
console.log(hello)
function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\\\`\\\`' && lastLine == '\\\`\\\`\\\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
![pencil Logo](https://www.freeiconspng.com/uploads/diary-pencil-icon-27.png)

\`\`\`js
import React from 'react'
import ReactDOM from 'react-dom'
import ReactMarkdown from 'react-markdown'
import rehypeHighlight from 'rehype-highlight'

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>{'# Your markdown here'}</ReactMarkdown>,
  document.querySelector('#content')
\`\`\``;

export default function MarkDownPreviewer() {
  const [text, updateText] = useState(markdownInput)
  const updateval = (e) => {
    updateText(e.target.value)
  }
  return (
    <>
      <nav className="markdownNav">
        <h3 id='react-heading'>Markdown Demo</h3>
        <h1 id='editor-heading'>Editor <img src="https://www.freeiconspng.com/uploads/diary-pencil-icon-27.png" /></h1>
        <h1>Mark Down <span>Preview </span></h1>
      </nav>
      <header>
        <textarea name="" id="editor" cols="80" rows="10" onChange={updateval} value={text}></textarea>
        <div id='preview'><ReactMarkdown children={text} />
        </div>
      </header>
    </>
  )
}