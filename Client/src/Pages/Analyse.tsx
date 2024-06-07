import { useAppContext } from '../AppContext'

const Analyse = () => {
    const { isLoggedIn } = useAppContext()
  return (
    <div>
       {
        isLoggedIn ? <>analyse</>
        : <>
            please login
        </>
      }
    </div>
  )
}

export default Analyse
