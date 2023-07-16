import React, { useState } from 'react'

import "./Footer.css"

import cardMain from "../../../main"

function Footer() {

  const [count, setCount] = useState(false)

  const length = cardMain.length;
  const arr = [];
  const total = Math.ceil(length / 12);

  for (let i = 1; i <= total; i++) {
    arr.push(i);
  }

  return (
    <div className='footer'>
        <div className='footer__buttons'>
            <a className='footer__a1'>
              {
                arr.map(todo => (
                  <div onClick={() => setCount(true)} className="aaa" key={todo.id}>{todo}</div>
                ))
              }
            </a>
        </div>
    </div>
  )
}

export default Footer