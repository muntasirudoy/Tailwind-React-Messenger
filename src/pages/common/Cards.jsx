import React from 'react'
import person from '../../assets/person.png'
import Single_Card from './Single_Card'
const Cards = ({ name, btn1, btn2 }) => {
  return (
    <div className="cards">
      <Single_Card name={name} btn1={btn1} btn2={btn2} />
    </div>
  )
}

export default Cards
