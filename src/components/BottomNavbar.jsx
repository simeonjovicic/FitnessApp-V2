import {
  appleImg,
  bagImg,
  bartchartImg,
  heartImg,
  homeImg,
  searchImg,
  userImg,
} from "../utils";
import { useNavigate } from "react-router-dom";

const Bottom = () => {
  const navigate = useNavigate(); // ✅ Call useNavigate here

  return (
    <footer
      className="w-full my-8 fixed bottom-0 bg-black/90 backdrop-blur-sm 
      border-t-[0.5px] border-gray-300 shadow-sm"
    >
      <nav className="flex justify-between items-center max-w-[400px] mx-auto px-4">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img src={homeImg} alt="Home" width={24} height={24} />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img src={bartchartImg} alt="Stats" width={24} height={24} />
        </button>

        {/* Central prominent icon */}
        <button
          onClick={() => navigate("/create-workout")} // ✅ Correct usage of navigate
          className="p-3 bg-gray-900 hover:bg-gray-800 rounded-full 
          shadow-lg -translate-y-2"
        >
          <img
            src={appleImg}
            alt="Apple"
            width={28}
            height={28}
            className="text-white"
          />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img src={heartImg} alt="Favorites" width={24} height={24} />
        </button>

        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img src={userImg} alt="Profile" width={24} height={24} />
        </button>
      </nav>
    </footer>
  );
};

export default Bottom;
