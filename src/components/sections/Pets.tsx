import Image from "next/image";
import pawprint from "../../../public/assets/paw-print.png";

const pets = [
    {
        name: "Mel",
        age: 2,
        local: "São Paulo, SP",
        image: "https://images.unsplash.com/photo-1506551109886-6101f48c1ab9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvZ3xlbnwwfDJ8MHx8fDA%3D",
        status: "Adoção",
    },
    {
        name: "Toby",
        age: 1,
        local: "Ribeirão Preto, SP",
        image: "https://images.unsplash.com/photo-1599765625577-61a6e65e3567?q=80&w=553&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Perdido",
    },
    {
        name: "Mona",
        age: 3,
        local: "Campinas, SP",
        image: "https://images.unsplash.com/photo-1737309657220-025e96d413fe?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        status: "Encontrado",
    },
];

const PetsSection = () => {
    return (
        <section
            id="services"
            className="relative flex items-center justify-center min-h-screen "
        >
            <Image
                src={pawprint}
                alt="pawprint"
                className=" opacity-20 w-fit"
                width={800}
                height={800}
            />
            <div className="absolute items-center justify-center w-full md:space-x-28 md:flex">
                <div className="flex flex-col items-center justify-center space-y-4 md:space-y-12">
                    <h1 className="text-4xl font-semibold md:text-6xl">
                        Animais postados recentemente
                    </h1>

                    <div className="grid w-full grid-cols-1 space-y-4 border-2 md:gap-10 md:grid-cols-3 border-amber-700">
                        {/* TODO: Fazer um carrousel para exibir os animais recentemente postados */}
                        {pets.map((pet) => (
                            <div
                                key={pet.name}
                                className="relative flex flex-col p-4 md:gap-4 md:p-6"
                            >
                                <Image
                                    src={pet.image}
                                    alt="Foto de um cachorro"
                                    width={300}
                                    height={300}
                                />
                                <div className="absolute p-4 text-white transform -translate-x-1/2 -translate-y-1/2 bg-black/50 top-1/2 left-1/2">
                                    <p className="font-semibold md:text-xl">
                                        Nome: {pet.name}
                                    </p>
                                    <p className="text-sm md:text-xl">
                                        Idade: {pet.age}
                                    </p>
                                    <p className="text-sm md:text-xl">
                                        Local encontrado:{pet.local}
                                    </p>
                                    <p className="text-sm md:text-xl">
                                        Status: {pet.status}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PetsSection;
