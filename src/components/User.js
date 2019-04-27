import React, { Component } from 'react'

export default class User extends Component {
  render() {
    return (
      <div>
         this is Data From Redux Store!
         <div>Name: {this.props.userData.name}</div>
         <div>Age: {this.props.userData.age}</div>
      </div>
    )
  }
}
