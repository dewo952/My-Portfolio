const Contact = () => {
    return (
      <div
        id="contact"
        className="w-full h-screen  flex justify-center items-center p-4"
      >
        <form
          method="POST"
          action="https://getform.io/f/2e9c7b34-907a-46cc-bad1-355f30ee32dc"
          className="flex flex-col max-w-[600px] w-full"
        >
        
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 text-teal-600  border-pink-600">
              Contact
            </p>
            <p className="py-4 text-lg">
              Submit the form below or shoot me an email - divenkhtri@gmail.com
            </p>
          </div>
  
          <input
            className=" p-2 border-2 border-black rounded-3xl "
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className=" my-4 p-2   border-2 border-black rounded-3xl"
            type="email"
            placeholder="Email"
            name="email" 
          />
          <textarea
            className="  p-2  border-2 border-black rounded-3xl"
            name="message"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white border-none rounded-3xl hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Send Email
          </button>
        </form>
      </div>
    );
  };
  
  export default Contact;
  