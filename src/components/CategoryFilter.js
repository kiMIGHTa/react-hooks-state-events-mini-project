import React from "react";



function CategoryFilter({categories, selected, setSelect}) {

  const listOfCategoryButtons = categories.map((category)=>{
    const buttonClass = category === selected ? "selected":""
    return <button key={category} className={buttonClass} onClick={()=>setSelect(category)}>{category}</button>
  })


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {listOfCategoryButtons}
      
    </div>
  );
}



export default CategoryFilter;
