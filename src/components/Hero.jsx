export default function Hero(){


    return (
        <div className="relative flex flex-col items-center">
            <h1 className="text-8xl">Browse everything.</h1>
            <img src="../public/assets/browse.png" className="relative z-10  w-[70%] mt-40 border-black border-20 inset-1 object-fit rounded-2xl"/>
            <div className=" absolute bottom-0  bg-[var(--accent3)] w-full h-140 rounded-4xl z-0"></div>
        </div>
    )
}