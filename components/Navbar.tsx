import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSearch, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <nav className="px-6 py-3 bg-gray-800 flex flex-row border-b border-b-grey-500">
      {/* The logo and search bar div */}
      <div className="flex flex-row flex-1 gap-4">
        <FontAwesomeIcon icon={faLinkedin} size="2xl" />


        {/* the search bar div to group icon and input */}
        <div className="flex flex-row border rounded-2xl">
        <FontAwesomeIcon icon={faSearch} className="p-2"/>
        <input >
        
        </input>
        </div>
      </div>

      <div className="flex flex-row flex-3 gap-4 justify-end">
        <h1>Temp</h1>
        <h1>Temp</h1>
        <h1>Temp</h1>
        <h1>Temp</h1>
        <h1>Temp</h1>
        <h1>Temp</h1>
        <h1>Temp</h1>
        <h1>Temp</h1>
        <h1>Temp</h1>
        <h1> | </h1>
        <h1>Temp</h1>
        <h1>Temp</h1>
      </div>
    </nav>
  )
}