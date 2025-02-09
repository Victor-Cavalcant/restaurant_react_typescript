import { useNavigate } from "react-router-dom"

function Button(props: any ) {
    

    return (
        <button
            className='bg-black/50 w-20 h-6 text-white text-center cursor-pointer rounded-full'
        >{props.name}</button>
    )
}

export default Button