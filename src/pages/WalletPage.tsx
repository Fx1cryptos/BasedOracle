import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function WalletPage() {
  const [address, setAddress] = useState("");
  
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <main className="pt-32 pb-24 container max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="font-display text-4xl md:text-6xl font-extrabold mb-4 text-gradient-hero">Analyze Any Wallet</h1>
          <p className="text-muted-foreground text-lg">Enter a Base address or ENS to get a deep analysis.</p>
        </div>
        
        <div className="flex flex-col items-center gap-4 mb-12">
          <div className="w-full max-w-2xl relative group">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-foreground transition-colors" />
            <input 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="0x... or vitalik.eth"
              className="w-full h-16 pl-14 pr-6 rounded-2xl bg-secondary/50 border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-foreground/20 font-bold text-lg"
            />
          </div>
          <button className="px-10 py-4 rounded-xl bg-foreground text-background font-display font-extrabold hover:opacity-90 transition-all hover:scale-105 shadow-hero">
            Analyze
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-50 grayscale pointer-events-none">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="h-40 rounded-3xl border border-foreground/10 bg-card p-6 flex flex-col justify-end">
              <div className="h-4 w-1/2 bg-muted rounded mb-2" />
              <div className="h-8 w-3/4 bg-muted rounded" />
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
