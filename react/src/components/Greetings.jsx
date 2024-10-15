import React from 'react'

const Greetings = (props) => {
  return props.timeOfDay === 'morning' ? 'Good Morning' : 'Good Evening';
}

export default Greetings
