'use client';

import { useState, FormEvent } from "react";

const projectTypes = [
  "Commercial Slab / Flatwork",
  "Industrial Flatwork",
  "Tilt-Up Construction",
  "Post-Tensioned Slab",
  "Parking Structure",
  "Retaining Wall",
  "Residential Foundation",
  "Residential Driveway / Patio",
  "Decorative / Stamped Concrete",
  "Other",
];

export default function EstimateForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with real form submission (e.g. Resend, Formspree, or internal API route)
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="text-center py-16 px-8">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-5">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
          We Got Your Request!
        </h3>
        <p className="text-gray-600 max-w-md mx-auto leading-relaxed">
          Thanks for reaching out. A member of the Mills Concrete team will review your project details and get back to you within 1–2 business days.
        </p>
        <p className="mt-5 text-brand-orange font-semibold">
          Questions in the meantime? Call us at{" "}
          <a href="tel:2084970131" className="underline">(208) 497-0131</a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="firstName">
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            required
            placeholder="John"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="lastName">
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            required
            placeholder="Smith"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="company">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            placeholder="ABC Construction Co."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="phone">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="(208) 555-0100"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="email">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="john@example.com"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="projectType">
            Project Type <span className="text-red-500">*</span>
          </label>
          <select
            id="projectType"
            name="projectType"
            required
            defaultValue=""
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
          >
            <option value="" disabled>
              Select a type...
            </option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="location">
            Project Location <span className="text-red-500">*</span>
          </label>
          <input
            id="location"
            name="location"
            type="text"
            required
            placeholder="Rexburg, ID"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="squareFootage">
            Estimated Square Footage
          </label>
          <input
            id="squareFootage"
            name="squareFootage"
            type="text"
            placeholder="e.g. 5,000 sq ft"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="timeline">
            Desired Start Date / Timeline
          </label>
          <input
            id="timeline"
            name="timeline"
            type="text"
            placeholder="e.g. Spring 2026, ASAP"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="description">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="description"
          name="description"
          required
          rows={5}
          placeholder="Describe your project: scope of work, site conditions, any special requirements or specs..."
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition resize-none"
        />
      </div>

      <div>
        <label className="block text-sm font-semibold text-gray-700 mb-1.5" htmlFor="howHeard">
          How did you hear about us?
        </label>
        <select
          id="howHeard"
          name="howHeard"
          defaultValue=""
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 bg-white focus:outline-none focus:border-brand-orange focus:ring-2 focus:ring-brand-orange/20 transition"
        >
          <option value="">Select...</option>
          <option value="referral">Referral / Word of Mouth</option>
          <option value="google">Google Search</option>
          <option value="facebook">Facebook</option>
          <option value="instagram">Instagram</option>
          <option value="repeat">Repeat Customer</option>
          <option value="other">Other</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-orange text-white font-extrabold text-lg py-4 rounded-lg hover:bg-orange-600 transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
      >
        {loading ? "Submitting..." : "Submit My Estimate Request →"}
      </button>

      <p className="text-xs text-gray-500 text-center pt-1">
        We typically respond within 1–2 business days. For urgent needs, call{" "}
        <a href="tel:2084970131" className="text-brand-orange font-semibold hover:underline">
          (208) 497-0131
        </a>
        .
      </p>
    </form>
  );
}
