import React from 'react'

const LineItems = ({cards, deleteCard}) => {
  return (
      <div style={{ marginTop: "20px" }}>
        
        {cards.map((card) => (
          <div
            key={card.id}
            style={{
              border: "1px solid #ccc",
              padding: "16px",
              marginBottom: "10px",
              borderRadius: "8px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <h3>{card.title}</h3>
              <p>This is a dynamic card.</p>
            </div>

            <button
              onClick={() => deleteCard(card.id)}
              style={{
                background: "red",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Delete
            </button>
          </div>
        ))}
      </div>      
  )
}

export default LineItems
