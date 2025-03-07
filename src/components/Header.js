import logo from '../imgs/LogoMain.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-[#262626] border-b-4 border-[#2271D1] p-4 text-white items-center">
      <div className='flex justify-between items-center'>
        <img src={logo} alt="Logo" />
        <nav className="container gap-2 mx-auto items-center flex justify-end">
          <Link to="/" className="px-4 py-2 rounded font-bold border">Home</Link>
          <Link to="/nuevo-video" className=" px-4 py-2 rounded font-bold border">Nuevo Video</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
