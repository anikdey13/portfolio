import { Navbar } from "../components/Navbar"
import "../App.css"
import { Hero } from "../components/Hero"
export const Home = () => {
  return (
    <section className="md:w-[80%] m-auto">
       <Navbar/>
       <Hero/>
    </section>
  )
}
