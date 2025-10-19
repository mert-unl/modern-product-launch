
export default function Header () {

    return (
        <div className="flex flex-row justify-between text-center pb-40">
            <h3 className="font-medium text-4xl" >Area </h3>
            <div className="flex flex-row gap-5 mt-4">
                <Nav text="Benefits"></Nav>
                <Nav text="Specifications"></Nav>
                <Nav text="How-to"></Nav>
                <Nav text="Contact Us"></Nav>
            </div>
            <button className="bg-[var(--accent1)] text-white py-3 px-6 font-medium rounded-full">Learn More</button>
        </div>
    )

}


function Nav({text}){
      return(
        <p className="font-bold" >{text}</p>
      )
}