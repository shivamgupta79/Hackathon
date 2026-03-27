import { motion } from "framer-motion";
import { MapPin, Cpu, Brain, Bell, Users, Database } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Prayagraj, UP",
    desc: "Deployed across 80 city wards with GeoJSON polygon boundaries for precise flood zone mapping.",
    color: "cyan",
  },
  {
    icon: Cpu,
    title: "ESP32 IoT Nodes",
    desc: "HC-SR04 ultrasonic + rain sensors post readings every 5 seconds via HTTP to the Flask backend.",
    color: "blue",
  },
  {
    icon: Brain,
    title: "XGBoost ML Model",
    desc: "Trained on rainfall, elevation, and drainage data. Outputs flood probability and HIGH/LOW risk status.",
    color: "purple",
  },
  {
    icon: Bell,
    title: "Multi-Channel Alerts",
    desc: "Automatic dispatch via SMS, WhatsApp (Twilio), Telegram Bot, and web banners when water ≥ 150cm.",
    color: "orange",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    desc: "Three roles: Superadmin, Admin, Engineer — controlling sensor management, ward config, and user registration.",
    color: "green",
  },
  {
    icon: Database,
    title: "Real-Time Pipeline",
    desc: "SQLite + in-memory cache for fast reads. Frontend polls /wards/live every 8s for live map updates.",
    color: "red",
  },
];

const colorMap = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/20", icon: "text-cyan-400", num: "text-cyan-500" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", icon: "text-blue-400", num: "text-blue-500" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/20", icon: "text-purple-400", num: "text-purple-500" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/20", icon: "text-orange-400", num: "text-orange-500" },
  green: { bg: "bg-green-500/10", border: "border-green-500/20", icon: "text-green-400", num: "text-green-500" },
  red: { bg: "bg-red-500/10", border: "border-red-500/20", icon: "text-red-400", num: "text-red-500" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 mb-4">
            Project Overview
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            What is Urban Flood Monitor?
          </h2>
          <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
            A real-time IoT-based flood monitoring and early warning system built for urban areas.
            It collects live water level and rainfall data from distributed sensor nodes, computes
            flood risk scores per city ward, and fires multi-channel alerts when danger thresholds are crossed.
          </p>
        </motion.div>

        {/* Score formula card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-6 md:p-8 mb-16 border border-cyan-500/20 max-w-3xl mx-auto"
        >
          <h3 className="text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-4">
            Flood Risk Scoring Formula
          </h3>
          <div className="font-mono text-sm md:text-base text-slate-300 bg-navy-900/60 rounded-xl p-4 mb-4 overflow-x-auto">
            <span className="text-cyan-400">score</span> = 100 × (
            <span className="text-blue-400">0.4</span>×(1−risk) +{" "}
            <span className="text-purple-400">0.3</span>×(1−elevation) +{" "}
            <span className="text-green-400">0.3</span>×drainage)
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { zone: "Safe", range: "≥ 70", color: "bg-green-500" },
              { zone: "Moderate", range: "50–70", color: "bg-yellow-500" },
              { zone: "High Risk", range: "35–50", color: "bg-orange-500" },
              { zone: "Danger", range: "< 35", color: "bg-red-500" },
            ].map((z) => (
              <div key={z.zone} className="flex items-center gap-2 text-sm">
                <span className={`w-3 h-3 rounded-full ${z.color} shrink-0`} />
                <span className="text-slate-300 font-medium">{z.zone}</span>
                <span className="text-slate-500 text-xs">{z.range}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlight cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {highlights.map((h, i) => {
            const c = colorMap[h.color];
            const Icon = h.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className={`glass rounded-2xl p-6 border ${c.border} hover-lift group`}
              >
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">{h.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{h.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
