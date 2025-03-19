import { Navbar } from "../components/Navbar"
import "../App.css"
import "../index.css"
import { Hero } from "../components/Hero"
import { Header } from "../components/Header"
import { About } from "../components/About"
import { Mystack } from "../components/Mystack"
import { Education } from "../components/Education"
import { Footer } from "../components/Footer"
export const Home = () => {
  return (
    <section>
      <Header>
        <Navbar/>
        <Hero/>
      </Header>
      <About/>
      <Mystack/>
      <Education/>
      <Footer/>
       
    </section>
  )
}
