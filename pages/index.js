import Head from 'next/head' 
import Image from 'next/image' 
import Link from 'next/link'
import styles from '../styles/Home.module.css' 

export default function Home() {
  return (
    <main>
      <header>
          <nav>
              <ul>
                <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link> 
              </ul>
          </nav>
      </header>
      <p>Hello this home page</p>
    </main>
  )
}
