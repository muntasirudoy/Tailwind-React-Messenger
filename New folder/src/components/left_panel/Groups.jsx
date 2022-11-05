import React from 'react'
import Person_Card from './Person_Card'
import { motion } from 'framer-motion'
import { container, item } from './helper'
const Groups = () => {
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
          <Person_Card name="Shakib Khan" msg="Ki bubly?" />
        </motion.li>
      ))}
    </motion.ul>
  )
}

export default Groups
