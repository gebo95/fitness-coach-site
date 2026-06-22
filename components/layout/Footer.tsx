import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0d0d0d] border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-widest">
              COACH
            </h3>

            <p className="text-gray-400 mt-4 leading-relaxed">
              Helping you build strength, lose fat, and create sustainable
              fitness habits.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="#programs" className="hover:text-white transition">
                  Programs
                </a>
              </li>
              <li>
                <a
                  href="#transformations"
                  className="hover:text-white transition"
                >
                  Results
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          {/* Socials */}
          <div>
            <h4 className="text-white font-semibold mb-4">Follow Me</h4>

            <div className="flex gap-5">
              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#161616] border border-white/10 text-gray-300 hover:text-[#00e676] hover:border-[#00e676] transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#161616] border border-white/10 text-gray-300 hover:text-[#00e676] hover:border-[#00e676] transition"
              >
                <FaTiktok />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-[#161616] border border-white/10 text-gray-300 hover:text-[#00e676] hover:border-[#00e676] transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Coach Alkin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
