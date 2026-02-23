import { motion } from "framer-motion";

const endpoints = [
  { method: "GET", path: "/wallet/{address}", desc: "Full wallet analysis including tokens, NFTs, and activity" },
  { method: "GET", path: "/airdrops/{address}", desc: "Airdrop eligibility check and claim history" },
  { method: "POST", path: "/trade", desc: "Execute token swaps with intelligent routing" },
  { method: "GET", path: "/projects/{id}", desc: "FX1 Digital Hubs project insights and metrics" },
  { method: "GET", path: "/social/{handle}", desc: "Engagement trends from X & Farcaster" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.4 },
  }),
};

export default function ApiDocsSection() {
  return (
    <section id="api" className="py-24 bg-secondary/40">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">API Endpoints</h2>
          <p className="text-muted-foreground text-lg font-medium">Integrate BasedOracle intelligence into your dApp.</p>
        </motion.div>
        <div className="max-w-3xl mx-auto space-y-3">
          {endpoints.map((ep, i) => (
            <motion.div
              key={ep.path}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-foreground/10 shadow-card"
            >
              <span className={`px-3 py-1 rounded-md text-xs font-display font-extrabold flex-shrink-0 ${
                ep.method === "POST"
                  ? "bg-foreground text-background"
                  : "bg-foreground/10 text-foreground"
              }`}>
                {ep.method}
              </span>
              <div>
                <code className="text-sm font-mono text-foreground font-bold">{ep.path}</code>
                <p className="text-sm text-muted-foreground mt-1 font-medium">{ep.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
