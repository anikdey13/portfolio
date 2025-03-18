// import { lang } from "../data/StackData";
// import { frontend } from "../data/StackData";

import { ReactNode } from "react";

type stack = {
  lang: string;
  icon: ReactNode;
};

interface PropsType {
  title: string;
  stack: stack[];
}

export const Stack = ({ title, stack }: PropsType) => {
  return (
    <>
      {/* Stack Group */}
      <div className="flex gap-8 mb-8">
        <div className="text-left">
          <p>{title}</p>
        </div>
        <div className="flex gap-4 items-center flex-wrap">
          {stack.map((stack) => {
            return (
              <button
                key={Math.random()}
                className="flex gap-2 bg-[#18181b] items-center border-1 rounded-4xl px-2 font-light text-sm transition-all hover:bg-[#27272a]"
              >
                {stack.icon}
                {stack.lang}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
};
