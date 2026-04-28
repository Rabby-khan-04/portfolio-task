import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";

const InfoPanel = () => {
  return (
    <div className="space-y-8 p-6">
      <h3 className="hero__heading text-3xl mb-2">Let’s Connect</h3>

      <p className="text-light-gray text-base leading-relaxed">
        I’m always open to discussing new projects, creative ideas, or
        opportunities to be part of your vision.
      </p>

      <div className="space-y-6 text-light-gray">
        {/* Phone */}
        <a href="tel:+8801647211326" className="flex items-start gap-4">
          <FiPhone className="text-white/70 mt-1 text-lg" />
          <div>
            <p className="text-sm opacity-70">Phone</p>
            <p className="text-lg">+880 1647-211326</p>
          </div>
        </a>

        {/* Email */}
        <a
          href="mailto:ajrabbyk72@email.com"
          className="flex items-start gap-4"
        >
          <FiMail className="text-white/70 mt-1 text-lg" />
          <div>
            <p className="text-sm opacity-70">Email</p>
            <p className="text-lg">ajrabbyk72@email.com</p>
          </div>
        </a>

        {/* Location */}
        <div className="flex items-start gap-4">
          <FiMapPin className="text-white/70 mt-1 text-lg" />
          <div>
            <p className="text-sm opacity-70">Location</p>
            <p className="text-lg">Khulna, Bangladesh</p>
          </div>
        </div>

        {/* Availability */}
        <div className="flex items-start gap-4">
          <FiClock className="text-white/70 mt-1 text-lg" />
          <div>
            <p className="text-sm opacity-70">Availability</p>
            <p className="text-lg">Freelance / Remote Projects</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;
