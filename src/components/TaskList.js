import React from "react";
import Task from "./Task";

function TaskList({tasks, deletesTask}) {
  const listOfTasks = tasks.map((task)=>{
    return <Task key={task.text} text={task.text} category={task.category} deletesTask={()=> deletesTask(task)}/>
  })


  
  return (
    <div className="tasks">
      <ol>
      {/* display a list of tasks using Task component */}
      {listOfTasks}
      </ol>
    </div>
  );
}


export default TaskList;
