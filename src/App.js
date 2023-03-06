import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setMonsters(data));
  }, []);

  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField)
    );
    setFilterMonsters(filteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchString = e.target.value.toLowerCase();
    setSearchField(searchString);
  };

  return (
    <div>
      <div className='App'>
        <h1 className='title'>Monster Rolodex</h1>
        <SearchBox
          placeHolder='search monster'
          className='search-box'
          onChangeHandler={onSearchChange}
        />
        <CardList
          monsters={filteredMonsters}
          className='card-container card-container:hover'
        />
      </div>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then(
//         (data) =>
//           this.setState(() => {
//             return { monsters: data, searchName: "" };
//           }),
//         () => console.log(this.state)
//       );
//   }

//   onSearchChange = (event) => {
//     const searchName = event.target.value.toLowerCase();
//     this.setState(() => {
//       return {
//         searchName,
//       };
//     });
//   };

//   render() {
//     const { monsters, searchName } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchName);
//     });
//     return (
//       <div className='App'>
//         <h1 className='title'>Monster Rolodex</h1>
// <SearchBox
//   placeHolder='search monster'
//   className='search-box'
//   onChangeHandler={onSearchChange}
// />
// <CardList
//   monsters={filteredMonsters}
//   className='card-container card-container:hover'
// />
//       </div>
//     );
//   }
// }

export default App;
