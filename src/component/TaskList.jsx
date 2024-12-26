import React from 'react';

const TaskList = ({ tasks, onToggleTask, onDeleteTask }) => {
  return (
    <div className='mt-4'>
      {tasks.length > 0 ? (
        tasks.map((task, inx) => (
          <div
            key={inx}
            className={`m-2 p-4 border-b-2 flex items-center justify-between ${
              task.completed ? 'border-green-500 bg-green-100' : 'border-zinc-700'
            }`}
          >
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(inx)}
              className='mr-4'
            />
            <div className="flex-grow">
              <h2 className={`text-lg font-semibold ${task.completed ? 'line-through text-gray-500' : ''}`}>
                {task.task}
              </h2>
              <p className={`text-sm ${task.completed ? 'line-through text-gray-400' : ''}`}>
                {task.desk}
              </p>
            </div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded ml-4"
              onClick={() => onDeleteTask(inx)}
            >
              Delete
            </button>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No tasks available!</p>
      )}
    </div>
  );
};

export default TaskList;
