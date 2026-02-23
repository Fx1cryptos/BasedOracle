import { motion } from "framer-motion";
import { Wallet, ArrowRightLeft, Gift, Globe, MessageCircle, Zap, BarChart3, Search, Shield, TrendingUp, FileText, Plug } from "lucide-react";

const features = [
  { icon: Wallet, title: "Wallet Analysis", desc: "Instant wallet balances, NFTs, creator coins, memecoins & history." },
  { icon: ArrowRightLeft, title: "Trading & Execution", desc: "Buy, sell, swap tokens across wallets with AI trade recommendations." },
  { icon: Gift, title: "Airdrop Management", desc: "Detect & execute airdrops leveraging social and onchain signals." },
  { icon: Globe, title: "Ecosystem Intelligence", desc: "Monitor Base App, Zora, Farcaster & emerging projects." },
  { icon: MessageCircle, title: "Social Insights", desc: "Track X & Farcaster for trends, engagement & reward opportunities." },
  { icon: Zap, title: "Automation", desc: "AI reasoning + automated workflows to maximize opportunities." },
  { icon: BarChart3, title: "Portfolio Management", desc: "Track and optimize your portfolio across the Base ecosystem." },
  { icon: Search, title: "Token Scanner", desc: "Scan and analyze tokens for potential opportunities and risks." },
  { icon: Shield, title: "NFT Tracker", desc: "Monitor NFT collections, floor prices, and marketplace activity." },
  { icon: TrendingUp, title: "Trend Forecasting", desc: "AI-powered predictions based on onchain and social data." },
  { icon: FileText, title: "Report Generation", desc: "Generate structured, actionable reports for any wallet or project." },
  { icon: Plug, title: "API Integration", desc: "Seamlessly connect with Bankr, Coinbase, Talent & more." },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-secondary/40">
      <div className="container">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">12 AI-Powered Tools</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto font-medium">Everything you need to navigate, trade, and earn in the Base ecosystem.</p>
        </motion.div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="p-6 rounded-2xl bg-card border border-foreground/10 hover:shadow-glow transition-all hover:scale-[1.02] group"
            >
              <div className="w-11 h-11 rounded-xl bg-foreground/10 flex items-center justify-center mb-4 group-hover:bg-foreground group-hover:text-background transition-colors">
                <f.icon className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
              </div>
              <h3 className="font-display font-extrabold text-foreground mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed font-medium">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
