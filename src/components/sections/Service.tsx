import Image from 'next/image'
import pawprint from '@/assets/paw-print.png'
import dog2 from '@/assets/dog2.png'

const services = [
    {
        title: "Postagem de animais perdidos",
        description: "Reporte animais perdidos para aumentar as chances de reencontro."
    },
    {
        title: "Adoção de animais",
        description: "Adote um novo amigo na seção de adoções"
    },
    {
        title: "Filtros de busca",
        description: "Utilize filtros na sua pesquisa para encontrar o animal desejado."
    }
]

const ServiceSection = () => {

    return (
        <section id="services" className="relative flex items-center justify-center min-h-screen ">
            <Image src={pawprint} alt="pawprint" className=' opacity-20 w-fit' width={800} height={800} />
            <div className='absolute items-center w-full md:space-x-28 md:flex'>
                <Image src={dog2} alt="cat" className='hidden w-1/3 h-1/3 md:flex' />
                <div className='space-y-4 md:w-1/2 md:space-y-6'>
                    <h1 className='text-xl font-semibold md:text-3xl'>Serviços</h1>


                    <ul className='space-y-4'>
                        {services.map((service) => (
                            <li key={service.title} >
                                <h3 className='font-semibold md:text-2xl'>{service.title}</h3>
                                <p className='font-medium md:text-2xl'>{service.description}</p>
                            </li>
                        ))}
                    </ul>





                </div>


            </div>
        </section>
    )
}

export default ServiceSection