export default function Map (){



    return(
        <div className="mt-40">  
          <MapHeader/>   
          <div className="flex flex-row justify-between gap-6 py-20">
            <Nums  num="01" title="Get Started" text="With our intuitive setup, you’re up and running in minutes."/>
            <Nums  num="02" title="Customize and Configure" text="Adapt Area to your specific requirements and preferences." />
            <Nums  num="03" title="Grow Your Business" text="Make informed decisions to exceed your goals." />
          </div>  

          <img className="rounded-[38px]  mt-40 h-250" src="../public/assets/map.png"/>
          <div className="border-1 text-gray-200 mt-15"></div>
         
         <Connect/>
          <div className="border-1 text-gray-200 mt-15"></div>

        </div>


    )
}





function MapHeader(){

    return(
        <div>
           <div className="border-1 text-gray-200"></div>


           <div className="flex flex-row justify-between py-30">  
            <h2 className="text-7xl">Map Your Succes</h2>
            <button className="rounded-full text-black bg-[var(--accent2)] w-40 p-4 font-bold mt-5">Discover More</button>

           </div>
           <div className="border-1 text-gray-200"></div>
        </div>
    )
}


function Nums({num,title,text}){
return(
    <div className="w-190">
        <h2 className="text-9xl text-gray-400">{num}</h2>
        <p className="mt-20 text-black font-medium text-2xl">{title}</p>
        <p className="mt-6  text-gray-500 text-2xl">{text}</p>
    </div>
)
}

function Connect(){


    return(
        <div className="text-center align-middle py-40">
            <h2 className="text-7xl ">Connect with us</h2>
            <p className="text-2xl py-20 px-110 text-gray-500 ">Schedule a quick call to learn how Area can turn your regional data into a powerful advantage.</p>
            <button className="border-1 text-2xl font-medium bg-[var(--accent1)] py-6 px-110  justify-center rounded-full text-white max-w-fit">Learn More</button>
        </div>
    )
}