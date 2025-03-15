import { ReactNode } from "react"
// import bg from '../assets/bg1.webp'

interface HeaderProps{
    children: ReactNode;
}

export const Header = ({children}: HeaderProps) => {
  return (
    <section className="w-full h-screen bg-[url(../src/assets/bg1.webp)] bg-center">
        <div className="md:w-[80%] m-auto">

        {children}
        </div>
    </section>
  )
}
