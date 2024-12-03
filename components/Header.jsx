import Image from "next/image";
function HomePage() {
  return (
    <div className="text-stone-900">
    {/* {HEADER} */}
 <div className="bg-stone-200">
  <p className="text-center font-semibold py-2">
        All electric &#xb7; • Dynamic &#xb7; • Driver Range</p>
      
    </div>
    <header className="flex justify-between px-10 py-3">
      <Image
        src="/fisker.svg" alt="fisker" width={100} height={100} className="w-12 sm:w-16 h-auto cursor-pointer hover:scale-110 transition-transform duration-300"/>
     <a className="flex gap-2 items-center">
      <Image src ="globe.svg" alt="globe" width={20} height={20} />
      <p className="text-sm sm:text-base">US</p>
     </a>
    
    </header>
    
    </div>
  );

}
export default HomePage;
