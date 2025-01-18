import "../../assents/style/output.css";

import logo from "../../assents/img/hello_logo.svg";
import searchIcon from "../../assents/img/icon/Search.svg";
import chatIcon from "../../assents/img/icon/Chat Two Bubbles Oval.svg";
import homeIcon from "../../assents/img/icon/Home 3.svg";
import notificationIcon from "../../assents/img/icon/Notification Alarm.svg";
import peopleIcon from "../../assents/img/icon/User Multiple Group.svg";
const Header = () => {
  return (
    <header className="flex py-4 px-16 justify-between items-center border fixed top-0 left-0 w-full z-50 bg-white">
      <div className="flex gap-14">
        <img src={logo} alt="hello_logo" width={90} />
        <div className="flex">
          <input
            className="bg-[#F2F4F7] py-3 px-5 w-80 rounded-tl-full rounded-bl-full outline-none"
            type="text"
            placeholder="Pesquisar na hello"
            name="search"
            id="search"
          />
          <button className="bg-[#F2F4F7] py-3 px-5 rounded-tr-full rounded-br-full">
            <img src={searchIcon} alt="search_icon" width={16} />
          </button>
        </div>
      </div>
      <nav className="flex gap-28">
        <a href="#">
          <img src={homeIcon} alt="home_icon" width={20} />
        </a>

        <a href="#">
          <img src={chatIcon} alt="chat_icon" width={20} />
        </a>

        <a href="#">
          <img src={peopleIcon} alt="people_icon" width={20} />
        </a>

        <a href="#">
          <img src={notificationIcon} alt="notification_icon" width={20} />
        </a>
      </nav>

      <div className="w-14 h-14 rounded-full flex justify-center items-center bg-[#F2F4F7]">
        <span>U</span>
      </div>
    </header>
  );
};

export default Header;
