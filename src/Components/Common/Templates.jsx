import React, {useState} from 'react'
import { data } from 'react-router-dom';


  const cardData = [
    { id: 'template1', title: 'Template 1', img: 'https://www.smartsheet.com/sites/default/files/IC-Blank-Invoice-Template_WORD.png' },
    { id: 'template2', title: 'Template 2', img: 'https://i.etsystatic.com/32407752/r/il/f2b633/3418650954/il_fullxfull.3418650954_1geo.jpg' },
    { id: 'template3', title: 'Template 3', img: 'https://worksheets.clipart-library.com/images2/print-invoice-online/print-invoice-online-1.jpg' },
  ];


const Templates = (props) => {

  return (
                  <div className='row'>
                          {cardData.map((card) => (
                            <div className="col-md-4" key={card.id}>
                              <div 
                                // 2. Conditionally apply a "border-primary" or custom style if selected
                                className={`card h-100 shadow-sm ${props.data.template === card.id ? 'border-primary border-3' : ''}`}
                                onClick={() => {props.setData({...props.data, template: card.id})}}
                                style={{ cursor: 'pointer', transition: '0.3s' }}
                              >
                                <div className="card-body text-center">
                                  <b className="card-title">{card.title}</b>
                                  <div className="form-check d-flex justify-content-center">
                                    <input 
                                      className="form-check-input d-none" 
                                      type="radio" 
                                      checked={props.data.template === card.id} 
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
