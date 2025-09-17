import './App.css';
import Form from './components/Form';
import Display from './components/Display';
import { useState } from 'react';

type TaskKeys = 'id' | 'task' | 'dueDate' | 'status'

type TaskObject = {
    [key in TaskKeys]: string
}

function App() {
  const [newTask, setNewTask] = useState<TaskObject>({id: '',task:'', dueDate: '', status: ''})

  const [taskData, setTaskData] = useState<TaskObject[]>([]);
  
  function handleSubmit(): void{
    const taskWithId: TaskObject = {
      ...newTask,
      id: crypto.randomUUID()
    }
        setTaskData(prev => ([
          ...prev,
          taskWithId
        ]));

        setNewTask({id: '',task: '', dueDate: '', status: ''})
    }

    function delTask(id: string): void{
           setTaskData(prev => prev.filter(task => task.id !== id))
        }

  return (
    <>
      <Form newTask={newTask} setNewTask={setNewTask} onSubmit={handleSubmit}/>
      
      {
        taskData && <Display taskData={taskData} delTask={delTask}/>
      }
    </>
  )
}

export default App
