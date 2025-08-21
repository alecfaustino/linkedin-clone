import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faVideo, faPenToSquare} from "@fortawesome/free-solid-svg-icons";


export default function Post() {
  return (
    // Main div for the border bottom with the line separating the components in the middle column
    <div className="border-b border-b-grey-500 m-6 h-auto items-center">
    {/* the post section */}
     <div className="m-6 h-auto bg-gray-800 flex flex-col rounded-md content-center">
      {/* the photo and the input field */}
      <div className="flex flex-1 p-4">
        <Image
            src="/globe.svg"   
            alt="Profile photo"
            width={80}
            height={80}
            className="px-4 "
            />
        <input placeholder="Start a Post" className="px-4 h-12 flex flex-[2] focus:outline-none border rounded-4xl"/>
        </div>

      {/* Video, Photo, Article */}
      <div className="flex justify-around p-4" >
        <div className="flex gap-2">
         <FontAwesomeIcon icon={faVideo} size="xl" className="text-green-400"/>
         <span>Video</span>
        </div>
        <div className="flex gap-2">
         <FontAwesomeIcon icon={faImage} size="xl" className="text-blue-500"/>
         <span>Photo</span>
        </div>
        <div className="flex gap-2">
          <FontAwesomeIcon icon={faPenToSquare} size="xl" className="text-orange-300"/>
          <span>Write article</span>
        </div>
      </div>
      </div>
    </div>
  )
}