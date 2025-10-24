export default function Specs(){

     const specs = [
        [
            [{
            check:"x",
            text:"Ultra-fast browsing"
            }],[{
            check:"x",
            text:"Advanced AI insights"
            }],[{
            check:"x",
            text:"Seamless integration"
            }],[{
            check:"x",
            text:"Advanced AI insights"
            }],[{
            check:"x",
            text:"Ultra-fast browsing"
            }],[{
            check:"x",
            text:"Full UTF-8 support"
            }]
        ],
        [
                [{
                check:"x",
                text:"Fast browsing"
                }],[{
                check:"x",
                text:"Basic AI recommendations"
                }],[{
                check:"x",
                text:"Restricts customization"
                }],[{
                check:"x",
                text:"Basic AI insights"
                }],[{
                check:"x",
                text:"Moderate speeds"
                }],[{
                check:"x",
                text:"Potential display errors"
                    }]
        ],
        [
            [{
            check:"x",
            text:"Moderate speeds"
            }],[{
            check:"x",
            text:"Steep learning curve"
            }],[{
            check:"x",
            text:"No AI assistance"
            }],[{
            check:"x",
            text:"Restricts customization"
            }],[{
            check:"x",
            text:"Basic AI insights"
            }],[{
            check:"x",
            text:"Partial UTF-8 support"
            }]
        ]
    ]
        

    return(
        <div >
            <div className="border-1 mt-40 border-gray-300"></div>
            <div className="items-center flex flex-col justify-center py-40 gap-15">
                <p className="text-gray-700 text-xl">Specs</p>
                <h1 className="text-8xl">Why Choose Area?</h1>     
                <p className="text-2xl w-280 text-center text-gray-600">You need a solution that keeps up. That’s why we developed Area. A developer-friendly approach to streamline your business. </p>
                <button className="rounded-full text-black bg-[var(--accent2)] w-50 p-5 text-lg font-bold mt-5">Discover More</button>

                <div className="flex flex-row justify-between mt-42">
                        <SpecCard  title="Area" i={specs[0]} />
                        <SpecCard  title="WebSurge" i={specs[1]} />
                        <SpecCard  title="HyperView" i={specs[2]} />
                </div>

            </div>

              <SpecBottom/>
        </div>
    )
}


function SpecCard ({title,i}){
  return(
    <div className="flex flex-col w-140">
      <h2 className="text-2xl text-center font-semibold mb-2 text-gray-500">{title}</h2>
          <div className="border-b border-gray-400 mt-10"></div>

      {i.map((a,index) =>
        <SpecDot key={index} check={a[0].check} text={a[0].text}/>
      )}

    </div>
  )
}



function SpecDot({check,text}){

    return(
    <div className="flex flex-row gap-4 py-10  px-10 border-1 text-center border-gray-100">
        <p className="text-lg">{check}</p>
        <p className="text-black text-lg">{text}</p>
    </div>
    )
}


function SpecBottom(){
      
    return(
        <div className="flex flex-row gap-6 mt-10">
           <img  className=" h-250" src="../public/assets/spec.png"/>
           
           <div className="flex flex-col  px-20 border-t-1 border-gray-300">

            <p className="text-5xl py-20 mt-40 font-medium">“I was skeptical, but Area has completely transformed the way I manage my business. The data visualizations are so clear and intuitive, and the platform is so easy to use. I can't imagine running my company without it.”</p>
            <p className="text-2xl text-black py-2 font-medium">John Smith</p>
            <p className="text-xl text-[var(--accent1)]">Head of Data</p>
           </div>

        </div>
    )


}