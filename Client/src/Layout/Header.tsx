import { Link } from "react-router-dom"
import { useAppContext } from "../AppContext"

interface Props {
  isNavVisible : Boolean,
}

const Header = ({isNavVisible} : Props) => {
  const {isLoggedIn}= useAppContext();

  return (
    <div className='bg-violet-500 p-8 flex justify-between'>
      <div className="font-myFont text-5xl text-white"> Glass Skin</div>


      <div className="flex items-center"> 
      {
        isNavVisible? 
        <> 
        <div className="flex items-center gap-5 font-semibold text-lg font-slate-700">
          <p className="group relative">
              <a href='/'>Home</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </p>
          
          <p className="group relative">
              <a href='/analyse'>Analysis</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </p>

          <p className="group relative">
              <a href='/routine'>My Routines</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </p>

          <p className="group relative">
              <a href='/contact-us'>Contact us</a>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
          </p>
        </div> 
        <span className="ml-10">

        {(isLoggedIn ? 
          <Link 
            to ='/profile' 
            className="shadow px-3 py-2 bg-white font-bold rounded-sm hover:bg-violet-500 hover:text-white duration-150"> My Account 
          </Link> 
          : <Link
              to='/signin'
              className="shadow px-3 py-2 bg-white font-bold rounded-sm hover:bg-violet-500 hover:text-white duration-150">
                  Sign in
            </Link>
        )}
        
      </span> </>: <></>
      }

      
      </div>
    </div>
  )
}

export default Header
