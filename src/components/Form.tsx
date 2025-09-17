type TaskKeys = 'id' | 'task' | 'dueDate' | 'status'

type TaskObject = {
    [key in TaskKeys]: string
}

interface FormTypes{
    newTask: TaskObject
    setNewTask: React.Dispatch<React.SetStateAction<TaskObject>>,
    onSubmit: () => void
}


function Form({ newTask, setNewTask, onSubmit }: FormTypes){
    
    return(
        <form action="" className='border flex flex-col w-fit p-5 mx-auto bg-gray-700 text-white' onSubmit={e => {
            e.preventDefault();
            onSubmit();
        }}>
            <label htmlFor="task">Task:</label>
            <input type="text" value={newTask.task} id='task' className='border p-1 mb-4' onChange={e => setNewTask(prev => ({
                ...prev,
                task: e.target.value
            }))}/>

            <label htmlFor="dueDate">Due Date:</label>
            <input type="date" value={newTask.dueDate} id='dueDate' className='border p-1 mb-4' onChange={e => setNewTask(prev => ({
                ...prev,
                dueDate: e.target.value
            }))}/>

            <label htmlFor="status">Status:</label>
            <select name="" id='status' value={newTask.status} className='border p-1 mb-4 bg-gray-800' onChange={e => setNewTask(prev => ({
                ...prev,
                status: e.target.value
            }))}>
                <option value="">Select Status</option>
                <option value="completed">Completed</option>
                <option value="pending">Pending</option>
                <option value="notStatrted">Not Started</option>
            </select>

            <button className='px-4 py-2 bg-gray-200 rounded text-gray-900 active:bg-gray-900 active:text-white' type='submit'>Add New Task</button>
        </form>
    )
}

export default Form;