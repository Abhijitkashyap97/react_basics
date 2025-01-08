import React, { useState } from 'react';

function App() {
    const [task, setTask] = useState([]); // Array of task objects
    const [newTask, setNewTask] = useState("");

    function handleInput(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim()) {
            const taskObject = { task: newTask, done: false };
            setTask((c) => [...c, taskObject]);
            setNewTask(""); // Clear input field after adding
        }
    }

    function remove(index) {
        setTask((c) => c.filter((_, i) => i !== index));
    }

    function moveUp(index) {
        if (index > 0) {
            setTask((c) => {
                const updatedTasks = [...c];
                [updatedTasks[index - 1], updatedTasks[index]] = [
                    updatedTasks[index],
                    updatedTasks[index - 1],
                ];
                return updatedTasks;
            });
        }
    }

    function moveDown(index) {
        if (index < task.length - 1) {
            setTask((c) => {
                const updatedTasks = [...c];
                [updatedTasks[index], updatedTasks[index + 1]] = [
                    updatedTasks[index + 1],
                    updatedTasks[index],
                ];
                return updatedTasks;
            });
        }
    }

    return (
        <>
            <div className="to-do-list">
                <h1>To-Do List</h1>
                <div>
                    <input
                        className="inp"
                        onChange={handleInput}
                        value={newTask}
                        placeholder="Enter new task"
                    />
                    <button onClick={addTask}>Add Task</button>
                    <ul>
                        {task.map((e, i) => (
                            <li key={i}>
                                {e.task}
                                <button onClick={() => remove(i)}>Remove</button>
                                <button onClick={() => moveUp(i)}>Move Up</button>
                                <button onClick={() => moveDown(i)}>Move Down</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}

export default App;
