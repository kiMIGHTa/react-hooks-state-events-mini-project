import React, { useState } from "react";

function NewTaskForm({categories, onTaskFormSubmit}) {

  const[formData, setFormData] = useState({
    text:"",
    category: ""
  })

  const inputChange = (e)=>{
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  const listOfOptions = categories.map((category)=> <option key={category}>{category}</option>)

  function handleSubmit(e){
    e.preventDefault()
    onTaskFormSubmit(formData)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={inputChange}/>
      </label>
      <label>
        Category
        <select name="category" onChange={inputChange}>
          {/* render <option> elements for each category here */}
          {listOfOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
