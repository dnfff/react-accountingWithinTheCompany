import React from 'react'
import { useState, useEffect } from 'react';

import cardMain from "../../../main"

import "./Table.css"

function OneTable({data, vazhnost, oborudovanie, soobshenie, otvetstvenni}) {

    const [color, setColor] = useState(false);

  return (
        <tbody>
            <tr onClick={() => setColor(!color)} className={`${color ? "touch" : ""}`}>
                <td>{data}</td>
                <td>{vazhnost}</td>
                <td>{oborudovanie}</td>
                <td>{soobshenie}</td>
                <td>{otvetstvenni}</td>
            </tr>
        </tbody>
  )
}

export default OneTable