import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo, faPenToSquare} from "@fortawesome/free-solid-svg-icons";


export default function Post() {
  return (
    // Main div for the border bottom with the line separating the components in the middle column
    <div className="border-b border-b-grey-500 m-6">
    {/* the post section */}
     <div className=" m-6 bg-gray-800 flex flex-row rounded-md">
      {/* the photo and the input field */}
      <div className="flex">
        <Image
            src="/globe.svg"   
            alt="Profile photo"
            width={100}
            height={100}
            className="p-4 "
            />
        <input placeholder="Start a Post" className="px-4 focus:outline-none border rounded-4xl"/>
        </div>

      {/* Video, Photo, Article */}
      <div>
        <FontAwesomeIcon icon={faVideo} size="xl" />
        <FontAwesomeIcon icon={faImage} size="xl" />
        <FontAwesomeIcon icon={faPenToSquare} size="xl" />

      </div>
      </div>
    </div>
  )
}