import pawprint from '@/assets/paw-print.png'
import cat from '@/assets/cat.png'
import { Button } from '../ui/button'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section id="hero" className="relative flex items-center justify-center min-h-screen ">
            <Image src={pawprint} alt="pawprint" className=' opacity-20' width={800} height={800} />
            <div className='absolute flex items-center w-full '>
                <div className='w-1/2 space-y-6'>
                    <h1 className='text-3xl font-semibold'>Ajude a trazer seu amigo de volta para casa ou adote um companheiro hoje!</h1>

                    <h2 className='text-2xl font-medium'>Se você encontrou um animal perdido ou deseja adotar um amigo de quatro patas,
                        estamos aqui para ajudar!
                    </h2>

                    <Button className='bg-[#A88DFF] font-semibold hover:bg-[#A88DFF]/90 cursor-pointer'>Clique aqui!</Button>

                    {/* Texto */}
                </div>
                <Image src={cat} alt="cat" className='w-1/2' />
            </div>
        </section>
    )
}

export default HeroSection