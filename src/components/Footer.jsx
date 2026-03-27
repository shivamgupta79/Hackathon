import { motion } from "framer-motion";
import { Droplets, Github, Mail, MapPin, Heart, ExternalLink } from "lucide-react";

const links = [
  { label: "Overview", href: "#about" },
  { label: "Features", href: "#features" },
  { label: "Architecture", href: "#architecture" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Team", href: "#team" },
];

export default function Footer() {
  return (
    <footer className="relative bg-navy-950 border-t border-cyan-500/10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-20" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <div className="font-display font-bold text-white">Urban Flood Monitor</div>
                <div className="text-xs text-cyan-400">Prayagraj, UP</div>
              </div>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-4">
              Real-time IoT flood monitoring with ML-powered risk prediction and multi-channel emergency alerts.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <MapPin className="w-3.5 h-3.5 text-cyan-500" />
              Prayagraj, Uttar Pradesh, India
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Navigation</h4>
            <ul className="space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-slate-500 hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-4">Contact</h4>
            <div className="space-y-3">
              <a
                href="mailto:your@email.com"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                shivamgupt1046@email.com
              </a>
              <a
                href="#"
                className="flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                //GitHub Repository
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Alert status */}
            <div className="mt-6 glass rounded-xl p-4 border border-cyan-500/15">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full alert-dot" />
                <span className="text-xs font-semibold text-green-400">System Online</span>
              </div>
              <div className="text-xs text-slate-500">All 24 sensor nodes reporting. Last sync: 3s ago.</div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div>© 2026 Urban Flood Monitor — Hackathon Project</div>
          <div className="flex items-center gap-1">
            Built with <Heart className="w-3 h-3 text-red-500 mx-1" /> for smarter cities
          </div>
          <div className="flex gap-4">
            {["React", "Flask", "XGBoost", "ESP32"].map((t) => (
              <span key={t} className="text-slate-600 hover:text-slate-400 transition-colors cursor-default">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
