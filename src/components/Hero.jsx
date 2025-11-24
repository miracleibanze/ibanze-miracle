import { memo, useContext } from "react";
import { cvDocument, gradient, profile } from "../assets";
import { social } from "../features/constants";
import Button from "./design/Button";
import LazyLoadedImage from "./design/ImageLazyLoad";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div className="my-20 flex w-full flex-1 flex-col items-center" id="hero">
      <div className="flex w-full flex-col items-center gap-4 md:flex-row">
        <div className="relative flex w-full flex-col gap-6 md:w-[60%]">
          <div className="light fade-down border-primary aspect-auto w-full rounded-3xl px-8 py-6">
            <p className="tagline">Web Developer</p>
            <div className="font-code h3 mb-3 font-semibold leading-none tracking-tight sm:h2">
              Hello, I'm
              <br />
              <span className="text-primary h2 sm:h1">IBANZE Miracle</span>
            </div>
            <p className="body-1 mb-4 leading-tight">
              A passionate web developer with expertise in creating intuitive
              and engaging digital experiences. I specialize in both front-end
              and back-end technologies to deliver high-quality web solutions.
            </p>
            <div className="flex w-max max-w-md flex-col items-start gap-4 md:w-full md:flex-row md:items-center">
              <Button className="px-12" href={cvDocument}>
                Download CV
              </Button>
              <div className="flex flex-1 items-center justify-center gap-4">
                {social.map((item) => (
  <a
    href={item.url}
    target="_blank"
    rel="noopener noreferrer"
    key={item.name}
    className="border-colorful flex aspect-square h-10 items-center justify-center rounded-full p-1.5"
  >
    <img src={item.icon} className="h-full w-full" />
  </a>
))}

              </div>
            </div>
          </div>
          <div className="flex-between-hor w-full">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-80}
              className="flex-center-both light border-primary h-24 w-auto rounded-md px-4 py-3"
            >
              <span className="h4 font-extrabold">4</span>
              <span className="text-center">Compeleted projects</span>
            </Link>
            <Link
              to="skills"
              smooth={true}
              duration={300}
              offset={-80}
              className="flex-center-both light border-primary h-24 w-auto rounded-md px-4 py-3"
            >
              <span className="h4 font-extrabold">11</span>
              <span className="text-center">Key technologies</span>
            </Link>
          </div>
        </div>
        <div className="relative flex w-full items-center justify-center md:w-[40%]">
          <LazyLoadedImage
            src={profile}
            alt="Example"
            placeholder="#e0e0e0"
            className="fade-in z-10 h-[30rem] w-full object-contain object-top pb-6"
          />
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
