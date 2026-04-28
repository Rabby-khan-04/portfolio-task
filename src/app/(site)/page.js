import About from "@/component/home/about/About";
import Banner from "@/component/home/banner/Banner";
import Contact from "@/component/home/contact/Contact";
import Process from "@/component/home/process/Process";
import Project from "@/component/home/project/Project";

export default function Home() {
  return (
    <>
      <Banner />
      <About />
      <Project />
      <Process />
      <Contact />
    </>
  );
}
