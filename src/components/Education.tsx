export const Education = () => {
  return (
    <section className="bg-[#09090b] py-8 text-white">
      <div className="w-[80%] m-auto md:flex justify-between">
        <div className="w-full mb-8 md:w-[40%]">
          <h1 className="font-semibold text-xl">Education</h1>
        </div>
        <div className="w-full md:w-[60%]">
            <div className="rounded-sm bg-[#18181b] mb-4 p-4">
                <h1 className="font-semibold">Diploma In Engineering</h1>
                <p className="font-light">2020 - 2024</p>
                <p className="font-light">Headway Engineering Institute, Sylhet.</p>
                <p className="font-light">CGPA: 3.40 out of 4.00</p>
            </div>
            <div className="rounded-sm bg-[#18181b] p-4">
                <h1 className="font-semibold">Secondary School Certificate(SSC)</h1>
                <p className="font-light">2017-2019</p>
                <p className="font-light">Sylhet Technical School And College, Sylhet.</p>
                <p className="font-light">CGPA: 3.60 out of 5.00</p>
            </div>
            <div></div>
        </div>
      </div>
    </section>
  );
};
