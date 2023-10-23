const Navbar = ({ className }) => {
  const routes = [{
    label: "Home",
    href: "/"
  },
  {
    label: "Products",
    href: "/products"
  },
  {
    label: "Contact",
    href: "/contact"
  }]

  return (
    <nav className={className}>
      {routes.map((route, i) => (
        <a 
          className="hover:text-black" 
          href={route.href} 
          key={i}
        >
          {route.label}
        </a>
      ))}
    </nav>
  );
}

export default Navbar;