import { appleImg, bagImg, searchImg } from '../utils';
import { navLists } from '../constants';

const Navbar = () => {
  return (
    <header
      className="w-full py-6 sm:px-10 px-5 flex
    justify-between items-center"
    >
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple" width={25} />

        <div className="flex flex-1 justify-center">
          <h1>Hanxiang's Progress</h1>
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end">
          <img src={bagImg} alt="search" width={25} />
        </div>
      </nav>
    </header>
  );
}

export default Navbar