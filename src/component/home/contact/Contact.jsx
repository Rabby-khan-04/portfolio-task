import BackgroundSquare from "@/component/shared/BackgroundSquare";
import InfoPanel from "./InfoPanel";

const Contact = () => {
  return (
    <section className="contact" name="contact">
      <div className="line__brake"></div>
      <div className="container py-10 sm:py-16 md:py-20 lg:py-32 relative">
        <BackgroundSquare />
        <div className="intro text-center mb-12 lg:mb-18">
          <h2 className="hero__heading text-5xl md:text-6xl lg:text-7xl font-medium mb-4">
            Get In Touch
          </h2>
          <p className="text-light-gray text-xl">
            Got a question or proposal, or just want to say hello?
            <br /> Go ahead. to say hello? Go ahead.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 self-center">
            <InfoPanel />
          </div>
          <div className="lg:col-span-3 contact__box p-8 sm:p-10 md:p-16 overflow-hidden">
            <h3 className="hero__heading text-[40px] mb-4">
              Send me a message!
            </h3>
            <form>
              <label className="input__label" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your name"
                className="input__field"
              />

              <label className="input__label" htmlFor="email">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="input__field"
              />

              <label className="input__label" htmlFor="message">
                Your Message
              </label>
              <textarea
                id="message"
                placeholder="Hi, I think we need a functional website for our products at Company X. How soon can you hop on to discuss this?"
                className="input__field"
              ></textarea>

              <div>
                <button
                  type="submit"
                  className="btn__pill__xl btn__glass text-xl text-light-gray cursor-pointer"
                >
                  Soot
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
