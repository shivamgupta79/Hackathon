import { motion } from "framer-motion";
import {
  Radio, Map, Brain, Bell, Lock, BarChart3,
  Zap, Cloud, MessageSquare, Shield, Layers, GitBranch
} from "lucide-react";

const features = [
  {
    icon: Radio,
    title: "Real-Time Sensor Pipeline",
    desc: "ESP32 nodes push water level + rain data every 5s via HTTP. Frontend polls /wards/live every 8s for instant map updates.",
    tag: "IoT",
    color: "cyan",
    highlight: true,
  },
  {
    icon: Map,
    title: "Interactive Ward Map",
    desc: "Leaflet.js map with GeoJSON ward polygons color-coded by risk level. Click any ward for detailed sensor readings and history.",
    tag: "Visualization",
    color: "blue",
    highlight: false,
  },
  {
    icon: Brain,
    title: "XGBoost ML Prediction",
    desc: "Trained on rainfall, elevation, and drainage data. Outputs flood probability score and HIGH/LOW status via /predict endpoint.",
    tag: "Machine Learning",
    color: "purple",
    highlight: true,
  },
  {
    icon: Bell,
    title: "Multi-Channel Alerts",
    desc: "Auto-triggers when water level ≥ 150cm. Dispatches SMS, WhatsApp via Twilio, Telegram Bot, and web banners per user preferences.",
    tag: "Alerts",
    color: "orange",
    highlight: false,
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    desc: "JWT-secured API with three roles: Superadmin, Admin, Engineer. Controls sensor registration, ward management, and user admin.",
    tag: "Security",
    color: "green",
    highlight: false,
  },
  {
    icon: BarChart3,
    title: "Ward Risk Scoring",
    desc: "Auto-computed flood scores per ward from active sensor data. Zones: Safe (≥70), Moderate (50–70), High Risk (35–50), Danger (<35).",
    tag: "Analytics",
    color: "yellow",
    highlight: false,
  },
  {
    icon: Cloud,
    title: "OpenWeatherMap Integration",
    desc: "Live weather data enriches ML predictions with current rainfall intensity, humidity, and forecast data for Prayagraj.",
    tag: "Weather",
    color: "sky",
    highlight: false,
  },
  {
    icon: Layers,
    title: "3-Layer Architecture",
    desc: "Edge (ESP32 sensors) → Server (Flask API + SQLite + ML) → Presentation (React SPA). Clean separation of concerns.",
    tag: "Architecture",
    color: "indigo",
    highlight: false,
  },
  {
    icon: GitBranch,
    title: "Property-Based Testing",
    desc: "Hypothesis-powered PBT suite validates aggregation logic correctness. Formal correctness properties ensure reliable flood scoring.",
    tag: "Testing",
    color: "pink",
    highlight: false,
  },
];

const colorMap = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/25", icon: "text-cyan-400", tag: "bg-cyan-500/15 text-cyan-300" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/25", icon: "text-blue-400", tag: "bg-blue-500/15 text-blue-300" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/25", icon: "text-purple-400", tag: "bg-purple-500/15 text-purple-300" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/25", icon: "text-orange-400", tag: "bg-orange-500/15 text-orange-300" },
  green: { bg: "bg-green-500/10", border: "border-green-500/25", icon: "text-green-400", tag: "bg-green-500/15 text-green-300" },
  yellow: { bg: "bg-yellow-500/10", border: "border-yellow-500/25", icon: "text-yellow-400", tag: "bg-yellow-500/15 text-yellow-300" },
  sky: { bg: "bg-sky-500/10", border: "border-sky-500/25", icon: "text-sky-400", tag: "bg-sky-500/15 text-sky-300" },
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/25", icon: "text-indigo-400", tag: "bg-indigo-500/15 text-indigo-300" },
  pink: { bg: "bg-pink-500/10", border: "border-pink-500/25", icon: "text-pink-400", tag: "bg-pink-500/15 text-pink-300" },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Features() {
  return (
    <section id="features" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />

      {/* Glow blobs */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-purple-400 bg-purple-500/10 border border-purple-500/20 mb-4">
            Key Features
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need for{" "}
            <span className="gradient-text">Flood Intelligence</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            From physical sensors to ML predictions to emergency alerts — a complete end-to-end system.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((f, i) => {
            const c = colorMap[f.color];
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={item}
                className={`relative glass rounded-2xl p-6 border ${c.border} hover-lift group overflow-hidden`}
              >
                {f.highlight && (
                  <div className="absolute top-3 right-3">
                    <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-cyan-500/20 border border-cyan-500/30 text-xs text-cyan-300 font-medium">
                      <Zap className="w-3 h-3" /> Core
                    </span>
                  </div>
                )}
                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>
                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-medium ${c.tag} mb-3`}>
                  {f.tag}
                </span>
                <h3 className="font-display font-semibold text-white text-base mb-2">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
