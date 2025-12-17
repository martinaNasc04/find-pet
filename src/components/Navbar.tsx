'use client'
import { Menu, PawPrint } from 'lucide-react'
import { useEffect } from 'react'

const Navbar = ({ menuOpen, setMenuOpen }: { menuOpen: boolean, setMenuOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    // verificar se menu está aberto
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : ""
    }, [menuOpen])

    return (
        <nav className='flex items-center justify-between font-bold text-(--moss-900) bg-(--parchment-100) py-2 md:py-3 px-8
        fixed top-0 z-40 w-full 
        backdrop-blur-lg  border-white/10 shadow-lg'>


            <a href="#" className='flex items-center justify-center gap-2'>
                <h1 className='text-2xl'>FindPet</h1>
                <PawPrint className='w-8 h-8' />
            </a>

            {/* Mobile Menu Icon */}
            <div className="relative z-40 h-5 cursor-pointer w-7 md:hidden" onClick={() =>
                setMenuOpen(prev => !prev)}>
                <Menu />
            </div>

            <div className='hidden gap-6 text-2xl md:flex'>
                <a href="#about"> Sobre FindPet</a>
                <a href="#services">Serviços</a>
                <a href="#contact">Contatos</a>
            </div>



        </nav>
    )
}

export default Navbar