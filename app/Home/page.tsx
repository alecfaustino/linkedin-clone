import Post from "@/components/home/Post";
import Temp from "@/components/home/Temp";


export default function Home() {
 return (
   <div className="flex flex-row gap-4 w-full">
     <Temp className="flex-1" />
     <div className="flex-[2] bg-transparent p-4">
       <Post />
     </div>
     <Temp className="flex-1" />
   </div>


 );
}
