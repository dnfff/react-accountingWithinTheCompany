import React from 'react'
import { useState } from 'react'
import "./Cart.css"

function OneCard({data, vazhnost, oborudovanie, soobshenie, otvetstvenni}) {

  const [color, setColor] = useState(false);

  return (
    <div onClick={() => setColor(!color)} className={` cart1 ${color ? "touch" : ""}`}>
        <div className='cart1__left'>
            <p>Дата</p>
            <p>Важность</p>
            <p>Оборудование</p>
            <p>Сообщение</p>
        </div>
        <div className='cart1__center'>
            <p>{data}</p>
            <p>{vazhnost}</p>
            <p>{oborudovanie}</p>
            <p>{soobshenie}</p>
        </div>
        <div className='cart1__right'>
            <div className='userPhoto'></div>
            <p>{otvetstvenni}</p>
        </div>
    </div>
  )
}

export default OneCard