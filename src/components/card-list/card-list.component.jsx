import { Component } from "react";
import "./card-list.styles.css";
import MonsterCard from "../monster-card/monster-car.component";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div className='card-list'>
        {monsters.map((monster) => {
          return <MonsterCard key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

export default CardList;
