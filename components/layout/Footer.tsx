import Link from "next/link";
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold uppercase tracking-widest">
              COACH
            </h3>

            <p className="text-neutral-400 mt-4 leading-relaxed">
              Helping you build strength, lose fat, and create sustainable
              fitness habits.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-3 text-neutral-400">
              <li>
                <Link href="/coaching" className="hover:text-white transition">
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/#transformations"
                  className="hover:text-white transition"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link href="/#about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-white transition">
                  FAQ
                </Link>
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
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-white/10 text-neutral-300 hover:text-accent hover:border-accent transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-white/10 text-neutral-300 hover:text-accent hover:border-accent transition"
              >
                <FaTiktok />
              </a>

              <a
                href="#"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-surface border border-white/10 text-neutral-300 hover:text-accent hover:border-accent transition"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 border-t border-white/10 pt-6 text-center text-neutral-500 text-sm">
          © {new Date().getFullYear()} Coach Alkin. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
