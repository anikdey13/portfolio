// import { Navbar } from "../components/Navbar"
// import { Footer } from "../components/Footer"
import { Header } from "../components/Header"
import { Hero } from "../components/Hero"
import "../App.css"
import "../index.css"
import { About } from "../components/About"
import { Mystack } from "../components/Mystack"
import { Education } from "../components/Education"
export const Home = () => {
  return (
    <section>
      <Header>
        <Hero/>
      </Header>
      <About/>
      <Mystack/>
      <Education/>
      {/* <Footer/> */}
       
    </section>
  )
}
