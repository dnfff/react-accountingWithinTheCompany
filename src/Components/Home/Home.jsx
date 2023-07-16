import React from 'react'
import { useState } from 'react'

import "./Home.css"

import Header from "./Header/Header"
import Table from './Table/Table'
import Footer from './Footer/Footer'
import Cart from './Cart/Cart'

function Home () {

  const [sost, useSost] = useState(true);
  const [sost2, useSost2] = useState(false);

  return (
    <div className='all'>
        <div className='all__body'>
            <Header sost={sost} useSost={useSost} sost2={sost2} useSost2={useSost2} />
            { 
                sost2 && (<Cart />)
            }   
            { 
                sost && (<Table />)
            }   
            <Footer/>
        </div>
    </div>
  )
}

export default Home