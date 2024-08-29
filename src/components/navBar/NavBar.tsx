import { Menu } from "lucide-react"
import "./NavBar.scss"
interface Props {
  openNav: () => void
}
function NavBar({ openNav }: Props) {

  return (
    <div className="header">
      <a href="/">logo</a>
      {/* navbar */}
      <nav className=" flex items-center justify-end w-[80%] h-[100%] mx-auto">
        {/* <a href="/">Home</a>
            <a href="/">Shop</a>
            <a href="/">About</a> */}
        <div className="nav-link">HOME</div>
        <div className="nav-link">ABOUT</div>
        <div className="nav-link">PRODUCT</div>
        <div className="nav-link">PRIVATE</div>
      </nav>

      <div onClick={openNav} > <Menu className="md:hidden w-[2rem] h-[2rem] cursor-pointer text-black" /></div>
    </div>
  )
}

export default NavBar