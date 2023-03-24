const AboutMe = () => {
  return (
    <div id="about" className="w-full h-screen  text-black-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl align-center font-bold inline border-b-4 border-pink-600 text-teal-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold text-teal-600">
            <p>I'm Frontend Developer. Please take a look around.</p>
          </div>
          <div className="text-xl">
            <p>
              I'm a <b>Frontend Developer</b> specialized in building{" "}
              <b>UI/UX</b> of Websites, Web Applications and Mobile
              Application using <b>React-Js</b> and <b>React-Native</b> that
              leads to the success of the overall product. Check out some of my
              work in{" "}
              <a href="#projects" className="underline text-teal-600 ">
                {" "}
                <b>Project</b>
              </a>{" "}
              section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
