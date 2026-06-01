import { skillGroups, certifications } from "@/lib/data";
import { BadgeCheck, Clock } from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">What I work with</p>
          <h2 className="text-4xl font-extrabold text-gray-900">Technologies & Tools</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 pb-3 border-b border-gray-100">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs font-medium bg-blue-50 text-blue-700 px-3 py-1.5 rounded-lg border border-blue-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div>
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-2">Credentials</p>
          <h3 className="text-2xl font-extrabold text-gray-900 mb-6">Certifications</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert.name}
                className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <span className="text-sm font-bold text-gray-900 leading-snug">{cert.name}</span>
                  {cert.status === "completed" ? (
                    <BadgeCheck className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  ) : (
                    <Clock className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">{cert.issuer}</span>
                  <span
                    className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                      cert.status === "completed"
                        ? "bg-green-50 text-green-700"
                        : "bg-amber-50 text-amber-700"
                    }`}
                  >
                    {cert.status === "completed" ? "Completed" : "In progress"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
