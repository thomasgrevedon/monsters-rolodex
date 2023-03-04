import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then(
        (data) =>
          this.setState(() => {
            return { monsters: data, searchName: "" };
          }),
        () => console.log(this.state)
      );
  }

  onSearchChange = (event) => {
    const searchName = event.target.value.toLowerCase();
    this.setState(() => {
      return {
        searchName,
      };
    });
  };

  render() {
    const { monsters, searchName } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchName);
    });
    return (
      <div className='App'>
        <input
          className='searchBox'
          type='search'
          placeholder='Search by name'
          onChange={(e) => {
            onSearchChange(e);
          }}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
