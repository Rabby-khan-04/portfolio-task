"use client";

import Image from "next/image";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

const ProjectCard = ({ project, index }) => {
  const { id, title, description, thumbnail, date } = project;

  return (
    <Link
      href={`/portfolio/${id}`}
      className={`block cursor-pointer ${index % 2 === 1 ? "lg:mt-24" : ""}`}
    >
      <div className="project__card link">
        {/* Thumbnail */}
        <div className="project__thumbnail mb-4 p-10 md:p-16 xl:p-20">
          <Tilt
            className="parallax-effect-glare-scale mx-auto w-full overflow-hidden rounded-xl sm:w-[380px]"
            perspective={2500}
            glareEnable
            glareMaxOpacity={0.45}
            scale={1.05}
          >
            <Image
              src={thumbnail}
              alt={title}
              width={380}
              height={442}
              className="mx-auto w-full rounded-xl opacity-70 transition-all duration-300 hover:opacity-100"
            />
          </Tilt>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center justify-between">
            <h2 className="hero__heading text-[32px]">{title}</h2>

            <div className="btn__glass btn__pill">
              <span className="text-sm text-light-gray">{date}</span>
            </div>
          </div>

          <p className="text-base text-light-gray">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
