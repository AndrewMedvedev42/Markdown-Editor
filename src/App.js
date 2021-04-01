import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
//ReactMarkdown is an imported component that renders the typed data


function App() {
  //Takes the data that was typed
  const [markdown, setMarkdown] = useState('# Hello World')

  return (
    <main>
      <section className='markdown'>
        <textarea className='input' value={markdown} onChange={(e) => setMarkdown(e.target.value)}></textarea>
        <article className='result'>
          {/* ReactMarkdown is an imported component that renders the typed data */}
          <ReactMarkdown>{markdown}</ReactMarkdown> 
        </article>
      </section>
    </main>
  )
}

export default App
