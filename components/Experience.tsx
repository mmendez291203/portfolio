import { experience } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Where I've worked</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Experience</h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-200 hidden md:block" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <div key={i} className="relative md:pl-16">
                {/* Dot */}
                <div className="absolute left-4 top-1.5 w-4 h-4 rounded-full bg-blue-600 border-4 border-white shadow hidden md:block" />

                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-7">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center shrink-0">
                        <Briefcase className="w-4 h-4 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900">{job.title}</h3>
                        <p className="text-sm text-gray-500 font-medium">{job.company}</p>
                      </div>
                    </div>
                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-100 shrink-0">
                      {job.period}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {job.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
