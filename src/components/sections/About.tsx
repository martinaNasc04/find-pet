import Image from 'next/image'
import pawprint from '../../../public/assets/paw-print.png'
import dog from '../../../public/assets/dog1.png'

const AboutSection = () => {
    return (
        <section id="about" className="relative flex items-center justify-center min-h-screen ">
            <Image src={pawprint} alt="pawprint" className=' opacity-20 w-fit' width={800} height={800} />

            <div className='absolute items-center w-full md:space-x-28 md:flex'>
                <div className='space-y-4 md:w-1/2 md:space-y-6'>
                    <h1 className='text-4xl font-semibold md:text-6xl'>Sobre FindPet</h1>
                    <div className='space-y-6'>

                        <p className='font-medium text-justify md:text-2xl'>Bem-vindo ao FindPet, sua plataforma dedicada a unir animais perdidos e aqueles que buscam um lar amoroso.
                        </p>
                        <p className='font-medium text-justify md:text-2xl'>Nosso objetivo é criar uma comunidade de apoio, onde cada animal tenha a chance de encontrar o seu lugar ideal e cada dono possa reencontrar seu amigo de quatro patas.</p>
                    </div>




                </div>
                
                <Image src={dog} alt="cat" className='hidden w-1/3 h-1/3 md:flex' />
            </div>
        </section>
    )
}

export default AboutSection