import { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner_results';  
import Banner2 from '../components/Banner_Players';
import Footer from '../components/Footer';

export default function Home() {
    const [videoUrl, setVideoUrl] = useState('');

    const handleGenerate = async () => {
        if (!videoUrl) {
            alert('Please insert a video URL');
            return;
        }
        console.log('Video URL:', videoUrl);

        try {
            const response = await fetch('http://localhost:5000/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ videoUrl }),
            });
            const data = await response.json();
            console.log('AI Response:', data); 
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <Navbar />
            <h2 className='font-bebas text-6xl leading-normal tracking-normal text-[#DEDEDE] mx-auto my-0 text-center'>
                ONE MORE CLICK TO YOUR JOURNEY
            </h2>
            
            <div className="absolute top-0 left-0 w-full h-[84%] overflow-hidden mt-21">
                <video 
                    autoPlay 
                    muted 
                    loop 
                    className="mx-auto my-0 w-[85%] mt-[160px] h-full object-cover opacity-60"
                >
                    <source src="/video/FIFA World Cup™ Best Moments [OFFICIAL].mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            </div>

            <div className="flex flex-col justify-between h-[436px] relative z-10 items-center justify-center h-full text-white text-center">
                <h3 className='mt-[20px] font-bebas text-6xl leading-normal tracking-normal text-[#DEDEDE] mx-auto my-0 text-center'>
                    INSERT LINK
                </h3>
                
                <input 
                    type="url"
                    value={videoUrl}
                    onChange={(e) => setVideoUrl(e.target.value)}
                    placeholder='Insert your link here'
                    className='font-bebas text-3xl leading-normal mt-[140px] w-[400px] h-[70px] bg-[#24332A] rounded-[19px] opacity-100 placeholder-gray-400 pl-[9px]'
                    required
                />

                <button 
                    onClick={handleGenerate}
                    className='font-bebas leading-normal mt-[50px] w-[144px] h-[59px] bg-[#688273] rounded-[59px] opacity-90'>
                    GENERATE
                </button>

                <h4 className='z-10 left-[26px] top-[913px] absolute font-bebas text-6xl leading-normal tracking-normal text-[#DEDEDE] mx-auto my-0 text-center'>
                    LATEST RESULTS
                </h4>
                <Banner2 />

                <h4 className='z-10 left-[34px] absolute top-[660px] font-bebas text-6xl leading-normal tracking-normal text-[#DEDEDE] mx-auto my-0 text-center'>
                    TOP PLAYERS
                </h4>
                <Banner />

                <Footer />
            </div>
        </div>
    );
}