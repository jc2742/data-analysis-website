'use client';

import { useRouter } from 'next/navigation';

export default function Portfolio() {
  const router = useRouter();

  const projects = [
    {
      title: 'Coffee Shop Analysis',
      desc: 'This project involved analyzing coffee shop sales using Excel, where I demonstrated proficiency in lookup functions, pivot tables, slicers, and timelines. By utilizing these tools, I created a connected dashboard that provided a clear, visual representation of sales trends. This dashboard enables the team to make data-driven decisions to optimize operations and improve overall performance',
      link: 'https://livealbany-my.sharepoint.com/:x:/g/personal/tkwok_albany_edu/EUXczInYnJBIh-gR_EgBiUUBm92cz81KfLxefkt5UAEDJQ?e=sJTFw3', // Replace with actual link
      svg: <img src="   https://cdn-icons-png.flaticon.com/512/3354/3354187.png " width="25px" height="25px" className="img-small ml-2" />,
    },
  ];

  return (
    <section id="Portfolio" className="mt-12">
      <h2 className="text-2xl font-semibold border-b-2 border-gray-400 inline-block pb-1 text-black flex">PORTFOLIO</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-4 border rounded-lg bg-white text-black shadow-sm transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={() => window.open(project.link, '_blank')}>
            <h3 className="font-semibold flex">
              {project.title}
              {project.svg}
            </h3>
            <p className="text-gray-600 mt-2">{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
