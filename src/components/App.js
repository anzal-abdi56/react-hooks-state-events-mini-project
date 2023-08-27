import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from "react";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

  const [tasks, setTasks] = useState(TASKS)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleDeleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks)
  }

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };

  //filter tasks based on selected category
  const filteredTasks = selectedCategory ==='All' 
    ? tasks 
    : tasks.filter(task => task.category === selectedCategory)

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
         categories = {CATEGORIES}
         selectedCategory = {selectedCategory}
         onCategoryChange = {handleCategoryChange} />
      <NewTaskForm  categories={CATEGORIES} />
      <TaskList tasks = {TASKS} onDelete = {handleDeleteTask} />
    </div>
  );
}

export default App;