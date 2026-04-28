import Image from "next/image";
import Link from "next/link";
import { BsArrowLeft, BsCodeSlash } from "react-icons/bs";
import TechBox from "@/component/portfolio/TechBox";
import TooltipClient from "@/component/portfolio/TooltipClient";
import BlockReveal from "@/component/portfolio/BlockReveal";

const getPortfolio = async (id) => {
  const res = await fetch(
    "https://raw.githubusercontent.com/Rabby-khan-04/portfolio-projects/main/projects.json",
    { cache: "no-store" },
  );

  const data = await res.json();

  return data.find((item) => item.id === Number(id)) || null;
};

const SinglePortfolioPage = async ({ params }) => {
  const { portfolioId } = await params;
  const currentPortfolio = await getPortfolio(portfolioId);

  if (!currentPortfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center text-light-gray">
        Project not found
      </div>
    );
  }

  const {
    title,
    description,
    tech = [],
    image,
    date,
    liveLink,
    clientCode,
    serverCode,
  } = currentPortfolio;

  return (
    <BlockReveal>
      <section className="grid lg:grid-cols-5 xl:grid-cols-3 min-h-screen">
        {/* Image Section */}
        <div className="lg:col-span-3 xl:col-span-2">
          {image && (
            <Image
              src={image}
              alt={title || "Project image"}
              width={1200}
              height={800}
              className="w-full h-auto object-cover"
              priority
            />
          )}
        </div>

        {/* Info Section */}
        <div className="relative px-4 sm:px-5 md:px-10 py-7.5 lg:col-span-2 xl:col-span-1 order-first lg:order-last">
          <div className="sticky top-8 space-y-6">
            {/* Back Button */}
            <div>
              <Link href="/" className="btn__rounded btn__glass">
                <BsArrowLeft className="text-light-gray text-2xl" />
              </Link>
            </div>

            {/* Title + Date */}
            <div className="flex items-center justify-between gap-4">
              <h2 className="hero__heading text-[32px]">{title}</h2>

              <div className="btn__pill btn__glass">
                <span className="text-light-gray text-sm">{date}</span>
              </div>
            </div>

            {/* Tech */}
            <div className="flex items-center gap-3 flex-wrap">
              {tech.map((techItem, index) => (
                <TechBox key={index} tech={techItem} />
              ))}
            </div>

            {/* Description */}
            <p className="text-lg text-light-gray leading-relaxed">
              {description}
            </p>

            {/* Links */}
            <div className="flex items-center gap-5 flex-wrap">
              <a
                className="btn__pill__xl btn__glass text-xl text-light-gray"
                href={clientCode}
                target="_blank"
                rel="noopener noreferrer"
                data-tooltip-id="client-code"
                data-tooltip-content="Client Side Code"
              >
                <BsCodeSlash className="text-2xl" />
                <TooltipClient id="client-code" />
              </a>

              {serverCode && (
                <a
                  className="btn__pill__xl btn__glass text-xl text-light-gray"
                  href={serverCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-tooltip-id="server-code"
                  data-tooltip-content="Server Side Code"
                >
                  <BsCodeSlash className="text-2xl" />
                  <TooltipClient id="server-code" />
                </a>
              )}

              <a
                className="btn__pill__xl btn__glass text-xl text-light-gray"
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live View
              </a>
            </div>
          </div>
        </div>
      </section>
    </BlockReveal>
  );
};

export default SinglePortfolioPage;
