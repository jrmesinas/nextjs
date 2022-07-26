import Link from 'next/link'

export default function About(){
    return(
    <div>
        <ul>
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link> 
        </ul>
        <h1>THis is about page</h1>
    </div> 
    )
}