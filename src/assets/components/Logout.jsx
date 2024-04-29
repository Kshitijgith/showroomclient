import axios from 'axios';
import React from 'react'

const logout =async () => {

    await axios.post('https://kkshowroom.onrender.com/logout');

  return (
    <div>
      
    </div>
  )
}

export default logout
