import { MapPin, Mail, ArrowDown } from "lucide-react";

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58v-2.03c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.14 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-16 bg-gradient-to-br from-white via-blue-50/40 to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div>
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 border border-blue-100">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Open to new opportunities
          </div>

          <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight mb-4">
            {personal.name.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="text-blue-600">{personal.name.split(" ").slice(2).join(" ")}</span>
          </h1>

          <p className="text-xl font-medium text-gray-500 mb-6">
            {personal.title}{" "}
            <span className="text-blue-600 font-semibold">/ {personal.subtitle}</span>
          </p>

          <p className="text-gray-600 leading-relaxed max-w-lg mb-8">
            {personal.summary}
          </p>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Mail className="w-4 h-4" />
              Get in touch
            </a>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-gray-300 hover:bg-gray-50 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-gray-200 text-gray-700 font-semibold px-6 py-3 rounded-xl hover:border-blue-100 hover:border-blue-300 hover:text-blue-700 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>

          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="w-4 h-4" />
            {personal.location}
          </div>
        </div>

        {/* Right — card */}
        <div className="hidden lg:flex justify-center">
          <div className="relative">
            <div className="w-72 h-72 rounded-3xl overflow-hidden shadow-2xl shadow-blue-200 border-4 border-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/profile.jpg" alt="Mario Mendez" className="w-full h-full object-cover" />
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-6 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
              <p className="text-xs text-gray-500 font-medium">Certified</p>
              <p className="text-sm font-bold text-gray-900">AZ-900 Azure</p>
            </div>
            <div className="absolute -bottom-4 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 border border-gray-100">
              <p className="text-xs text-gray-500 font-medium">Experience</p>
              <p className="text-sm font-bold text-gray-900">3+ yrs Cloud</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="flex justify-center pb-10 animate-bounce">
        <a href="#skills" className="text-gray-300 hover:text-blue-400 transition-colors">
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
