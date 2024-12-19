import { social } from "../features/constants";

// Footer.jsx
const Footer = () => {
  return (
    <footer className="bg-gray mt-16 border-t px-4 py-8 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
        {/* About Section */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">About Me</h3>
          <p className="text-sm text-gray-400">
            I'm a passionate developer specializing in front-end and back-end
            technologies, creating seamless user experiences and high-performing
            applications. Let's build something amazing together!
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Key Projects</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://imconnect.netlify.app/"
                className="text-gray-400 transition-colors hover:text-white"
              >
                IMConnect (full-stack)
              </a>
            </li>
            <li>
              <a
                href="https://immovies.vercel.app/"
                className="text-gray-400 transition-colors hover:text-white"
              >
                IMMovies (front-end)
              </a>
            </li>
            <li>
              <a
                href="https://e-s-mukingi.vercel.app/"
                className="text-gray-400 transition-colors hover:text-white"
              >
                E.S Mukingi (front-end)
              </a>
            </li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h3 className="mb-4 text-xl font-semibold">Connect With Me</h3>
          <div className="flex space-x-6">
            {social.map((item) => (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-colors hover:scale-105 hover:text-white"
                key={item.name}
              >
                <img src={item.icon} alt={item.name} className="h-8 w-8" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p className="text-sm text-gray-500">
          © 2024 IBANZE Miracle. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
