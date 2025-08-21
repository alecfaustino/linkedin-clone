import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo, faPenToSquare} from "@fortawesome/free-solid-svg-icons";


export default function Post() {
  return (
    // Main div for the border bottom with the line separating the components in the middle column
    <div className="border-b border-gray-500 m-6">

      {/* the post section */}
      <div className="m-6 bg-gray-800 flex flex-col rounded-md">

        {/* the photo and the input field */}
        <div className="flex p-4 gap-4 items-center">
          <Image
            src="/globe.svg"
            alt="Profile photo"
            width={80}
            height={80}
            className=""
          />
          <input
            placeholder="Start a Post"
            className="flex-1 h-12 px-4 border rounded-full focus:outline-none"
          />
        </div>

        {/* Video, Photo, Article */}
        <div className="flex justify-around p-4">
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded-md">
            <FontAwesomeIcon icon={faVideo} size="lg" className="text-green-400"/>
            <span>Video</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded-md">
            <FontAwesomeIcon icon={faImage} size="lg" className="text-blue-500"/>
            <span>Photo</span>
          </div>
          <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-700 px-2 py-1 rounded-md">
            <FontAwesomeIcon icon={faPenToSquare} size="lg" className="text-orange-300"/>
            <span>Write article</span>
          </div>
        </div>
      </div>
    </div>
  )
}