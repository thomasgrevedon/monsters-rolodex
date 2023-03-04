import { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          name: "name1",
        },
        {
          name: "name2",
        },
        {
          name: "name3",
        },
        {
          name: "name4",
        },
      ],
    };
  }

  render() {
    return (
      <div className='App'>
        {this.state.monsters.map((monster) => {
          return <h1>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
