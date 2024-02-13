import React, { useState } from 'react';
import "./style.css"
import logo from "../../imgs/logo.png";
import { UilBars } from "@iconscout/react-unicons"
import { SidebarData } from '../../Data/Data';
import { UilSignOutAlt } from "@iconscout/react-unicons"
import { motion } from "framer-motion";

function Sidebar() {
  const [selected, setSelected] = useState(0)
  const [expanded, setExpanded] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
        <UilBars />
      </div>
      <motion.div className="sidebar"
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className="logo">
          <img src={logo} alt="logo" />
          <span>
            Sh<span>o</span>ps
          </span>
        </div>

        {/* menu */}
        <div className="menu">
          {
            SidebarData?.map((elem, index) => {
              return (
                <div className={selected === index ? "menuItem active" : "menuItem"}
                  key={index} onClick={() => setSelected(index)}
                >
                  <div>
                    <elem.icon />
                  </div>
                  <span>{elem?.heading}</span>
                </div>
              )
            })
          }
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default Sidebar
