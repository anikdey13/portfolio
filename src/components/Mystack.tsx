import { Stack } from "./Stack";
import { lang, frontend } from "../data/StackData";

export const Mystack = () => {
  return (
    <section className="bg-[#09090B] text-white py-8">
      <div className="w-[80%] m-auto md:flex justify-between">
        {/* section title */}
        <div className="w-full text-left mb-4 md:w-[40%]">
          <h1 className="text-xl font-semibold">My Stack</h1>
        </div>
        {/* section details */}
        <div className="w-full text-justify md:w-[60%]">
          {/* Stack Group */}
          <Stack title="Languages" stack={lang} />
          <Stack title="Frontend" stack={frontend} />
        </div>
      </div>
    </section>
  );
};
