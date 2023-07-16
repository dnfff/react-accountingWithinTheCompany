import React, { useState, useEffect } from 'react'

import OneTable from "./OneTable.jsx"

import cardMain from "../../../main.js"


function Table() {

  return (
    <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Важность</th>
                    <th>Оборудование</th>
                    <th>Сообщение</th>
                    <th>Ответственный</th>
                </tr>
            </thead>
            {
                cardMain.map((it) => (<OneTable {...it} key={it.soobshenie} />))
            }
        </table>
    </div>
  )
}

export default Table