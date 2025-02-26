import Navbar from "@/components/Navbar";

export default function UnderConstruction() {
    return (
        <div>
            <Navbar />
            <div className="">   
            <img src="/Logo/LogoFootyAI.png"></img>
            <div className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
                <div className="w-24 h-24 border-t-4 border-yellow-400 border-solid rounded-full animate-spin"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xl font-bold">⚠️</span>
                </div>
                <h1 className="mt-5 text-3xl font-extrabold">Under Construction</h1>
                <p className="mt-2 text-lg text-gray-400">We're working hard to bring you something amazing.</p>
            </div>
            </div>
            
        </div>
    );
}
