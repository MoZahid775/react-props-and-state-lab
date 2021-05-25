import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  


//This is a call back that fetches all the pets
  onFindPetsClick =() => {
  
    fetch('/api/pets')
  .then((r) => r.json())
  .then((petsArray) => console.log(petsArray));

    
  }


 //this is a callback that changes the state of type: with a value
  onChangeType = (value) => {
    
   this.setState({
      filters: {...this.state.filters, type: value}

   })
  }


  render() {
    console.log(this.state.filters)
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick()}  />
            </div>
            <div className="twelve wide column">
              <PetBrowser />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
