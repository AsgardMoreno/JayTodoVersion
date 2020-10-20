import React, { useState, useEffect } from "react";
import CategoryHeader from "../../Components/CategoryHeader";
import './toDo.css';
import ToDoTaskList from "../../Components/ToDoTaskList";
import AddTaskButton from "../../Components/AddTaskButton";
import ShowNewTaskModal from '../../Components/NewTaskModal';


const ToDo = () => {

  const [task, setTask] = useState([
    {
      key: '1',
      category: 'ESCUELA',
      name: 'Aprender React escuela',
      date: '26 Abr',
      year: '2019',
      completed: false,
    },
    {
      key: '2',
      category: 'TRABAJO',
      name: 'Terminar la ToDo trabajpo',
      date: '27 Sep',
      year: '2020',
      completed: false,
    },
    {
      key: '3',
      category: 'TRABAJO',
      name: 'Segundo task la ToDo trabajpoksdjkdjk terminar pronto antes decoracion io ns',
      date: '29 Sep',
      year: '2021',
      completed: false,
    },
    {
      key: '4',
      category: 'TRABAJO',
      name: 'Tres la ToDo trabajpo',
      date: '27 Sep ',
      year: '2020',
      completed: false,
    },
    {
      key: '5',
      category: 'HOGAR',
      name: 'Terminar la ToDo hogar',
      date: '27 Sep',
      year: '2021',
      completed: false,
    },

    {
      key: '6',
      category: 'ESCUELA',
      name: 'Aprender React escuela',
      date: '26 Abr',
      year: '2020',
      completed: false,
    },
    {
      key: '7',
      category: 'TRABAJO',
      name: 'cuatro la ToDo trabajpo',
      date: '27 Sep',
      year: '2021',
      completed: false,
    },
    {
      key: '8',
      category: 'TRABAJO',
      name: 'cinco task la ToDo trabajpo',
      date: '29 Sep',
      year: '2018',
      completed: false,
    },
    {
      key: '9',
      category: 'TRABAJO',
      name: 'seis la ToDo trabajpo',
      date: '27 Sep',
      year: '2016',
      completed: false,
    },
    {
      key: '10',
      category: 'TRABAJO',
      name: 'siete la ToDo trabajpo',
      date: '27 Sep',
      year: '2019',
      completed: false,
    },
    {
      key: '11',
      category: 'TRABAJO',
      name: 'ocho task la ToDo trabajpo',
      date: '29 Sep',
      year: '2020',
      completed: false,
    },
    {
      key: '12',
      category: 'TRABAJO',
      name: 'nueve la ToDo trabajpo',
      date: '27 Oct',
      year: '2018',
      completed: false,
    },
    {
      key: '13',
      category: 'HOGAR',
      name: 'Terminar la ToDo hogar',
      date: '27 Sep',
      year: '2024',
      completed: false,
    },
  ]);
  useEffect(() => {
    getLocalTasks();
  }, []);

  const getLocalTasks = () => {
    if (localStorage.getItem("ToDos") === null) {
      localStorage.setItem("ToDos", JSON.stringify([]));
    }
    else {
      const localTasks = JSON.parse(localStorage.getItem("ToDos"));
      setTask(localTasks);
    }
  }

  return (
    // <ToDoListProvider>
    <div>
      <div className='mainToDo'>
        <CategoryHeader task={task} />
        <ToDoTaskList task={task} />
        <AddTaskButton task={task} />
      </div>
      <div>
        <ShowNewTaskModal task={task} setTask={setTask} />
      </div>
    </div>


    // </ToDoListProvider>
  )
};
export default ToDo;