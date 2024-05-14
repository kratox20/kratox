import './index.css'
import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
} from 'react-icons/fa';

export default function Footer() {
    return (
        <div className=" bg-black max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
            <div>
                <h1 className='text-[#00df9a] font-bold text-3xl w-full'>CrazyFizz.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sapiente consectetur nam blanditiis repellat eaque omnis assumenda reiciendis vero eveniet ullam maiores deserunt, rem quod placeat dolores facilis ipsam inventore?</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30} />
                    <FaTwitterSquare size={30} />
                    <FaInstagram size={30} />
                </div>
            </div>
        </div>
    )
}