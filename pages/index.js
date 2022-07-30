import Head from 'next/head' 
import Image from 'next/image' 
import Link from 'next/link'
import bg from '../public/bg.png'

export default function Home() {
  return (
    <main style={{backgroundImage: `url(${bg})`}}>
      <header>
          <nav>
              <Link href={"/"}>
                  <a ><img src="jerryUI.svg"></img></a> 
              </Link>
              <ul className="" > 
                <li>
                  <Link href={"/"}>
                    <a >About me</a> 
                  </Link> 
                </li>
                <li>
                  <Link href={"/"}>
                    <a >Skills</a> 
                  </Link> 
                </li>
                <li>
                  <Link href={"/"}>
                    <a >Projects</a> 
                  </Link> 
                </li>
                <li>
                  <Link href={"/"}>
                    <a >Contacts</a> 
                  </Link> 
                </li>
              </ul>
          </nav>
      </header>
      <section className="container">
          <h2>Hello! My names is<br></br><span>Jerry Mesinas Jr.</span></h2>
          <img></img>
      </section>
    </main>
  )
}
