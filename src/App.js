import React from 'react'
import './css/App.css'
import Loadscreen from './components/Loadscreen'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { loading: true }
  }

  render() {
    if (this.state.loading === true) {
      return (
        <Loadscreen />
      )
    } else {
      return (
        <div></div>
      )
    }
  }
}

export default App