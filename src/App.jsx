import React, { useState } from 'react'
import Task from './component/Task'
import TaskList from './component/TaskList'

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const handleAddTask = (task, desk) => {
    setTasks([...tasks, {task, desk, completed: false}])
  }

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, inx) => {
      if (inx === index) {
        const updatedTask = { ...task, completed: !task.completed };

        if (!updatedTask.completed) {
          setCount((prevCount) => prevCount - 1);
          console.log(count);
        } else {
          setCount((prevCount) => prevCount + 1);
          console.log(count);
        }
        return updatedTask;
      }
      return task;
    });
    setTasks(updatedTasks)
  }

  const deleteTask = (index) => {
    const isCompleted = tasks[index].completed;
    if (isCompleted) {
      setCount((prevCount) => prevCount - 1);
    }
    setTasks(tasks.filter((task, inx) => inx !== index));
    
  }

  return (
    <div className='h-[calc(100%-128px)] w-full flex justify-center items-center my-16'>
      <div className='rounded-[40px] h-auto px-28 py-14 bg-[#fefefe] w-1/2'>
        <Task onAddTask={handleAddTask} taskLen={tasks.length - count}/>
        <TaskList tasks={tasks} onToggleTask={toggleTaskCompletion} onDeleteTask={deleteTask}/>
      </div>
    </div>
  )
}

export default App