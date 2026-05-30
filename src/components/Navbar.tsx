'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { label: "Our Team", href: "/our-team" },
  { label: "Our Work", href: "/our-work" },
  { label: "Services", href: "/services" },
  { label: "Employment", href: "/employment" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.png"
              alt="Mills Concrete"
              width={240}
              height={84}
              priority
              className="h-14 w-auto"
            />
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-brand-orange transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/estimate"
              className="ml-2 bg-brand-orange text-white text-sm font-bold px-5 py-2.5 rounded hover:bg-orange-600 transition-colors"
            >
              Get an Estimate
            </Link>
          </nav>

          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block py-2.5 text-gray-700 hover:text-brand-orange font-medium"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/estimate"
            className="mt-3 block text-center bg-brand-orange text-white font-bold px-5 py-3 rounded hover:bg-orange-600 transition-colors"
            onClick={() => setOpen(false)}
          >
            Get an Estimate
          </Link>
        </div>
      )}
    </header>
  );
}
