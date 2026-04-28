import BackgroundSquare from "@/component/shared/BackgroundSquare";
import ProcessCard from "./ProcessCard";
import { processData } from "@/constant/process";

const Process = () => {
  return (
    <section className="process py-10 sm:py-16 md:py-20 lg:py-32">
      <div className="container relative">
        <BackgroundSquare count={4} />
        <div className="intro text-center max-w-4xl mx-auto">
          <h2 className="hero__heading text-5xl md:text-6xl lg:text-7xl font-medium mb-4">
            The Alchemy <br />
            of Creation
          </h2>
          <p className="text-light-gray text-xl">
            Diving into the Steps and Strategies of my Creative Process
          </p>
        </div>
        <div className="mt-12 grid lg:grid-cols-2 gap-8 max-lg:max-w-2xl max-lg:mx-auto">
          {processData.map((info, index) => (
            <ProcessCard
              key={index}
              phase={info.phase}
              title={info.title}
              intro={info.intro}
              description={info.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
