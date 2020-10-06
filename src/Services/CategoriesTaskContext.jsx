import React, { useState, createContext } from 'react';
import { CategoryTitle } from '../Services/setToDoHeader';

export const ToDoListContext = createContext();
export let categoryTasks;

export const ToDoListProvider = props => {
  const [task, setTask] = useState([
    {
      category: 'ESCUELA',
      name: 'Aprender React escuela',
      date: '26 Abr',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'Terminar la ToDo trabajpo',
      date: '27 Sep',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'Segundo task la ToDo trabajpoksdjkdjk terminar pronto antes decoracion io ns',
      date: '29 Sep',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'Tres la ToDo trabajpo',
      date: '27 Sep',
      completed: false,
    },
    {
      category: 'HOGAR',
      name: 'Terminar la ToDo hogar',
      date: '27 Sep',
      completed: false,
    },

    {
      category: 'ESCUELA',
      name: 'Aprender React escuela',
      date: '26 Abr',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'cuatro la ToDo trabajpo',
      date: '27 Sep',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'cinco task la ToDo trabajpo',
      date: '29 Sep',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'seis la ToDo trabajpo',
      date: '27 Sep',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'siete la ToDo trabajpo',
      date: '27 Sep',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'ocho task la ToDo trabajpo',
      date: '29 Sep',
      completed: false,
    },
    {
      category: 'TRABAJO',
      name: 'nueve la ToDo trabajpo',
      date: '27 Sep',
      completed: false,
    },
    {
      category: 'HOGAR',
      name: 'Terminar la ToDo hogar',
      date: '27 Sep',
      completed: false,
    },

  ]);
  categoryTasks = task.filter(task => task.category === CategoryTitle)

  return (
    <ToDoListContext.Provider value={
      [task, setTask]
    }>
      {props.children}
    </ToDoListContext.Provider>
  )
};

