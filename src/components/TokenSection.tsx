import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const CLANKER_URL = "https://www.clanker.world/clanker/0x1402fB10817527C06Ec8AE145844A71c78c18B07";
const ZORA_URL = "https://zora.co/@basedoracle";
const BASE_APP_URL = "https://base.app/profile/basedoracle";
const CLANKER_CA = "0x1402fB10817527C06Ec8AE145844A71c78c18B07";
const ZORA_CA = "0x7216fe9ab99a838ce4df9e12eadd78705433c79b";

const links = [
  { label: "$BASEORACLE on Clanker", url: CLANKER_URL, highlight: true },
  { label: "$BASEDORACLE Creator Coin on Zora", url: ZORA_URL, highlight: false },
  { label: "BasedOracle on Base App", url: BASE_APP_URL, highlight: false },
];

const tokenDetails = [
  { name: "$BASEORACLE (Clanker)", ca: CLANKER_CA, chain: "Base", type: "Clanker Token" },
  { name: "$BASEDORACLE (Zora)", ca: ZORA_CA, chain: "Base", type: "Creator Coin" },
];

export default function TokenSection() {
  return (
    <section id="token" className="py-24 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
              $BASEORACLE Token
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium">
              The utility token powering the BasedOracle ecosystem on Base.
            </p>
          </motion.div>

          {/* Contract Addresses */}
          <div className="text-center mb-10">
            <div className="inline-flex flex-col items-center gap-3 px-5 py-4 rounded-xl border border-foreground/20 bg-secondary">
              <span className="text-sm font-bold text-muted-foreground">Contract Addresses</span>
              <div className="flex flex-col sm:flex-row gap-3">
                {tokenDetails.map((token) => (
                  <div key={token.name} className="flex items-center gap-2">
                    <span className="text-xs font-bold text-blue-400">{token.type}</span>
                    <code className="text-xs font-mono text-foreground font-bold">{token.ca.slice(0, 6)}...{token.ca.slice(-4)}</code>
                    <button 
                      onClick={() => navigator.clipboard.writeText(token.ca)}
                      className="p-1 hover:bg-foreground/10 rounded transition-colors"
                      title="Copy CA"
                    >
                      <svg className="w-3 h-3 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Token Links */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex items-center justify-between gap-3 p-5 rounded-2xl border font-display font-bold text-sm transition-all hover:scale-105 ${
                  link.highlight
                    ? "border-foreground/30 bg-foreground/10 text-foreground shadow-glow"
                    : "border-foreground/15 bg-secondary text-foreground hover:shadow-card"
                }`}
              >
                <span>{link.label}</span>
                <ExternalLink className="w-4 h-4 flex-shrink-0" />
              </motion.a>
            ))}
          </div>

          {/* Stats & Utility */}
          <div className="rounded-3xl border border-foreground/15 bg-gradient-card p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-2xl font-extrabold text-foreground mb-4">Vision & Mission</h3>
                <p className="text-muted-foreground leading-relaxed mb-6 font-medium">
                  BasedOracle AI is building the most comprehensive intelligence layer for the Base ecosystem. Our mission is to empower creators, traders, and collectors with AI-driven onchain insights, automated trading, and social signal tracking — all Base-first.
                </p>
                <div className="space-y-3">
                  {["Premium AI analysis & insights", "API access & rate limit boosts", "Governance voting rights", "Revenue sharing from agent trades", "Airdrop eligibility detection"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-foreground" />
                      </div>
                      <span className="text-sm text-foreground font-bold">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Total Supply", value: "1B" },
                  { label: "Chain", value: "Base" },
                  { label: "Holders", value: "12.4K+" },
                  { label: "Staked", value: "42%" },
                ].map((stat) => (
                  <div key={stat.label} className="p-6 rounded-xl bg-secondary text-center border border-foreground/10">
                    <div className="font-display text-3xl font-extrabold text-foreground mb-1">{stat.value}</div>
                    <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
