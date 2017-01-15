import React, { Component } from 'react'
import Alert from './Alert/Alert'
class Container extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}	
      </div>
      <Alert />
    )
  }
}

export default Container
