export default function Mission() {
  return (
    <section id="Mission" className="flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2 text-black">
        <h2 className="text-2xl font-semibold border-b-2 border-gray-400 inline-block pb-1 text-black">MISSION</h2>
        <h3 className="text-xl font-bold mt-4 text-black">Turning your data into insights</h3>
        <p className="mt-4 text-gray-700">
          <b>Hi, my name is Tina Kwok!</b> I’m a driven new graduate and aspiring data analyst currently working on projects to gain
          hands-on experience and create practical tools for solving real-world business challenges.
        </p>
        <p className="mt-4 text-gray-700">
          Through previous internships, I’ve gained valuable experience analyzing e-commerce data at SPARC Group, optimizing website
          engagement and retention. At the Office of Victim Services, I ensured accurate financial disbursements, while my time at Business
          Connect involved conducting market research to inform strategic decision-making.
        </p>
        <p className="mt-4 text-gray-700">
          I’m passionate about using data to uncover valuable insights and support data-backed decision-making. From crafting detailed
          visualizations to analyzing complex datasets, I love turning numbers into clear, actionable solutions that help businesses grow
          and improve. Thanks for visiting—I hope my work can accurately depict what I’m striving to achieve!
        </p>
      </div>
      <div className="md:w-[37.5%] flex justify-center ml-16">
        <img src="./body-shot.png" alt="Body Shot" className="w-full max-w-md rounded-lg shadow-lg" />
      </div>
    </section>
  );
}
