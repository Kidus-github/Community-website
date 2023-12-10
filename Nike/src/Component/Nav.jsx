import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
// import { NavLink } from "react-router-dom";
import { navLinks } from "../constants";

function Nav() {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          <a to="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className=" hidden max-lg:block">
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
}

export default Nav;
