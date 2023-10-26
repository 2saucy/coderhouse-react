import Navbar from './Navbar'
import CartWidget from './CartWidget'

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-2">
      <h1 className="text-3xl font-bold cursor-pointer">
        Zest
      </h1>
      <Navbar />
      <CartWidget />
    </header>
  );
}

export default Header;