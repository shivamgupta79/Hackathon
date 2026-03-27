import { motion } from "framer-motion";
import { Cpu, Server, Monitor, ArrowRight, ArrowDown, Wifi, Database, Brain, Bell } from "lucide-react";

const layers = [
  {
    id: "edge",
    icon: Cpu,
    label: "Edge Layer",
    color: "green",
    items: [
      "ESP32 microcontroller",
      "HC-SR04 ultrasonic sensor",
      "Rain sensor (digital pin)",
      "POST /sensors/<id>/reading",
      "Every 5 seconds via WiFi",
    ],
    detail: "{ water_level, rain }",
  },
  {
    id: "server",
    icon: Server,
    label: "Server Layer",
    color: "blue",
    items: [
      "Flask REST API",
      "JWT authentication",
      "SQLite + in-memory cache",
      "XGBoost ML model",
      "Alert dispatch service",
    ],
    detail: "Python Flask + SQLite",
  },
  {
    id: "presentation",
    icon: Monitor,
    label: "Presentation Layer",
    color: "purple",
    items: [
      "React 18 + Vite SPA",
      "Leaflet ward map",
      "Stat cards + alert history",
      "Admin panel",
      "Polls /wards/live every 8s",
    ],
    detail: "React + Leaflet",
  },
];

const colorMap = {
  green: {
    bg: "bg-green-500/10",
    border: "border-green-500/30",
    icon: "text-green-400",
    badge: "bg-green-500/20 text-green-300",
    glow: "shadow-green-500/20",
    dot: "bg-green-400",
  },
  blue: {
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    icon: "text-blue-400",
    badge: "bg-blue-500/20 text-blue-300",
    glow: "shadow-blue-500/20",
    dot: "bg-blue-400",
  },
  purple: {
    bg: "bg-purple-500/10",
    border: "border-purple-500/30",
    icon: "text-purple-400",
    badge: "bg-purple-500/20 text-purple-300",
    glow: "shadow-purple-500/20",
    dot: "bg-purple-400",
  },
};

const dataFlow = [
  { icon: Cpu, label: "ESP32 Sensors", sub: "POST every 5s" },
  { icon: Database, label: "SQLite + Cache", sub: "Ingestion & storage" },
  { icon: Brain, label: "ML Scoring", sub: "XGBoost prediction" },
  { icon: Monitor, label: "React Dashboard", sub: "Poll every 8s" },
  { icon: Bell, label: "Alert Dispatch", sub: "SMS / WhatsApp / Telegram" },
];

export default function Architecture() {
  return (
    <section id="architecture" className="relative py-28 bg-navy-950 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-blue-400 bg-blue-500/10 border border-blue-500/20 mb-4">
            System Architecture
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            3-Layer IoT Architecture
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Clean separation from physical sensors to cloud intelligence to user interface.
          </p>
        </motion.div>

        {/* 3 layer cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {layers.map((layer, i) => {
            const c = colorMap[layer.color];
            const Icon = layer.icon;
            return (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className={`glass rounded-2xl p-6 border ${c.border} hover-lift relative overflow-hidden`}
              >
                {/* Layer number */}
                <div className="absolute top-4 right-4 text-5xl font-display font-black text-white/5 select-none">
                  {i + 1}
                </div>

                <div className={`w-12 h-12 ${c.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${c.icon}`} />
                </div>

                <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${c.badge} mb-3`}>
                  Layer {i + 1}
                </span>

                <h3 className="font-display font-bold text-white text-xl mb-4">{layer.label}</h3>

                <ul className="space-y-2 mb-4">
                  {layer.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-400">
                      <span className={`w-1.5 h-1.5 rounded-full ${c.dot} shrink-0`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className={`font-mono text-xs ${c.icon} ${c.bg} rounded-lg px-3 py-2 border ${c.border}`}>
                  {layer.detail}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Data flow pipeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-2xl p-8 border border-cyan-500/20"
        >
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-8">
            Data Flow Pipeline
          </h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {dataFlow.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={i} className="flex flex-col md:flex-row items-center gap-3 md:gap-4">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-14 h-14 glass rounded-2xl border border-cyan-500/20 flex items-center justify-center mb-2 hover:border-cyan-500/50 transition-colors">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <span className="text-xs font-semibold text-white">{step.label}</span>
                    <span className="text-xs text-slate-500">{step.sub}</span>
                  </div>
                  {i < dataFlow.length - 1 && (
                    <>
                      <ArrowRight className="hidden md:block w-5 h-5 text-cyan-500/40 shrink-0" />
                      <ArrowDown className="md:hidden w-5 h-5 text-cyan-500/40 shrink-0" />
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
