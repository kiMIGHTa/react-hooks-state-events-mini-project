import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });



function App() {
  const [tasks, setTasks] = useState(TASKS)
  const [selected, setSelect] = useState("All")

  function deleteTask(taskDelete) {
    const newTasks = tasks.filter((task) => task.text !== taskDelete.text)
    return setTasks(newTasks)
  }


  function onTaskFormSubmit(data){
    return setTasks([...tasks, data])
  }
  const filteredTasks = tasks.filter((task)=> selected==="All" || task.category===selected)



  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selected={selected} setSelect={setSelect}/>
      <NewTaskForm categories={CATEGORIES.filter((CATEGORY)=>CATEGORY!== "All")} onTaskFormSubmit={onTaskFormSubmit}/>
      <TaskList tasks={filteredTasks} deletesTask={deleteTask}/>
    </div>
  );
}

export default App;
