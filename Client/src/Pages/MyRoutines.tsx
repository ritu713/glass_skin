import { useQuery } from 'react-query';
import { useAppContext } from '../AppContext'
import * as apiClient from '../apiClient'
import { RoutineData } from '../../../Server/shared/types';
import { Link } from 'react-router-dom';
import RoutineCard from '../components/RoutineCard';

const Routine = () => {
    const { isLoggedIn } = useAppContext();
    const { data : routines } = useQuery("fetchRoutines", apiClient.fetchAllRoutines)

  return (
    <div className='mx-[10rem] my-[2rem]'>
      {
        isLoggedIn ? <div>
          <Link to='/new-routine' className='bg-violet-900 text-white text-lg font-bold rounded-sm px-5 py-3 hover:text-violet-900 hover:bg-white shadow duration-150'>New Routine</Link>

          <h3 className='text-stone-600 font-bold text-4xl mt-10'>My routines</h3>

          {
            routines && (
            routines.length !== 0? 
            <div className='flex justify-around my-10'>
              {
                routines.map((routine : RoutineData, idx : number) => {
                  return <RoutineCard card={routine} index={idx+1}/>
                })
              }
            </div>
            : "Nothing to show"
          )
          }
        </div>
        : <>
            <div className="flex items-center justify-center h-full">
              <div className="bg-violet-400 rounded p-10 shadow-xl text-3xl text-white">
                Please login to continue
              </div>
            </div>
        </>
      }
    </div>
  )
}

export default Routine
