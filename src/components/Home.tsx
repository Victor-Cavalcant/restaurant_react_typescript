import Button from "../components/Button";

function Home() {
    return (
        <>
            <div className="bg-[url('/Users/victorcavalcanti/Desktop/projetos/type/public/images/spices.jpg')] bg-cover h-screen flex justify-center"  >

                <div className='flex flex-col items-center sm:items-start text-center sm:text-left'>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-30 p-6'>
                        <Button path="/"  name='Home' />
                        <Button path="/menu" name='Menu' />
                        <Button path="/about"  name='About' />
                    </div>
                    <p
                        className='bg-black/50 mt-6 sm:mt-12 px-6 py-2 w-auto text-white text-3xl sm:text-5xl font-bold rounded-full mr-auto ml-auto'
                    >Aroma Restaurant</p>
                    <p
                        className='bg-black/50 mt-[40vh] px-4 py-2 w-full max-w-lg text-white text-center sm:text-xl font-bold rounded-full mr-auto ml-auto'
                    >An exquisite culinary experience</p>
                </div>
            </div>
        </>
    );
}

export default Home
