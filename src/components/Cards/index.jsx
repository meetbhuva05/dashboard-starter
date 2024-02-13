import React from 'react'
import { cardsData } from '../../Data/Data'
import Card from '../Card'
import "./style.css"

function Cards() {
  return (
    <div className='cards'>
      {
        cardsData?.map((card, index) => {
          return (
            <div className="parentContainer" key={index}>
              <Card
                title={card.title}
                color={card.colors}
                barValue={card.barValue}
                value={card.value}
                png={card.png}
                series={card.series}
              />
            </div>
          )
        })
      }
    </div>
  )
}

export default Cards
