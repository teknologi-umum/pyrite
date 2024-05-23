import { ButtonLink } from "./button-link";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 bg-white shadow-md">
      <div>
        {/* <img src="/path/to/logo.png" alt="Logo" className="h-8" /> */}
        <ButtonLink to="/" name="Home" />
        <ButtonLink to="#" name="About" />
      </div>
      <div>
        <ButtonLink to="#" name="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;
