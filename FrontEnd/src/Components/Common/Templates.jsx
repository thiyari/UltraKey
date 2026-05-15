import React, {useEffect, useState} from 'react'
import { data } from 'react-router-dom';
import template1 from "../../assets/template1.jpg";
import template2 from "../../assets/template2.jpg";


  const cardData = [
    { id: 'template1', title: 'Template 1', img: template1},
    { id: 'template2', title: 'Template 2', img: template2},
    { id: 'template3', title: 'Template 3', img: 'https://i.etsystatic.com/32407752/r/il/f2b633/3418650954/il_fullxfull.3418650954_1geo.jpg'},
  ];

const Templates = (props) => {
  const [selectedId, setSelectedId] = useState(); 
  useEffect(()=>{
    props.getTemplateId(selectedId);
  },[selectedId])

  return (
                  <div className='row'>
                          {cardData.map((card) => (
                            <div className="col-md-4" key={card.id}>
                              <div 
                                // 2. Conditionally apply a "border-primary" or custom style if selected
                                className={`card h-100 shadow-sm ${selectedId === card.id ? 'border-primary border-3' : ''}`}
                                onClick={() => {setSelectedId(card.id)}}
                                style={{ cursor: 'pointer', transition: '0.3s' }}
                              >
                                <div className="card-body text-center">
                                  <b className="card-title">{card.title}</b>
                                  <div className="form-check d-flex justify-content-center">
                                    <input 
                                      className="form-check-input d-none" 
                                      type="radio" 
                                      checked={selectedId === card.id} 
                                      readOnly 
                                    />
                                  </div>
                                  <img src={card.img} className="card-img-top" alt={card.title} />
                                </div>
                              </div>
                            </div>
                          ))}
                  </div>

  )
}

export default Templates
