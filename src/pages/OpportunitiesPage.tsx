import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Gift, Sparkles, TrendingUp, Zap } from "lucide-react";
import { motion } from "framer-motion";

const categories = ["Airdrops", "New Tokens", "NFTs", "Yield", "All"];

export default function OpportunitiesPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <main className="pt-32 pb-24 container">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 text-gradient-hero">Opportunities Alpha</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Aggregated airdrops, new tokens, and yield opportunities across the Base ecosystem.</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button key={cat} className="px-6 py-2.5 rounded-full border border-foreground/15 bg-secondary/50 text-muted-foreground hover:text-foreground font-bold text-sm transition-all hover:border-foreground/30">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "BaseProtocol Airdrop", amount: "1,250 TOKENS (~$500)", deadline: "March 15, 2026", icon: Gift },
            { title: "DeFiYield Rewards", amount: "0.5 ETH", deadline: "No Deadline", icon: Zap },
            { title: "Trending: $NEWTOKEN", amount: "+245% (24h)", deadline: "High Volume", icon: TrendingUp },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-foreground/15 bg-gradient-card shadow-card group hover:shadow-glow transition-all hover:scale-[1.02]"
            >
              <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl font-extrabold text-foreground mb-2">{item.title}</h3>
              <p className="text-muted-foreground font-medium mb-1">Unclaimed: <span className="text-foreground font-bold">{item.amount}</span></p>
              <p className="text-xs text-muted-foreground font-bold uppercase tracking-wider mb-8">Deadline: {item.deadline}</p>
              
              <div className="flex gap-3">
                <button className="flex-1 px-4 py-3 rounded-xl bg-foreground text-background font-bold text-sm hover:opacity-90 transition-all">
                  Check Eligibility
                </button>
                <button className="px-4 py-3 rounded-xl border border-foreground/20 text-foreground font-bold text-sm hover:bg-foreground/10 transition-all">
                  Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
