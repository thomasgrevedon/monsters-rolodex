import "./card-list.styles.css";
import MonsterCard from "../monster-card/monster-car.component";

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <MonsterCard key={monster.id} monster={monster} />;
      })}
    </div>
  );
};

export default CardList;
