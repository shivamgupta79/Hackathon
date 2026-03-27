import { motion } from "framer-motion";
import { Github, Linkedin, Globe, Brain, Code2, Cpu, Shield, BarChart3 } from "lucide-react";

const team = [
  {
    name: "Prerna Bajaj",
    role: "ML & Backend Engineer",
    college: "Ganga Institute of Technology & Management",
    //bio: "Built the Flask backend, XGBoost ML model, and IoT firmware. Architected the end-to-end data pipeline.",
    //skills: ["Python", "Flask", "XGBoost", "ESP32"],
    icon: BarChart3,
    color: "cyan",
    initials: "PB",
    linkedin: "#",
    //github: "#",
  },
  {
    name: "Vernika Khatri",
    role: "Frontend Developer",
    college: "Chandigarh University",
    //bio: "Designed and built the React SPA with Leaflet map integration, real-time polling, and admin panel.",
    //skills: ["React", "Leaflet", "Tailwind", "Vite"],
    icon: Code2,
    color: "blue",
    initials: "VK",
    linkedin: "https://www.linkedin.com/in/vernikakhatri/",
    //github: "#",
  },
  {
    name: "Ishani Gupta",
    role: "IoT & DevOps Engineer",
    college: "Maharishi University of Information Technology Noida",
    //bio: "Deployed ESP32 sensor nodes, configured Twilio/Telegram alert pipelines, and managed system infrastructure.",
    //skills: ["ESP32", "Twilio", "Telegram", "SQLite"],
    icon: Cpu,
    color: "purple",
    initials: "IG",
    linkedin: "https://www.linkedin.com/in/ishani-gupta-028156359/",
    //github: "#",
  },
  {
    name: "Rohit Ranjan",
    role: "Backend & Security Engineer",
    college: "Ganga Institute of Technology & Management",
    //bio: "Implemented JWT authentication, role-based access control, and secured all API endpoints for production readiness.",
    //skills: ["JWT", "RBAC", "Flask", "SQLite"],
    icon: Shield,
    color: "green",
    initials: "RR",
    linkedin: "https://www.linkedin.com/in/rohit-ranjan-1457833a6/",
    //github: "#",
  },
  {
    name: "Shivam Kr Gupta",
    role: "Data & Analytics Engineer",
    college: "Ganga Institute of Technology & Management",
    //bio: "Integrated OpenWeatherMap API, built ward risk scoring logic, and developed the alert history analytics dashboard.",
    //skills: ["Python", "XGBoost", "OpenWeatherMap", "Analytics"],
    icon: Brain,
    color: "orange",
    initials: "SG",
    linkedin: "https://www.linkedin.com/in/shivam-g-a16287256/",
    github: "https://github.com/shivamgupta79",
  },
];

const colorMap = {
  cyan: {
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/25",
    icon: "text-cyan-400",
    badge: "bg-cyan-500/15 text-cyan-300 border-cyan-500/20",
    ring: "ring-cyan-500/30",
    avatar: "from-cyan-500 to-blue-600",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/25",
    icon: "text-blue-400",
    badge: "bg-blue-500/15 text-blue-300 border-blue-500/20",
    ring: "ring-blue-500/30",
    avatar: "from-blue-500 to-indigo-600",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/25",
    icon: "text-purple-400",
    badge: "bg-purple-500/15 text-purple-300 border-purple-500/20",
    ring: "ring-purple-500/30",
    avatar: "from-purple-500 to-pink-600",
  },
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/25",
    icon: "text-green-400",
    badge: "bg-green-500/15 text-green-300 border-green-500/20",
    ring: "ring-green-500/30",
    avatar: "from-green-500 to-teal-600",
  },
  orange: {
    bg: "bg-orange-500/10",
    border: "border-orange-500/25",
    icon: "text-orange-400",
    badge: "bg-orange-500/15 text-orange-300 border-orange-500/20",
    ring: "ring-orange-500/30",
    avatar: "from-orange-500 to-red-600",
  },
};

export default function Team() {
  return (
    <section id="team" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-pink-400 bg-pink-500/10 border border-pink-500/20 mb-4">
            The Team
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Built by Passionate Developers
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A team of engineers who turned a flood safety problem into a full-stack IoT solution in a hackathon.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {team.map((member, i) => {
            const c = colorMap[member.color];
            const Icon = member.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass rounded-2xl p-6 border ${c.border} hover-lift group`}
              >
                <div className="flex items-start justify-between mb-5">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${c.avatar} flex items-center justify-center ring-2 ${c.ring} font-display font-bold text-white text-xl`}
                  >
                    {member.initials}
                  </div>
                  <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${c.icon}`} />
                  </div>
                </div>

                <h3 className="font-display font-bold text-white text-xl mb-1">{member.name}</h3>
                <p className={`text-sm font-medium ${c.icon} mb-1`}>{member.role}</p>
                <p className="text-xs text-slate-500 mb-4 flex items-center gap-1">
                  <Globe className="w-3 h-3" />
                  {member.college}
                </p>

                {member.bio && (
                  <p className="text-sm text-slate-400 leading-relaxed mb-5">{member.bio}</p>
                )}

                {member.skills && member.skills.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-5">
                    {member.skills.map((skill) => (
                      <span key={skill} className={`px-2.5 py-1 rounded-lg text-xs font-medium border ${c.badge}`}>
                        {skill}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-3">
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      LinkedIn
                    </a>
                  )}
                  {member.github && (
                    <a
                      href={member.github}
                      className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-cyan-400 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      GitHub
                    </a>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
