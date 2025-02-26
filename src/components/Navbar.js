export default function Navbar() {
    return (
        
<nav id="navBar" className="flex justify-between mx-auto mt-[20px] bg-[#688273] bg-opacity-90  -2 h-[65px] ">

<img id="img" className="mt-[16px] ml-[22px] w-[98px] h-8"
src="/Logo/LogoFootyAI copy 5.png" alt="FootyAI Logo" />
        <div className="navPart2 w-[45%] justify-between flex gap-4 "> 
        <div className="items-center w-[77%] ml-[278px] flex">
                <ul className=" w-full flex justify-between space-x-6 text-[#FBFBFB] text-opacity-80 font-inter font-normal text-[14px] leading-normal" >
                    <li className="relative cursor-pointer transition-all duration-300 ease-in-out hover:text-opacity-100 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FBFBFB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Home</li>
                    <li className="relative cursor-pointer transition-all duration-300 ease-in-out hover:text-opacity-100 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FBFBFB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">About</li>
                    <li className="relative cursor-pointer transition-all duration-300 ease-in-out hover:text-opacity-100 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FBFBFB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">How it works</li>
                    <li className="relative cursor-pointer transition-all duration-300 ease-in-out hover:text-opacity-100 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FBFBFB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Tools</li>
                    <li className="relative cursor-pointer transition-all duration-300 ease-in-out hover:text-opacity-100 hover:scale-105 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#FBFBFB] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full">Blog</li>
                </ul>
            </div>
            <div className="items-center justify-around w-[23%] flex mr-[20px] gap-4"> 
                <button className="h-[33px] w-[90px] bg-[#9F9B9B] bg-opacity-20 rounded-[72px] font-inter font-extrabold text-[14px] leading-normal text-[#FBFBFB] text-opacity-80 transition-all duration-300 ease-in-out hover:bg-opacity-40 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)] hover:scale-105 hover:-translate-y-1">Sign Up</button>
                <button className="h-[33px] w-[90px] bg-[#9F9B9B] bg-opacity-20 rounded-[72px] font-inter font-extrabold text-[14px] leading-normal text-[#FBFBFB] text-opacity-80 transition-all duration-300 ease-in-out hover:bg-opacity-40 hover:shadow-[0px_0px_15px_rgba(255,255,255,0.5)] hover:scale-105 hover:-translate-y-1">Log In</button>
            </div>
        </div>
             </nav>
    )
}


