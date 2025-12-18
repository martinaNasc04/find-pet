import pawprint from '@/assets/paw-print.png'
import cat from '@/assets/cat.png'
import { Button } from '../ui/button'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section id="hero" className="relative flex items-center justify-center min-h-screen ">
            <Image src={pawprint} alt="pawprint" className=' opacity-20 w-fit' width={800} height={800} />
            <div className='absolute items-center w-full md:flex '>
                <div className='space-y-4 md:w-1/2 md:space-y-6'>
                    <h1 className='text-xl font-semibold md:text-3xl'>Ajude a trazer seu amigo de volta para casa ou adote um companheiro hoje!</h1>

                    <h2 className='font-medium md:text-2xl'>Se você encontrou um animal perdido ou deseja adotar um amigo de quatro patas,
                        estamos aqui para ajudar!
                    </h2>

                    <Button size={'lg'} className='bg-[#A88DFF] font-semibold hover:bg-[#A88DFF]/90 cursor-pointer'>Clique aqui!</Button>

                    {/* Texto */}
                </div>
                <Image src={cat} alt="cat" className='hidden w-1/2 md:flex' />
            </div>
        </section>
    )
}

export default HeroSection