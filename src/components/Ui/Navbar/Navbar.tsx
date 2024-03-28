import { useState } from 'react';
import logo from '../../../assets/logo.png';
import { FaGithub, FaLinkedin, FaList, } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Navbar() {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    };
    return (
        <div>
            <div className="flex  justify-between gap-2">
                <img src={logo} className='w-40' alt="" />
                <div className='px-2 py-2 flex  flex-col gap-x-3'>
                    <button onClick={handleClick} className="bg-gray-700 hover:bg-gray-500 focus:bg-gray-500 text-white font-bold py-2 px-4 rounded"><FaList /></button>
                    {isActive ? <div className='h-fit w-fit p-5 -ml-20 transition pt-5 mt-10 rounded-lg bg-black absolute '  >
                        <ul className='flex flex-col'>
                            <li ><a href="https://github.com/AriajSarkar/Chaemini-Ai"  className='flex items-center gap-2 hover:text-slate-500'><FaGithub /> github</a></li>
                            <li ><a href="" className='flex items-center gap-2 hover:text-slate-500'><FaLinkedin /> Linkedin</a></li>
                            <li ><a href="" className='flex items-center gap-2 hover:text-slate-500'><FaSquareXTwitter />Twitter</a></li>
                        </ul>

                    </div> : ''}

                </div>
            </div>

        </div>
    )
}
