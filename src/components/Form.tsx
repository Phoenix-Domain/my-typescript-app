import Button from './Button';
import { useState } from 'react';
import Todo from './Todo';

interface FormDataType{
    task: string,
    dueDate: string,
    status: string
}

function Form(){
    const [task, setTask] = useState<string>('');
    const [dueDate, setDueDate] = useState<string>('');
    const [status, setStatus] = useState<string>('');
    const [todoList, setTodoList] = useState<FormDataType[]>([])

    return(
        <>
            <form action="" className="p-5 rounded-md bg-[rgba(0,0,0,0.3)] w-fit m-auto" onSubmit={e => {
                e.preventDefault();
                const newTodo: FormDataType = {task, dueDate, status}
                
                    setTodoList(prevArray => [
                        ...prevArray,
                        newTodo
                    ])
                

                setTask('');
                setDueDate('');
                setStatus('');
            }}>
                <label htmlFor="task" className="font-semibold">
                    Task:
                </label>
                <input id='task' value={task} type="text" className='outline-0 text-white mb-3 bg-gray-500 block p-1 w-full'  onChange={e => {
                    setTask(e.target.value)
                }} />

                <label htmlFor="dueDate" className="font-semibold">
                    Due Date:
                </label>
                <input id='dueDate' value={dueDate} type="date" className='outline-0 text-white mb-3 bg-gray-500 block p-1 w-full'  onChange={e => {
                    setDueDate(e.target.value);
                }} />

                <label htmlFor="status" className="font-semibold">
                    Status:
                </label>
                <select name="status" value={status} id="status" className='outline-0 text-white mb-3 bg-gray-500 block p-1 w-full' onChange={e => {
                    setStatus(e.target.value);
                }}>
                    <option value="select status">Select Status</option>
                    <option value="completed">Completed</option>
                    <option value="pending">Pending</option>
                    <option value="incomplete">Incomplete</option>
                </select>

                <Button 
                    type='submit'
                    content='Submit'
                    style='bg-gray-900 mt-4 py-2 px-4 text-white active:bg-white active:text-gray-900'
                />
            </form>

            {
                todoList && (
                    todoList.map((todo, index) => (
                        <Todo 
                            key={index}
                            task={todo.task}
                            dueDate={todo.dueDate}
                            status={todo.status}                        />
                    ))
                )
            }
        </>
    )
}

export default Form;