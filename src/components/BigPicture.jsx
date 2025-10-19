export default function BigPicture(){


    return(
        <div className="flex flex-row justify-between gap-5">
            
            <div className="flex flex-col w-1/2">
           <div className=" border-b border-gray-200"></div>

                <h2 className="text-7xl py-20">See the Big Picture</h2>
                <p className="text-2xl text-gray-500 mb-10">Area turns your data into clear, vibrant visuals that show you exactly what's happening in each region.</p>   
                 
                   <List num="01" text="Spot Trends in Seconds: No more digging through numbers. " />
                   <List num="02" text="Get Everyone on the Same Page: Share easy-to-understand reports with your team. " />
                   <List num="03" text="Make Presentations Pop: Interactive maps and dashboards keep your audience engaged." />
                   <List num="04" text="Your Global Snapshot: Get a quick, clear overview of your entire operation." />

                <button className="rounded-full text-black bg-[var(--accent2)] w-40 p-4 font-bold mt-5">Discover More</button>
            </div>
            <img  className="w-1/2" src="../public/assets/seePicture.png"/>
        
        </div>
    )
}


function List({num,text}){


    return(

    <div>
       <div className=" border-b border-gray-300"></div>
       <div className="flex flex-row gap-10 py-8">
          <p className="text-3xl font-medium text-gray-500">{num}</p>
          <p className="text-2xl max-w-180" >{text}</p>
       </div>

    </div>

    )
}