import { Link } from "react-router-dom"

export default function Home(){
    return(
        <>
        <div className="w-100% bg-black/30 bg-blend-multiply bg-[url('./bak.jpeg')] bg-cover bg-center flex justify-center items-center h-screen">
        <div className="w-[25rem]  bg-white/5 rounded-3xl hover:scale-105 duration-200 backdrop-blur-lg border border-white/30 p-10 py-28">
        <div className="flex flex-col gap-8">
            <Link to='/Login'><button  className="w-[20rem] h-12 rounded-3xl px-4 background-blur-lg bg-white/10 text-white/70 hover:bg-white/40 hover:scale-105 duration-300 "> Log in</button></Link>
           <Link to='/Signin'> <button  className="w-[20rem] h-12 rounded-3xl px-4 background-blur-lg bg-white/10 text-white/70  hover:bg-white/40 hover:scale-105 duration-300 ">Register</button></Link>
             <p className="text-white/50  hover:border-b-2 hover:border-white/40">if you have an account click on <Link to='/Signin' className="text-blue-200 underline" >Register</Link> </p>
        </div>
       
        
        </div>
        
        </div>
        
        </>
    )
}