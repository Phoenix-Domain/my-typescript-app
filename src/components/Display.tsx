
type TaskKeys = 'id' | 'task' | 'dueDate' | 'status'

type TaskObject = {
    [key in TaskKeys]: string
}

interface TaskProps{
    taskData: TaskObject[],
    delTask: (id: string) => void
}

function Display({taskData, delTask}: TaskProps){
        
    return(
       <>
        {
            taskData && (
                <section>
                    {
                        taskData.map((taskRow) => (
                            <article key={taskRow.id} className='flex justify-around items-center py-4 bg-gray-700 text-white my-4'>
                                <p>{taskRow.task}</p>
                                <p>{taskRow.dueDate}</p>
                                <p>{taskRow.status}</p>
                                <button className='rounded py-1 px-2 bg-gray-200 text-gray-900' onClick={() =>{delTask(taskRow.id)}}>X</button>
                            </article>
                        ))
                    }
                </section>
            )
        } 
       </>
    )
}

export default Display;