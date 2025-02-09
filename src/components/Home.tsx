import Button from "../components/Button";
import About from "/Users/victorcavalcanti/Desktop/projetos/type/src/components/About.tsx";
function Home() {
    return (
        <>
            <div className="bg-[url('/Users/victorcavalcanti/Desktop/projetos/type/src/images/spices.jpg')] bg-cover h-screen flex justify-center"  >

                <div className='flex flex-col'>
                    <div className='flex gap-30 p-6'>
                        <Button name='Home' />
                        <Button path="/about" element={<About />} name='Menu' />
                        <Button name='About' />
                    </div>
                    <p
                        className='bg-black/50 mt-12 mx-auto w-auto text-white text-center text-5xl font-bold rounded-full'
                    >Aroma Restaurant</p>
                    <p
                        className='bg-black/50 mt-100 w-75 ml-auto mr-auto text-white text-center text-1xl font-bold rounded-full'
                    >An exquisite culinary experience</p>
                </div>
            </div>
        </>
    );
}

export default Home
