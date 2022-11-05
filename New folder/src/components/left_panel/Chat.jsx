import React from 'react'
import Person_Card from './Person_Card'
import { motion } from 'framer-motion'
import { container, item } from './helper'
const Chat = () => {
  return (
    <motion.ul
      className="container"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {/* number of people card */}
      {[0, 1, 2, 3].map((index) => (
        <motion.li key={index} className="item" variants={item}>
          <Person_Card ids={index} name="Hero Alam" msg="Ki obostha tmr" />
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default Chat
