import React from 'react'

const MobileMenu = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.9)] z-40 flex flex-col items-center justify-center
            transition-all duration-300 ease-in-out
            ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
            `}>
            <button className="absolute text-3xl text-white cursor-pointer top-6 top-r-6 focus:outline-none"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}>
                &times;
            </button>


            <a href="#about" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ?
                    "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}>Sobre FindPet</a>
            <a href="#services" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ?
                    "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}>Serviços</a>
            <a href="#contact" onClick={() => setMenuOpen(false)} className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300
                    ${menuOpen ?
                    "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}>Contato</a>

        </div>
    )
}

export default MobileMenu