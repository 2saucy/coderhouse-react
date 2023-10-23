import { LogInIcon, ShoppingCart } from 'lucide-react'
import { BounceLoader } from "react-spinners";
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 2000)
  }

  return (
    <>
      <header className="flex justify-between items-center px-6 py-2">
        <h1 className="text-3xl font-bold cursor-pointer">Zest</h1>
        <Navbar className="flex gap-4 text-[#64748b]" />
        {
          isLoggedIn ? (
            <button className="rounded-full p-2 bg-black/80 hover:scale-105 duration-100 ease-in-out">
              <ShoppingCart className="text-white" size={20} />
            </button>
          ) : (
            <button onClick={onClick} className="flex items-center justify-between gap-4 bg-yellow-300 rounded-lg text-xs px-4 py-2">
              Sign in
              {!isLoading && <LogInIcon size={20} strokeWidth={1} />}
              <BounceLoader speedMultiplier={1.5} loading={isLoading} size={20} />
            </button>
          )
        }
      </header>
    </>
  )
}

export default App
