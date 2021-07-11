import React from 'react'
import lines from './lines'
import './App.css'

function App() {
  const [quote, setQuote] = React.useState(
    lines[Math.floor(Math.random() * lines.length)]
  )
  const hexColor = '#' + Math.floor(Math.random() * 16777216).toString(16)
  const [mycolor, setMyColor] = React.useState(hexColor)

  React.useEffect(() => {
    document.body.style.backgroundColor = mycolor
  }, [quote])

  function Change() {
    setQuote(lines[Math.floor(Math.random() * lines.length)])
    setMyColor('#' + Math.floor(Math.random() * 16777216).toString(16))
  }

  return (
    <div>
      <h1>Random Quote Generator</h1>
      <section
        style={{ backgroundColor: 'white', color: mycolor }}
        id='quote-box'
      >
        <div className='quote'>
          <i className='fas fa-quote-left'></i>
          <p id='text'> {quote.text} </p>
          <i className='fas fa-quote-right'></i>

          <strong>
            <h2 id='author'>- {quote.author} </h2>
          </strong>
        </div>

        <div className='links'>
          <a
            title='Tweet This'
            href='twitter.com/intent/tweet'
            target='_blank'
            id='tweet-quote'
          >
            <span
              style={{ color: mycolor }}
              className='fa fa-twitter fa-2x'
            ></span>
          </a>

          <a title='Mail' href='mailto:saurabhv749@gmail.com' target='_blank'>
            <span
              id='link'
              style={{ color: mycolor }}
              className='fa fa-envelope fa-2x'
            ></span>
          </a>
          <button title='new quote' id='new-quote' onClick={() => Change()}>
            New Quote
          </button>
        </div>
      </section>
    </div>
  )
}

export default App
