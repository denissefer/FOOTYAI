import Navbar from '../components/Navbar';
import Banner from '../components/Banner_results';  
import Banner2 from '../components/Banner_Players';
import Footer from '../components/Footer';

export default function Home() {
    return (
        <div>
            <Navbar />
            <h2>ONE MORE CLICK TO YOUR JOURNEY</h2>
            <div className="absolute top-0 left-0 w-full h-[84%] overflow-hidden mt-21">
                <video className="absolute top-[90px] left-[138px] w-[81%]"
                    autoPlay 
                    muted 
                    loop 
                    className="mx-[auto] my-[0] w-[85%] mt-[160px] h-full object-cover opacity-60"
                >
                    <source src="/video/FIFA World Cup™ Best Moments [OFFICIAL].mp4" type="video/mp4" />
                </video>
                
                
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            </div>

           
            <div className="flex flex-col justify-between h-[436px] relative z-10 flex items-center justify-center h-full text-white text-center">
                <h2 className="text-4xl font-bold">ONE MORE CLICK TO YOUR JOURNEY</h2>
                <h3>INSERT LINK</h3>
                <input type="url" placeholder='Insert your link here' required></input>
                <button>GENERATE</button>
                <h4>LATEST RESULTS</h4>
                <Banner2/>
                <h4>TOP PLAYERS</h4>
                <Banner/>
                <Footer/>
            </div>
        </div>
    );
}






