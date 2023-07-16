import React, { useState } from 'react'

import "./Header.css"

import cardMain from "../../../main"

function HeaderInput(onChange, placeholder) {

  const [val, seVal] = useState("");
  const [stat, setStat] = useState(false);

  const filterSoobsheni = cardMain.filter(soobsh => {
    return soobsh.soobshenie.toLowerCase().includes(val.toLowerCase())
  });

  return (
    <div className='header__rightButtons'>
        <input onClick={() => setStat(true)} onChange={(e) => seVal(e.target.value)} ></input>
        <button onClick={() => setStat(false)}className='header__btn'>Поиск</button>

        <div className='inputValue2'>
            {
                stat && (
                    filterSoobsheni.map((soobsh, index) => {
                        return (
                            <div className='inputValue' soobsh={soobsh} key={index.soobshenie}>{soobsh.soobshenie}</div>
                        )
                    })
                )
            }
        </div>
    </div>
  )
}

export default HeaderInput