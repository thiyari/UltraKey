import React from 'react'

const Payments = ({cards, deleteCard}) => {
  return (
    <div>
      <div>
        {cards.map((card) => (
            <div className="card text rounded-0 mb-3" key={card.id}>
                <div className="card-header" align="left">
                    <b>Payment {card.number}</b>
                </div>
                <div className="card-body" align="right">
                    <button className="btn btn-outline-danger rounded-0" onClick={() => deleteCard(card.id)}>Remove Item</button>
                </div>
            </div>          
        ))}
      </div>      
    </div>
  )
}

export default Payments
