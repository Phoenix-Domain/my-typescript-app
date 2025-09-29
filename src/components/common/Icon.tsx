import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faRobot } from '@fortawesome/free-solid-svg-icons'

interface IconTypes{
    iconType: 'user' | 'chatBot'
}

function Icon({iconType}: IconTypes){
   const icon = iconType === 'user' ? faUser : faRobot;

    return(
        <FontAwesomeIcon icon={icon} size='lg' className='bg-green-400 rounded-full py-2 px-1.5'/>
    )
}

export default Icon;