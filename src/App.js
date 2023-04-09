import React from 'react'
import './css/App.css'
import Loadscreen from './components/Loadscreen'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }

    this.setLoading = this.setLoading.bind(this)
  }

  setLoading() {
    this.setState({ loading: false })
  }

  render() {
    if (this.state.loading === true) {
      setTimeout(() => { this.setLoading() }, 12000)
      return (
        <div className='background'>
          <div className='outline'>
            <Loadscreen />
          </div>
        </div>

      )
    } else {
      return (
        <div className='background'>
          <div className='outline'></div>
        </div>
      )
    }
  }
}

export default App