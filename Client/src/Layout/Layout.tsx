import Header from "./Header"
import Hero from "./Hero"

interface Props {
    children : React.ReactNode;
}

const Layout = ({children} : Props) => {
  return (
    <>
        <Header isNavVisible={true}/>
        <Hero/>
        {children}
    </>
  )
}

export default Layout
