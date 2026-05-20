import React from 'react'

const LineItems = ({cards, deleteCard}) => {
  return (
      <div>
        {cards.map((card) => (
            <div className="card text rounded-0 mb-3" key={card.id}>
                <div className="card-header" align="left">
                    <b>Item {card.number}</b>
                </div>
                <div className="card-body" align="right">
                    <div className='row pl-2 p-2'>
                        <div className='col-sm-2 border'>Mani</div>
                        <div className='col-sm-4 border'>Mani</div>
                        <div className='col-sm-2 border'>Mani</div>
                        <div className='col-sm-2 border'>Mani</div>
                        <div className='col-sm-2 border'>Mani</div>
                    </div>
                    <button className="btn btn-outline-danger rounded-0" onClick={() => deleteCard(card.id)}>Remove Item</button>
                </div>
            </div>          
        ))}
      </div>      
  )
}

export default LineItems
