import Header from "./Header"
import Hero from "./Hero"

interface Props {
    children : React.ReactNode;
}

const Login_Layout = ({children} : Props) => {
  return (
    <>
        <Header isNavVisible={false}/>
        <Hero/>
        {children}
    </>
  )
}

export default Login_Layout
