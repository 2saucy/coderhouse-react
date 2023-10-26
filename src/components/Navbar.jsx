import { ALL_ROUTES as routes } from "../../constants.js";

const Navbar = () => {
  return (
    <nav>
      <ul className="flex gap-4">
        {routes.map((route, i) => (
          <li key={i}>
            <a className="text-[#64748b] hover:text-black" href={route.href}>
              {route.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;