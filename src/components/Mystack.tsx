import { RiJavascriptFill, RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";


export const Mystack = () => {
  return (
    <section className="bg-[#09090B] text-white py-8">
      <div className="w-[80%] m-auto flex justify-between gap-4">
        <div className="pl-16">
          <h1 className="text-xl font-semibold">My Stack</h1>
        </div>
        <div className="flex gap-4">
          <button className="flex gap-2 items-center border-1 rounded-4xl px-2 font-light">
            <RiJavascriptFill color="yellow" />
            Javascript
          </button>
          <button className="flex gap-2 items-center border-1 rounded-4xl px-2 font-light">
            <BiLogoTypescript color="skyBlue" />
            Typescript
          </button>
          <button className="flex gap-2 items-center border-1 rounded-4xl px-2 font-light">
          <RiReactjsFill color="skyBlue" />
            React
          </button>
          <button className="flex gap-2 items-center border-1 rounded-4xl px-2 font-light">
          <RiTailwindCssFill color="skyBlue" />
            Tailwindcss
          </button>
        </div>
      </div>
    </section>
  );
};
