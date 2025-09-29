import Button from '../common/Button';
import Input from '../common/Input';

function ChatInput(){
    return(
        <div className='flex justify-around gap-5 mx-auto my-5 p-4'>
            <Input type='text'/>
            <Button type='button' label='Chat'/>
        </div>
    )
}

export default ChatInput;