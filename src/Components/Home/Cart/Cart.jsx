import OneCard from "./OneCard.jsx"

import cardMain from "../../../main.js"
import { useEffect, useState } from "react"
import Footer from "../Footer/Footer.jsx"

function Cart() {

  return (
    <div className='Cart'>
        {
            cardMain.map((ind) => ( 
              <OneCard {...ind} key={ind.soobshenie} />
            ))
        }
        {/* <Footer /> */}
    </div>
  )
}

export default Cart