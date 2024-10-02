import { ModeToggle } from "@/components/mode-toggle";  // Adjust the path if necessary
import { Button } from "@/components/ui/button";


import Image from "next/image";


export default function Home() {
  return (
   <div className='flex justify-between p-5 shadow-md '>
      <Image src={'/log.svg'} width={40} height={40} />
     
     <ModeToggle />
        </div>
  );
}
