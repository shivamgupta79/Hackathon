import { motion } from "framer-motion";

const stack = [
  {
    category: "Frontend",
    color: "cyan",
    items: [
      { name: "React 18", desc: "UI framework", emoji: "⚛️" },
      { name: "Vite", desc: "Build tool", emoji: "⚡" },
      { name: "Leaflet.js", desc: "Interactive maps", emoji: "🗺️" },
      { name: "Tailwind CSS", desc: "Styling", emoji: "🎨" },
    ],
  },
  {
    category: "Backend",
    color: "blue",
    items: [
      { name: "Python Flask", desc: "REST API", emoji: "🐍" },
      { name: "SQLite", desc: "Database", emoji: "🗄️" },
      { name: "JWT Auth", desc: "Security", emoji: "🔐" },
      { name: "In-Memory Cache", desc: "Fast reads", emoji: "⚡" },
    ],
  },
  {
    category: "Machine Learning",
    color: "purple",
    items: [
      { name: "XGBoost", desc: "Flood prediction", emoji: "🧠" },
      { name: "Scikit-learn", desc: "ML pipeline", emoji: "📊" },
      { name: "OpenWeatherMap", desc: "Weather data", emoji: "🌧️" },
      { name: "Hypothesis", desc: "Property testing", emoji: "🧪" },
    ],
  },
  {
    category: "IoT & Alerts",
    color: "orange",
    items: [
      { name: "ESP32", desc: "Microcontroller", emoji: "🔌" },
      { name: "HC-SR04", desc: "Ultrasonic sensor", emoji: "📡" },
      { name: "Twilio", desc: "SMS / WhatsApp", emoji: "📱" },
      { name: "Telegram Bot", desc: "Instant alerts", emoji: "✈️" },
    ],
  },
];

const colorMap = {
  cyan: {
    header: "bg-cyan-500/15 border-cyan-500/30 text-cyan-300",
    card: "border-cyan-500/15 hover:border-cyan-500/40",
    dot: "bg-cyan-400",
  },
  blue: {
    header: "bg-blue-500/15 border-blue-500/30 text-blue-300",
    card: "border-blue-500/15 hover:border-blue-500/40",
    dot: "bg-blue-400",
  },
  purple: {
    header: "bg-purple-500/15 border-purple-500/30 text-purple-300",
    card: "border-purple-500/15 hover:border-purple-500/40",
    dot: "bg-purple-400",
  },
  orange: {
    header: "bg-orange-500/15 border-orange-500/30 text-orange-300",
    card: "border-orange-500/15 hover:border-orange-500/40",
    dot: "bg-orange-400",
  },
};

export default function TechStack() {
  return (
    <section id="tech" className="relative py-28 bg-navy-900 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-orange-400 bg-orange-500/10 border border-orange-500/20 mb-4">
            Tech Stack
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Built With Modern Tools
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A carefully chosen stack for reliability, speed, and real-world deployment readiness.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stack.map((group, gi) => {
            const c = colorMap[group.color];
            return (
              <motion.div
                key={gi}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: gi * 0.1 }}
                className="glass rounded-2xl overflow-hidden border border-white/5"
              >
                {/* Category header */}
                <div className={`px-5 py-3 border-b ${c.header} border font-semibold text-sm`}>
                  {group.category}
                </div>

                {/* Tech items */}
                <div className="p-4 space-y-3">
                  {group.items.map((tech, ti) => (
                    <motion.div
                      key={ti}
                      whileHover={{ x: 4 }}
                      className={`flex items-center gap-3 p-3 rounded-xl border ${c.card} bg-white/[0.02] transition-all duration-200 cursor-default`}
                    >
                      <span className="text-xl">{tech.emoji}</span>
                      <div>
                        <div className="text-sm font-semibold text-white">{tech.name}</div>
                        <div className="text-xs text-slate-500">{tech.desc}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Hackathon highlights bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 glass rounded-2xl p-6 border border-cyan-500/20"
        >
          <h3 className="text-center text-sm font-semibold uppercase tracking-widest text-cyan-400 mb-6">
            Hackathon Highlights
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { emoji: "🔗", text: "End-to-end IoT pipeline" },
              { emoji: "🧠", text: "ML-powered risk prediction" },
              { emoji: "📱", text: "Multi-channel emergency alerts" },
              { emoji: "🗺️", text: "GeoJSON ward mapping" },
              { emoji: "🧪", text: "Property-based testing" },
              { emoji: "🔐", text: "Role-based access control" },
            ].map((h, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl mb-2">{h.emoji}</div>
                <div className="text-xs text-slate-400 leading-tight">{h.text}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
