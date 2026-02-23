import SiteNav from "@/components/SiteNav";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import TokenSection from "@/components/TokenSection";
import ApiDocsSection from "@/components/ApiDocsSection";
import ChatSection from "@/components/ChatSection";
import SocialProofSection from "@/components/SocialProofSection";
import SocialFeedSection from "@/components/SocialFeedSection";
import GitHubSection from "@/components/GitHubSection";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";
import { Gift, Search, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <HeroSection />
      
      {/* Dashboard Stats */}
      <section className="py-12 bg-secondary/30 border-y border-foreground/5 overflow-hidden">
        <div className="container flex flex-wrap justify-center gap-8 md:gap-16">
          {[
            { label: "Base TVL", value: "$2.4B", prefix: "📊" },
            { label: "Active Wallets", value: "1.2M", prefix: "🔥" },
            { label: "New Airdrops", value: "3", prefix: "💎" },
            { label: "Trending Tokens", value: "12", prefix: "🚀" },
          ].map((stat) => (
            <div key={stat.label} className="flex items-center gap-3">
              <span className="text-2xl">{stat.prefix}</span>
              <div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">{stat.label}</div>
                <div className="font-display text-xl font-extrabold text-foreground">{stat.value}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quick Actions Grid */}
      <section className="py-24 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "Find Airdrops", desc: "Scan for unclaimed rewards", icon: Gift, to: "/opportunities" },
            { title: "Analyze Wallet", desc: "Deep dive into onchain data", icon: Search, to: "/wallet" },
            { title: "Discover Tokens", desc: "Find the next gem on Base", icon: TrendingUp, to: "/trends" },
            { title: "Track Whales", desc: "Follow the smart money", icon: Users, to: "/trends" },
          ].map((action, i) => (
            <motion.div
              key={action.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link 
                to={action.to}
                className="block p-8 rounded-3xl border border-foreground/15 bg-card hover:bg-secondary/50 transition-all hover:scale-[1.02] hover:shadow-glow relative overflow-hidden"
              >
                <div className="w-14 h-14 rounded-2xl bg-foreground/10 flex items-center justify-center mb-6 group-hover:bg-foreground group-hover:text-background transition-all">
                  <action.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-2xl font-extrabold text-foreground mb-2">{action.title}</h3>
                <p className="text-muted-foreground text-sm font-medium mb-8">{action.desc}</p>
                <div className="text-xs font-bold uppercase tracking-widest text-foreground flex items-center gap-2 group-hover:gap-3 transition-all">
                  Start Analysis
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <FeaturesSection />
      <TokenSection />
      <ChatSection />
      <SocialFeedSection />
      <GitHubSection />
      <SocialProofSection />
      <ApiDocsSection />
      <SiteFooter />
    </div>
  );
}
