import Button from "../components/Button";
function About() {
    return (
        <>
            <div className="bg-[url('/Users/victorcavalcanti/Desktop/projetos/TsProject/src/images/spices.jpg')] bg-cover h-screen flex justify-center">
                <div className="flex flex-col">
                    <div className="flex gap-30 p-6">
                        <Button name="Home" path="/" /> {/* Vai para a Home */}
                        <Button name="Menu" path="/menu" /> {/* Vai para a página Menu */}
                        <Button name="About" path="/about" /> {/* Vai para a página About */}
                    </div>
                    <p className="bg-black/50 mt-12 mx-auto w-auto text-white text-center text-5xl font-bold rounded-full">
                        About
                    </p>
                </div>
            </div>
        </>
    );
}

export default About;