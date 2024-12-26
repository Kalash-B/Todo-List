import React, { useState } from 'react'

const Task = ({onAddTask, taskLen}) => {
  
  const [task, setTask ] = useState("");
  const [desk, setDesk ] = useState("");

  const handleSubmit = () => {
    if (task && desk) {
      onAddTask(task, desk);
      setTask("");
      setDesk("");
    }
    else{
      alert("Please fill all the fields")
    }

  };
  const submitHandler = (e) => {
    e.preventDefault();
  }
  return (
    <form onSubmit={submitHandler}>
      <div>
        <div className='h-full text-[#666666] flex justify-between items-center text-5xl rounded-3xl pt-10'>
          <h1>To-Do List</h1>
          <a href="#" onClick={handleSubmit} className='w-16 h-16 bg-[#5b75e4] rounded-full'><svg width="62px" height="62px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 12H20M12 4V20" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg></a>
        </div>
        <h1 className='text-3xl text-[#5b75e4] font-bold'>{taskLen} Tasks pending</h1>
          <input type="text" className='mx-auto w-full h-10 border-2 border-zinc-700 m-2 px-11 text-2xl rounded'
          placeholder='Enter Your Task' 
          value={task}
          onChange={(e)=>{
            setTask(e.target.value)
          }}/>
          <input type="text" className='mx-auto w-full h-10 border-2 border-zinc-700 m-2 px-11 text-2xl rounded' 
          placeholder='Enter Your Task Description'
          value={desk}
          onChange={(e)=>{
            setDesk(e.target.value)
          }}/>

      </div>
    </form>
  )
}

export default Task
