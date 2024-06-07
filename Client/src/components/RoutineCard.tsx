import { RoutineData } from '../../../Server/shared/types'
import {MdSunny} from 'react-icons/md'
import { BsFillMoonStarsFill } from "react-icons/bs";
type Props = {
    card : RoutineData,
    index : number
}
const RoutineCard = ({card, index} : Props) => {

  return (
    <div className='bg-violet-50 border border-violet-200 px-10 py-5 rounded hover:shadow-lg'>
        {
            card.timeOfUse === 'Day' ? <span className=''><MdSunny className='text-yellow-400 text-3xl'/></span>
            : <span><BsFillMoonStarsFill className='text-gray-800'/></span>
        }
        
        <h6 className='text-violet-900 text-2xl font-bold mt-4'>ROUTINE {index}</h6>
        <div>
            <ul className='list-none mt-5 space-y-2'>
                {
                    card.productType.map((prod) => (
                        <li className='text-stone-600 text-lg border px-3 py-1 bg-violet-100'>{prod}</li>
                    ))
                }
            </ul>
        </div>
      
    </div>
  )
}

export default RoutineCard
