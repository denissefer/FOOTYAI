export default function Footer() {
    return (
        <nav className="footer-nav justify-around bg-[#24332A] flex w-full mt-[850px]  h-[306px]">
        
            <div className="justify-around flex-col flex   h-[180px]">
            <img  src="/Logo/LogoFootyAI copy 5.png" alt="FootyAI Logo" className="mt-[29px] w-[100px] h-[56px]"/>
            <p>Beta Version 1.0.0</p>
            </div>
            <ul className=" font-extrabold text-[#FAEDED] font-[poppins] justify-evenly flex-col flex " >
                <li>CONTACT</li>
                <li>WEBSITE MAP</li>
                <li>FOOTYAI LIVE</li>
                <li>MY LIST</li>
                <li>PLAYERS</li>   
            </ul>
            <ul className=" font-extrabold text-[#FAEDED] font-[poppins] justify-evenly flex-col flex ">
                <li>ABOUT FOOTYAI</li>
                <li>PRIVACY POLICY</li>
                <li>TERMS OF SERVICE</li>
                <li>FAQ</li>
                <li>CONTACT</li>
            </ul>
            <div className=" mt-[26px] font-extrabold text-[#FAEDED] font-[poppins] justify-evenly flex-col flex justify-around flex-col flex h-[180px]">
                <h4>GET IN TOUCH</h4>
                <div className="gap-[40px] flex m-auto">
                    <img src="socialmedia-icons/facebook.png"></img>
                    <img src="socialmedia-icons/instagram.png"></img>
                    <img src="socialmedia-icons/linkedin.png"></img>
                </div>
                <p>© 2025 FOTTYAI. All rights reserved. | Privacy Policy | Terms of Service</p>
            </div>

        </nav>
    );
}
