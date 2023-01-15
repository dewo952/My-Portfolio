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
            <p>I'm React Developer. Please take a look around.</p>
          </div>
          <div>
            <p>
              I'm a <b>Frontend Developer</b>  building the Front-end of Websites,
              Web Applications and Mobile Application that leads to the success of the overall
              product. Check out some of my work in the Projects section.
            </p>
            <br/>
            <p>
              I'm open to <b>Job opportunities </b> where I can contribute, learn and
              grow. If you have a good opportunity that matches my skills and
              experience then don't hesitate to contact me.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
