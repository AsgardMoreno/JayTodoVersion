import React from "react";
import CategoryHeader from "../../Components/CategoryHeader";
import './toDo.css';
import ToDoTaskList from "../../Components/ToDoTaskList";
import { ToDoListProvider } from "../../Services/CategoriesTaskContext.jsx";
import AddTaskButton from "../../Components/AddTaskButton";
import ShowNewTaskModal from '../../Components/NewTaskModal';

const ToDo = () => {

  return (
    <ToDoListProvider>
      <div className='mainToDo'>
        <CategoryHeader />
        <ToDoTaskList />
        <AddTaskButton />

      </div>
      <div>
        <ShowNewTaskModal />
      </div>
    </ToDoListProvider>

  )
}

export default ToDo;