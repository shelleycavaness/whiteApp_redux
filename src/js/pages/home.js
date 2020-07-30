import React, { useState, useEffect } from 'react'

import { Link } from 'react-router-dom'
import api from '../utils/api'
import Books from "../components/books"



const Home = (props) => {

    return (
       
      <div>
        <Books/>
      </div>
    )
}

export default Home;