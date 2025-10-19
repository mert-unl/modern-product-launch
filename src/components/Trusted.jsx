export default function Trusted () {




    return(
<div className="py-20">

        <h3 className="text-xl text-gray-800">Trusted by:</h3>
        <div className="flex flex-row justify-between px-30">

            <Logo src="../public/assets/logoipsum1.svg" />
            <Logo src="../public/assets/logoipsum2.svg" />
            <Logo src="../public/assets/logoipsum3.svg" />
            <Logo src="../public/assets/logoipsum4.svg" />
            <Logo src="../public/assets/logoipsum5.svg" />
            <Logo src="../public/assets/logoipsum6.svg" />

        </div>
        <div className=" border-b border-gray-300 mt-20"></div>

</div>

    )
}




function Logo ({src}){
 
    return <img  src={src}  className="w-40 max-w-50 h-30"/>

}