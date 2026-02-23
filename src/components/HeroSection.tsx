import { motion } from "framer-motion";
import ParticleBackground from "./ParticleBackground";
import { Link } from "react-router-dom";

const LOGO_URL = "https://blob.8004scan.app/ae6661ea5f6c31c764a08602269398691465ffd3d5b95441c2da36d74eba458d.jpg";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <ParticleBackground />

      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-oracle-glow/5 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-oracle-glow/5 rounded-full blur-[100px] animate-pulse delay-1000" />

      <div className="container relative z-10 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10"
          >
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-oracle-glow/20 blur-2xl rounded-full scale-150 animate-pulse" />
              <img
                src={LOGO_URL}
                alt="BasedOracle AI Logo"
                className="relative w-32 h-32 rounded-[2rem] mx-auto shadow-glow border-2 border-foreground/20"
              />
            </div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-foreground/20 bg-foreground/5 text-foreground text-sm font-extrabold mb-10 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
            Autonomous Intelligence for Base Ecosystem
          </motion.div>

          <h1 className="font-display text-6xl sm:text-7xl md:text-9xl font-extrabold leading-[0.9] mb-10 tracking-tighter">
            <span className="text-gradient-hero">BaseOracle</span>
            <br />
            <span className="text-foreground">AI Agent</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-14 leading-relaxed font-medium">
            Discover airdrops • Analyze wallets • Trade smart.
            <br className="hidden md:block" />
            The most advanced onchain intelligence platform on Base.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-20">
            <Link
              to="/agent"
              className="w-full sm:w-auto px-12 py-5 rounded-2xl bg-foreground text-background font-display font-extrabold text-lg shadow-hero hover:shadow-glow transition-all hover:scale-105 active:scale-95"
            >
              Launch Agent
            </Link>
            <button
              onClick={() => document.getElementById('wallet-connect')?.click()}
              className="w-full sm:w-auto px-12 py-5 rounded-2xl border-2 border-foreground/20 text-foreground font-display font-extrabold text-lg hover:bg-foreground/5 transition-all hover:scale-105 active:scale-95 backdrop-blur-xl"
            >
              Connect Wallet
            </button>
            <Link
              to="/opportunities"
              className="w-full sm:w-auto px-8 py-5 text-muted-foreground hover:text-foreground font-bold text-lg transition-colors group"
            >
              View Opportunities
              <svg className="w-5 h-5 inline-block ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Activity Feed Snippet */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl border border-foreground/10 bg-secondary/30 backdrop-blur-sm text-sm"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full bg-foreground/20 border-2 border-background" />
              ))}
            </div>
            <span className="text-muted-foreground">
              <strong className="text-foreground">Live:</strong> Found unclaimed airdrop for 0x7216...3c79b
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
