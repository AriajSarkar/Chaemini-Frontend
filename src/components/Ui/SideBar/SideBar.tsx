import { useState, useEffect } from 'react';
import { FaList as FaList6, FaGithub as FaGithub6, FaLinkedin as FaLinkedin6, FaSquareXTwitter as FaSquareXTwitter6 } from "react-icons/fa6";
import { HiX } from "react-icons/hi";

export default function SideBar() {
    const [isActive, setIsActive] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        setIsActive(!isActive);
    };

    return (
        <div className="z-20">
            {isMobile && (
                    <div className='px-2 py-2 flex flex-col gap-x-3'>
                        <button onClick={handleClick} title="Toggle menu" className="bg-gray-700 hover:bg-gray-500 focus:bg-gray-500 text-white font-bold py-2 px-4 rounded z-30" type="button">
                            {isActive ? <HiX /> : <FaList6 />}
                        </button>
                        {isActive ? (
                            <div className={`right-0 top-[-2.5rem] h-[100vh] w-[50%] p-5 -ml-20 pt-5 mt-10 rounded-lg bg-black absolute z-20`}>
                                <ul className='fixed bottom-2 text-2xl right-2 flex flex-row gap-3'>
                                    <li><a href="https://github.com/AriajSarkar/Chaemini-Ai" target='blank' className='flex items-center gap-1 hover:text-slate-500'><span className="sr-only">GitHub</span><FaGithub6 /></a></li>
                                    <li><a href="" className='flex items-center gap-1 hover:text-slate-500' target='blank'><span className="sr-only">LinkedIn</span><FaLinkedin6 /></a></li>
                                    <li><a href="" className='flex items-center gap-1 hover:text-slate-500' target='blank'><span className="sr-only">Twitter</span><FaSquareXTwitter6 /></a></li>
                                </ul>
                            </div>
                        ) : null}
                    </div>
            )}
        </div>
    );
}
