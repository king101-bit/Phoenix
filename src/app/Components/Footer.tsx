import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <Link
            href="/"
            className="flex items-center space-x-2 text-xl font-semibold"
          >
            <Image src="/logo.svg" width={35} height={35} alt="Logo" />
            <span>Phoenix</span>
          </Link>
          <p className="mt-3 text-gray-400">
            Your trusted partner in finding dream homes. Let&apos;s make it
            happen.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="text-gray-400 hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-400 hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className="text-gray-400 hover:text-white"
              >
                Properties
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold">Follow Us</h2>
          <div className="flex gap-4 mt-3">
            <a href="https://instagram.com" target="_blank">
              <Image
                src="/instagram-w.svg"
                width={30}
                height={30}
                alt="Instagram"
              />
            </a>
            <a href="https://facebook.com" target="_blank">
              <Image
                src="/facebook-w.svg"
                width={30}
                height={30}
                alt="Facebook"
              />
            </a>
            <a href="https://twitter.com" target="_blank">
              <Image
                src="/twitter-w.svg"
                width={30}
                height={30}
                alt="Twitter"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm font-montserrat">
        © {new Date().getFullYear()} Phoenix. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
