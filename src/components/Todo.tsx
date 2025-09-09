interface TodoType{
    task: string,
    dueDate: string,
    status: string
}

function Todo({ task, dueDate, status }: TodoType){
    
    return(
        <div className="text-white flex justify-between bg-gray-900 p-2 my-4">
            <p className="font-bold text-xl">{task}</p>
            <p>{dueDate}</p>
            <p>{status}</p>
        </div>
    )
}

export default Todo