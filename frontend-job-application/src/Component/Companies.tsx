import { Marquee } from "@mantine/core";
import { companies } from "../Data/Data";

const Companies: React.FC = () => {
  return (
    <section className="w-full py-10 bg-slate-950">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white">
          Trusted by Top Companies
        </h2>
        <p className="text-slate-500 text-sm mt-2">
          We connect you with the best organizations worldwide
        </p>
      </div>

      {/* Marquee */}
      <Marquee repeat={3} duration={5000} gap="xl" className="px-4" pauseOnHover={true}>
        {companies.map((comp, index) => (
          <div
            key={index}
            className="flex-shrink-0 group"
          >
            {/* Card */}
            <div className="
              bg-white 
              px-6 py-4 
              rounded-2xl 
              shadow-sm 
              border 
              border-slate-200
              transition-all duration-300
              group-hover:shadow-md
              group-hover:scale-105
            ">
              <img
                className="h-12 w-auto object-contain mx-auto group-hover:grayscale-0 transition"
                src={`/companies/${comp}.png`}
                alt={comp}
              />
            </div>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default Companies;