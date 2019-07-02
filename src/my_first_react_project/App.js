import React, { Component } from 'react';
import data from './data'
import Person from './Person'
import './App.css';

class App extends Component {
  render() {
    const employee = data.map(
      item => <Person key={item.id} img={`https://randomuser.me/api/portraits/thumb/men/${item.img}.jpg`} name={item.name} job={item.job}>
        Lorem ipsum dolor sit amet, eos an mentitum ponderum, id sale praesent eam. Homero adipiscing deterruisset et mel. No vim pertinax honestatis, ut est malorum ancillae pertinacia, mei cibo electram in. Tota melius suavitate at vel, te nec posse elitr antiopam. Cum no meliore recusabo scribentur, equidem maluisset neglegentur has ei.
      </Person>
    )

    return (
      <div>
        {employee}
      </div>
    )
  }
}

export default App
