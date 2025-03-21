import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
// import { Header } from "../components/Header"
// import { Hero } from "../components/Hero"
import { Navbar } from "../components/Navbar"

export const Applayout = () =>{

    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    )
}