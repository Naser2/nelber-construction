import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { Code } from "@heroui/code";
import { button as buttonStyles } from "@heroui/theme";
import Hero from "@/components/Hero/Hero";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import AboutUs from "@/components/about-us/AboutUs";
import ServicesSection from "@/components/services/Services";
import QuoteContactSection from "@/components/quote-and-contact/QuoteAndContact";
import CompletedProjects from "@/components/completed-projects/CompletedProjects";
import TestimonialsSection from "@/components/clients/Clients";
import ServicesGrid from "@/components/all-services/AllServices";
import Footer from "@/components/footer/Footer";
export default function IndexPage() {
  // data-[menu-open=true]:border-none  backdrop-blur-lg data-[menu-open=true]:backdrop-blur-xl
  return (
    <DefaultLayout>
      <HeroSection />
      {/* <Hero /> */}
      <ServicesGrid />
      {/* <ServicesSection /> */}

      <AboutUs />
      <CompletedProjects />
      <QuoteContactSection />
      <TestimonialsSection />
      <Footer />

      {/* <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="inline-block max-w-lg text-center justify-center">
          <span className={title()}>Make&nbsp;</span>
          <span className={title({ color: "violet" })}>beautiful&nbsp;</span>
          <br />
          <span className={title()}>
            websites regardless of your design experience.
          </span>
          <div className={subtitle({ class: "mt-4" })}>
            Beautiful, fast and modern React UI library.
          </div>
        </div>

        <div className="flex gap-3">
          <Link
            isExternal
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
            href={siteConfig.links.docs}
          >
            Documentation
          </Link>
          <Link
            isExternal
            className={buttonStyles({ variant: "bordered", radius: "full" })}
            href={siteConfig.links.github}
          >
            <GithubIcon size={20} />
            GitHub
          </Link>
        </div>

        <div className="mt-8">
          <Snippet hideCopyButton hideSymbol variant="bordered">
            <span>
              Get started by editing{" "}
              <Code color="primary">pages/index.tsx</Code>
            </span>
          </Snippet>
        </div>
      </section> */}
    </DefaultLayout>
  );
}


export  function HeroSection() {
  return (
    <section className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-start bg-black">
      <div className="absolute inset-0">
        <img
          src="/istockphoto-1297780275-612x612.jpg"
          alt="Construction Site"
          className="w-full h-full object-left object-cover opacity-100"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"/>
      </div>

      <div className="relative z-10 max-w-2xl text-white px-6 md:px-12 max-w-[512px] sm:pl-18 lg:pl-36 xl:pl-44">
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          We Deliver
        </h1>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          The Best <span className="text-green-500">Results</span>
        </h1>
        <p className="mt-4 text-gray-300 max-w-md ">
          Ex lateque dis sunt ambulat mitius est risus lius in out pestilentiam
          si sit respectum.
        </p>

        <div className="mt-6 flex space-x-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center hover:bg-green-700 transition">
            Our Services <span className="ml-2">→</span>
          </button>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition">
            View Project
          </button>
        </div>
      </div>
    </section>
  );
}
