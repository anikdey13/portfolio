import { Navbar } from "../components/Navbar"
import "../App.css"
import { Hero } from "../components/Hero"
import { Header } from "../components/Header"
import { About } from "../components/About"
import { Mystack } from "../components/Mystack"
export const Home = () => {
  return (
    <section>
      <Header>
        <Navbar/>
        <Hero/>
      </Header>
      <About/>
      <Mystack/>
       
    </section>
  )
}
