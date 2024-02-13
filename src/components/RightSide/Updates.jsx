import React from 'react'
import { UpdatesData } from '../../Data/Data';
import "./style.css";

function Updates() {
  return (
    <div className='updates'>
      {
        UpdatesData?.map((elem) => {
          return (
            <div className="update">
              <img src={elem.img} alt="" />
              <div className="noti" >
                <div style={{ marginBottom: "0.5rem" }}>
                  <span>{elem.name}</span>
                  <span> {elem.noti}</span>
                </div>
              </div>
              <div>
                <span>{elem.time}</span>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Updates
