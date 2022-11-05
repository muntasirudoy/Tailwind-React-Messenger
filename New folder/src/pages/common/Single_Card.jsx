import React from 'react'
import person from '../../assets/person.png'
import LoadingButton from '../../components/common/LoadingButton'
const Single_Card = ({ data, btn1, btn2,action,sendRequestLoading,actionTwo }) => {

  return (
    <div className="single_card">
      <img src={person} className="single_card__img" />
      <h3 className="single_card__title"> {data.username || data.request_sender_name}</h3>
      <div className="w-full px-2">
        <button className="card_cyan__btn" onClick={()=>action(data)}>{ btn1}</button>
    
        <button className="card_grey__btn" onClick={()=>actionTwo(data)}>{btn2}</button>
      </div>
    </div>
  )
}

export default Single_Card
