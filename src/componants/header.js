import { Link } from 'react-router-dom';
import { Button, Navbar } from "flowbite-react";
import logo from '../images/logo/2.png';

export function Header() {
  return (
    <Navbar fluid rounded className="bg-customGray sticky top-0 z-50">
      <Navbar.Brand as={Link} to="/">
        <img src={logo} className="mr-3 h-8 sm:h-20 transition-transform duration-200 hover:scale-105 " alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-black">Petify</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <Link to="/login">
          <Button className="text-black border-black bg-trans hover:bg-light mr-4">Connect with a vet</Button>
        </Link>
        <Link to="/login" className="text-black border-black px-3 py-2 rounded-md hover:bg-light">Login</Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/shop" className='transition-transform duration-200 hover:scale-105 text-l'>Shop</Navbar.Link>
        
        
        <Navbar.Link as={Link} to="/paws-people" className='transition-transform duration-200 hover:scale-105 text-l'>Paws & People</Navbar.Link>
        <Navbar.Link as={Link} to="/contactus" className='transition-transform duration-200 hover:scale-105 text-l'>We're Listening</Navbar.Link>
        <Navbar.Link as={Link} to="/trans" className='transition-transform duration-200 hover:scale-105'>Want a Driver</Navbar.Link>
        <Navbar.Link as={Link} to="/CatInfo" className='transition-transform duration-200 hover:scale-105'>Whiskers & Wags</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
