import { ButtonPrimary } from './button-primary';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-4 bg-white shadow-md">
      <div>
        {/* <img src="/path/to/logo.png" alt="Logo" className="h-8" /> */}
        <ButtonPrimary name="Contribute" />
        <ButtonPrimary name="Budget" />
        <ButtonPrimary name="About" />
      </div>
      <div>
        <ButtonPrimary name="Submit" />
        <ButtonPrimary name="Contact" />
      </div>
    </nav>
  );
};

export default Navbar;