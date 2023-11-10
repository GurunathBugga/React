import React, { Component } from 'react'
import File3 from './File3'

export default class Table3 extends Component {
    state= {
        name:"Matrical"
    }
  render() {
    return (
      <div>
       <center>
            <File3 name={this.state.name}/>
        </center>
      </div>
    )
  }
}
