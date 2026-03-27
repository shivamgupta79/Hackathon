import { motion } from "framer-motion";
import { Droplets, Wifi, AlertTriangle, MapPin, Activity, Shield } from "lucide-react";

const floatVariants = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
  },
};

const statCards = [
  { icon: Activity, label: "Sensor Nodes", value: "24", unit: "Active", color: "cyan" },
  { icon: MapPin, label: "City Wards", value: "80", unit: "Monitored", color: "blue" },
  { icon: AlertTriangle, label: "Alert Threshold", value: "150", unit: "cm", color: "orange" },
  { icon: Shield, label: "Uptime", value: "99.8", unit: "%", color: "green" },
];

const colorMap = {
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", glow: "shadow-cyan-500/20" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", glow: "shadow-blue-500/20" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", glow: "shadow-orange-500/20" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", glow: "shadow-green-500/20" },
};

const particles = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  width: (i * 0.7 + 2) % 4 + 2,
  left: (i * 13.7) % 100,
  duration: (i * 1.3 + 8) % 10 + 8,
  delay: (i * 0.9) % 5,
}));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-navy-950">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-100" />

      {/* Radial glow center */}
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Animated water waves at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="wave" />
        <div className="wave wave2" />
      </div>

      {/* Floating particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.width}px`,
            height: `${p.width}px`,
            left: `${p.left}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      {/* Radar circle decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-500/10"
            style={{
              width: `${i * 280}px`,
              height: `${i * 280}px`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
        <div className="text-center mb-16">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-cyan-500/30 mb-8"
          >
            <Wifi className="w-4 h-4 text-cyan-400" />
            <span className="text-sm text-cyan-300 font-medium">
              Real-time IoT Flood Monitoring — Prayagraj, UP
            </span>
            <span className="w-2 h-2 bg-green-400 rounded-full alert-dot" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            <span className="text-white">Urban</span>{" "}
            <span className="gradient-text">Flood</span>
            <br />
            <span className="text-white">Monitor</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            End-to-end IoT pipeline with ML-powered flood risk prediction, live ward mapping,
            and multi-channel emergency alerts for smarter urban resilience.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="#features"
              className="px-8 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-bold rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-cyan-500/30 flex items-center gap-2"
            >
              <Droplets className="w-5 h-5" />
              Explore System
            </a>
            <a
              href="#architecture"
              className="px-8 py-3.5 glass border border-cyan-500/30 text-cyan-300 hover:text-white hover:border-cyan-400 font-semibold rounded-xl transition-all duration-200"
            >
              View Architecture
            </a>
          </motion.div>
        </div>

        {/* Stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {statCards.map((card, i) => {
            const c = colorMap[card.color];
            const Icon = card.icon;
            return (
              <motion.div
                key={i}
                variants={floatVariants}
                animate="animate"
                style={{ animationDelay: `${i * 0.5}s` }}
                className={`glass rounded-2xl p-5 border ${c.border} hover-lift text-center`}
              >
                <div className={`w-10 h-10 ${c.bg} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <Icon className={`w-5 h-5 ${c.text}`} />
                </div>
                <div className={`text-3xl font-display font-bold ${c.text} mb-1`}>
                  {card.value}
                  <span className="text-base font-normal ml-1">{card.unit}</span>
                </div>
                <div className="text-xs text-slate-500 font-medium">{card.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Live data ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 glass rounded-xl px-6 py-3 flex items-center gap-4 overflow-hidden"
        >
          <div className="flex items-center gap-2 shrink-0">
            <span className="w-2 h-2 bg-green-400 rounded-full alert-dot" />
            <span className="text-xs text-green-400 font-semibold uppercase tracking-wider">Live Feed</span>
          </div>
          <div className="text-xs text-slate-400 truncate">
            Ward 12 — Water Level: 142cm (Safe) &nbsp;|&nbsp; Ward 7 — Water Level: 168cm (⚠ DANGER) &nbsp;|&nbsp;
            Ward 23 — Rainfall: Active &nbsp;|&nbsp; Ward 45 — Risk Score: 28 (High Risk) &nbsp;|&nbsp;
            ML Prediction: Ward 7 Flood Probability 87% &nbsp;|&nbsp; Alert dispatched via SMS + Telegram
          </div>
        </motion.div>
      </div>
    </section>
  );
}
