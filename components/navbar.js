import { useState } from 'react'
import Image from 'next/image'


function NavLink({ to, children }) {
    return <a href={to} className={`mx-4`}>
        {children}
    </a>
}

function MobileNav({ open, setOpen }) {
    return (
        <div className={`absolute top-0 left-0 h-screen w-screen bg-white transform ${open ? "-translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out filter drop-shadow-md `}>
            <div className="flex items-center justify-center h-20 bg-white filter drop-shadow-md"> {/*logo container*/}
                <a className="text-xl font-semibold" href="/"><Image src="/hashtag-new-logo-header.svg" alt="site logo" width={128} height={77} /></a>
            </div>
            <div className="flex flex-col ml-4">
                <a className="my-4 text-xl font-medium" href="" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Shopify
                </a>
                <a className="my-4 text-xl font-normal" href="" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Blog
                </a>
                <a className="my-4 text-xl font-medium" href="" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Careers
                </a>
                <a className="my-4 text-xl font-normal" href="" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Case Studies
                </a>
                <a className="my-4 text-xl font-medium" href="" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    About Us
                </a>
                <a className="my-4 text-xl font-normal" href="" onClick={() => setTimeout(() => { setOpen(!open) }, 100)}>
                    Contact Us
                </a>

            </div>
        </div>
    )
}

export default function Navbar() {

    const [open, setOpen] = useState(false)
    return (
        <nav className="fixed z-10 flex items-center justify-between w-full h-20 px-4 py-4 bg-white filter drop-shadow-md">
            <MobileNav open={open} setOpen={setOpen} />
            <div className="flex items-center ">
                <a className="text-2xl font-semibold" href="/"><Image src="/hashtag-new-logo-header.svg" alt="site logo" width={128} height={77} /></a>
            </div>
            <div className="flex items-center ">

                <div className="relative z-50 flex flex-col items-center justify-between w-8 h-8 md:hidden" onClick={() => {
                    setOpen(!open)
                }}>
                    {/* hamburger button */}
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-3.5" : ""}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transition-all duration-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                    <span className={`h-1 w-full bg-black rounded-lg transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-3.5" : ""}`} />
                </div>

                <div className="hidden md:flex">
                    <NavLink to="">
                        Shopify
                    </NavLink>
                    <NavLink to="">
                        Blog
                    </NavLink>
                    <NavLink to="">
                        Careers
                    </NavLink>
                    <NavLink to="">
                        Case Studies
                    </NavLink>
                    <NavLink to="">
                        About Us
                    </NavLink>
                    <NavLink to="">
                        Contact Us
                    </NavLink>
                </div>
            </div>
            <div className="flex items-center ">
                <button
                    className={` bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
                >
                    EN
                </button>
                <button
                    className={` bg-blue-500 p-4 text-white rounded hover:bg-blue-700 hover:shadow-xl`}
                >
                    LET'S SPEAK
                </button>
            </div>
        </nav>
    )
}
