import React from 'react'
import '../css/Background.css'
import Book1 from './Book1.js'
import Book2 from './Book2.js'
import Book3 from './Book3.js'

class Background extends React.Component {
  render() {
    return (
      <div className='container'>
        <div className='bookshelf'>
          <div className='shelf'>
            <Book1 color='brown' margin='1px' />
            <Book1 color='green' margin='8px' />
            <Book1 color='blue' margin='15px' />

            <Book2 />
            <Book3 />
          </div>
        </div>
      </div>
    )
  }
}

export default Background
