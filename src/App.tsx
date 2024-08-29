
import { useState } from 'react'
import Footer from './components/footer/Footer'
import NavBar from './components/navBar/NavBar'
import Home from './pages/home/Home'
import MobileNav from './components/navBar/MobileNav';


function App() {
  const [nav,setNav] = useState(false);
  const openNav =() => setNav(true);
  const closeNav =() => setNav(false);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header className="py-4">
          <MobileNav nav={nav} closeNav={closeNav}/>
          <NavBar openNav={openNav}/>
        </header>

        <main className="flex-1 py-2 mt-10 ">
          <Home />
        </main>

        <footer className="bg-black py-4 mt-auto text-white w-full">
          <Footer />
        </footer>
      </div>

    </>
  )
}

export default App
