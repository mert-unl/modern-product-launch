export default function Benefits (){


    return(
        <div className="mt-10">
          <div className="flex gap-20 flex-col">

        
          <h3 className="text-xl text-gray-800">Benefits</h3>
          <h2 className=" text-black text-7xl">We've cracked the code.</h2>
          <p className="text-2xl text-gray-500">Area provides real insight, without the data overload.</p>       
          <div className=" border-b border-gray-300 mt-10"></div>
          </div>
           
           <div className="flex flex-row justify-between">

            <BenefitCard icon="../public/assets/dataIcon.png" title="Amplify Insights" text="Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth." />
            <BenefitCard icon="../public/assets/worldIcon.png" title="Control Your Global Presence"  text="Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere."/>
            <BenefitCard icon="../public/assets/languageIcon.png" title="Remove Language Barriers" text="Adapt to diverse markets with built-in localization for clear communication and enhanced user experience." />
            <BenefitCard icon="../public/assets/languageIcon.png" title="Visualize Growth" text="Generate precise, visually compelling reports that illustrate your growth trajectories across all regions." />

           </div>
              <img  className="py-30 w-screen" src="../public/assets/heroImage.png"/>

        </div>
    )
}


function BenefitCard({icon,title,text}){
return(
      <div className="max-w-85 flex flex-col gap-6 py-15 ">
        <img className="w-8 h-8" src={icon}/>
        <h3 className="text-2xl text-gray-800 font-medium">{title}</h3>
        <p className="text-xl text-gray-700">{text}</p>
      </div>
  )
}