import { Component } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/serach-box/search-box.component";

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
            <div className="App">
                <SearchBox placeholder="search monster" className="search-box" onChangeHandler={onSearchChange} />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
