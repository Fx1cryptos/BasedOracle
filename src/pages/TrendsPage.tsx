import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { BarChart3, TrendingUp, Users, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Mon", value: 400 },
  { name: "Tue", value: 600 },
  { name: "Wed", value: 800 },
  { name: "Thu", value: 1200 },
  { name: "Fri", value: 1600 },
  { name: "Sat", value: 1400 },
  { name: "Sun", value: 2000 },
];

export default function TrendsPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <main className="pt-32 pb-24 container">
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 text-gradient-hero">Base Ecosystem Trends</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">Real-time analytics and social buzz tracking for the Base network.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Base TVL", value: "$2.4B", icon: BarChart3 },
            { label: "Active Wallets", value: "1.2M", icon: Users },
            { label: "Airdrops Found", value: "3.2K", icon: TrendingUp },
            { label: "Daily Transactions", value: "45K", icon: Activity },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-3xl border border-foreground/15 bg-gradient-card shadow-card group hover:shadow-glow transition-all hover:scale-[1.02]"
            >
              <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-all">
                <stat.icon className="w-5 h-5" />
              </div>
              <div className="font-display text-3xl font-extrabold text-foreground mb-1 tracking-tight">{stat.value}</div>
              <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="p-10 rounded-3xl border border-foreground/15 bg-card shadow-card">
            <h3 className="font-display text-2xl font-extrabold text-foreground mb-8 flex items-center gap-3">
              Wallet Growth Trend
              <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 font-bold tracking-wider uppercase">Active</span>
            </h3>
            <div className="h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
                  <XAxis dataKey="name" stroke="rgba(255,255,255,0.3)" />
                  <YAxis stroke="rgba(255,255,255,0.3)" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: "#0a0a0a", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "12px" }}
                  />
                  <Line type="monotone" dataKey="value" stroke="hsl(220, 100%, 60%)" strokeWidth={4} dot={{ r: 6, fill: "hsl(220, 100%, 60%)" }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="p-10 rounded-3xl border border-foreground/15 bg-card shadow-card">
            <h3 className="font-display text-2xl font-extrabold text-foreground mb-8">Top Tokens (24h Activity)</h3>
            <div className="space-y-6">
              {[
                { name: "BASE", vol: "$12.5M", change: "+15.2%", color: "text-green-400" },
                { name: "USDC", vol: "$8.3M", change: "+0.1%", color: "text-foreground" },
                { name: "NEWTOKEN", vol: "$2.1M", change: "+245%", color: "text-green-400" },
                { name: "ORACLE", vol: "$1.2M", change: "-2.4%", color: "text-red-400" },
              ].map((token) => (
                <div key={token.name} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-foreground/10 flex items-center justify-center font-display font-extrabold text-lg text-foreground group-hover:bg-foreground group-hover:text-background transition-all">
                      {token.name[0]}
                    </div>
                    <div>
                      <div className="font-display font-extrabold text-lg text-foreground">{token.name}</div>
                      <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Vol: {token.vol}</div>
                    </div>
                  </div>
                  <div className={`font-display font-extrabold text-lg ${token.change.startsWith("+") ? "text-green-400" : "text-red-400"}`}>
                    {token.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
