import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="px-6 py-3 bg-gray-800 flex flex-row border-b border-b-grey-500">
      {/* The logo and search bar div */}
      <div className="flex flex-row flex-1 gap-4 items-center">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" className="text-blue-500"/>


        {/* the search bar div to group icon and input */}
        <div className="flex flex-row border rounded-4xl">
        <FontAwesomeIcon icon={faSearch} className="p-4"/>
        <input placeholder="Search" className="pr-4 focus:outline-none">
        
        </input>
        </div>
      </div>

      <div className="flex items-center flex-3 gap-4 justify-end">
        <div className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faHome} size="lg"/>
          <span>Home</span>
        </div>
        <div className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faBell} size="lg" />
          <span>Notifications</span>
        </div>
        <div className="flex flex-col items-center hover:text-blue-500 cursor-pointer">
          <FontAwesomeIcon icon={faUser} size="lg" />
          <span>Profile</span>
        </div>
        
      </div>
    </nav>
  )
}