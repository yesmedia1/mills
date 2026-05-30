import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Our Team", href: "/our-team" },
  { label: "Our Work", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Employment", href: "/employment" },
  { label: "Contact", href: "/contact" },
  { label: "Get an Estimate", href: "/estimate" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-black text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <Image
              src="/logo.png"
              alt="Mills Concrete"
              width={220}
              height={77}
              className="h-12 w-auto mb-5 brightness-0 invert"
            />
            <p className="text-sm leading-relaxed mb-6">
              Southeast Idaho&apos;s premiere turn-key commercial concrete construction company. Serving Idaho and Wyoming since 2009.
            </p>
            <div className="flex gap-5 text-sm">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/mills_concrete"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-brand-orange transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs">
              Navigation
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-orange transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-5 uppercase tracking-wider text-xs">
              Contact Us
            </h4>
            <address className="not-italic space-y-3 text-sm">
              <p className="leading-relaxed">
                4821 Thunderbird Loop #2
                <br />
                Rexburg, ID 83440
              </p>
              <p>
                <a
                  href="tel:2084970131"
                  className="text-white font-semibold hover:text-brand-orange transition-colors"
                >
                  (208) 497-0131
                </a>
              </p>
              <p className="text-gray-500">
                Serving Driggs, ID &middot; Jackson Hole, WY
                <br />
                and all of Southeast Idaho
              </p>
            </address>
            <Link
              href="/estimate"
              className="mt-6 inline-block bg-brand-orange text-white font-bold text-sm px-6 py-3 rounded hover:bg-orange-600 transition-colors"
            >
              Get a Free Estimate
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2026 Mills Concrete. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-brand-orange transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-brand-orange transition-colors">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
