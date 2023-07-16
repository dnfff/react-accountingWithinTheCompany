import React, { useState } from 'react'

import "./Header.css"

import cardMain from "../../../main"

import HeaderInput from "./HeaderInput"


function Header({ sost, useSost, sost2, useSost2 }) {

  return (
    <div className='header'>
        <div className='header__leftButtons'>
          <div className='left'>
            <a onClick={() => {useSost(true) , useSost2(false)}} className={`header__a1 ${ sost ? "bgcolor" : '' }`}>Таблица</a>
          </div>
          <div className='line'></div>
          <div className='right'>
            <a onClick={() => {useSost2(true) , useSost(false)} } className={`header__a2 ${ sost2 ? "bgcolor" : '' }`}>Карточки</a>
          </div>
        </div>
        <HeaderInput />
    </div>
  )
}

export default Header
