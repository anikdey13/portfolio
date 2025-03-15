import { Navbar } from "../components/Navbar"
import "../App.css"
import { Hero } from "../components/Hero"
import { Header } from "../components/Header"
export const Home = () => {
  return (
    <section>
      <Header>
        <Navbar/>
        <Hero/>
      </Header>
       
    </section>
  )
}
