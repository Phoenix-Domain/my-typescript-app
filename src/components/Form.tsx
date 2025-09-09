import Button from "./Button.tsx";

function Form(){
    return(
        <>
            <form action="" className="p-5 rounded-md bg-[rgba(0,0,0,0.3)] w-fit m-auto">
                <label htmlFor="task" className="font-semibold">
                    Task:
                </label>
                <input id='task' type="text" className='outline-0 text-white bg-gray-500 block p-1 w-full'  />

                <label htmlFor="task" className="font-semibold">
                    Due Date:
                </label>
                <input id='task' type="date" className='outline-0 text-white bg-gray-500 block p-1 w-full'  />

                <label htmlFor="task" className="font-semibold">
                    Task:
                </label>
                <input id='task' type="text" className='outline-0 text-white bg-gray-500 block p-1 w-full'  />

                <Button 
                    type='submit'
                    content='Submit'
                    style='bg-gray-900 mt-4 py-2 px-4 text-white active:bg-white active:text-gray-900'
                />
            </form>
        </>
    )
}

export default Form;