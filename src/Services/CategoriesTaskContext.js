const { useState, useContext } = require("react");

import React, { useState, useContext } from 'react';

export const toDosListManager = () => {
  const [task, setTask] = useState([
    {
      escuela: {
        task: 'Aprender React',
        date: '26 Abril 2020',
        completed: 'false'
      }
    }



  ])
}