import { Component } from "react";
import "./monster-card.styles.css";

const MonsterCard = ({ monster: { id, name, email } }) => {
  return (
    <div className='card-container'>
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <p>{name}</p>
      <p>{email}</p>
    </div>
  );
};

export default MonsterCard;
