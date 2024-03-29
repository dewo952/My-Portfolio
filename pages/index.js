import Head from "next/head";
import Image from "next/image";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import deved from "../public/assets/devedwave.png";

import AboutMe from "../components/AboutMe";
import ContactMe from "../components/ContactMe";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Fade from "react-reveal/Fade";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Diven I Frontend Developer </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <script
          src="//code.tidio.co/hmqqrec7s4edya9xzjqlfdhrjsjjwneo.js"
          async
        ></script>
      </Head>
      <div className="bg-gray-200">
        <main className="px-10 md:px-20 lg:px-40">
          <section className="min-h-screen">
            <nav className="py-10 mb-12 flex justify-between">
              <h1 className="font-burtons text-xl">Hello</h1>
              <ul className="flex items-center">
                <li>
                  <a
                    className="bg-gradient-to-r from-cyan-500 text- to-teal-500 px-4 py-2 border-none rounded-md ml-8"
                    href="./Resume"
                  >
                    Resume
                  </a>
                </li>
              </ul>
            </nav>
            <div className="text-center p-10 py-10">
              <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
                Diven Khatri
              </h2>
              <h3 className="text-2xl py-2 md:text-3xl">
                Frontend Developer
              </h3>
              <p className="text-md py-2 leading-8 text-gray-800 max-w-5xl mx-auto">
                Frontend React Developer specializing in building (and
                occasionally designing) exceptional digital experiences.
                Currently, I&apos;m focused on building responsive web and
                mobile applications
              </p>
              <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 ">
                <a
                  href="https://www.linkedin.com/in/diven-khatri-0199a6213/"
                  className="hover:text-sky-600"
                >
                  <AiFillLinkedin />
                </a>
                <a
                  href="https://github.com/dewo952?tab=repositories"
                  className="hover:text-neutral-900"
                >
                  <AiFillGithub />
                </a>
              </div>
              <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
                <Image src={deved} alt="/" fill objectFit="cover" />
              </div>
            </div>
          </section>

          <section>
            <Fade bottom>
              <AboutMe />
            </Fade>
            <Fade bottom>
              <Skills />
            </Fade>
            <Fade bottom>
              <Projects />
            </Fade>
            <Fade bottom>
              <ContactMe />
            </Fade>
          </section>
        </main>
      </div>
    </div>
  );
}
