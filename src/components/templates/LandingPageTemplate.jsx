import { useLocation } from "react-router"
import Header from "../Header"
import Footer from "../Footer"

const LandingPageTemplate = ({children}) => {
  const {pathname}= useLocation()

  return (
    <div>
      {pathname === ('/') && <div className="bg-[#E2E2E2] m-0 p-0 w-full h-full"></div>}
      <Header/>
      <div className=" max-w-[1060px] m-auto">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default LandingPageTemplate