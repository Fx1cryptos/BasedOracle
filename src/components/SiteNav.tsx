import { Link, useLocation } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const LOGO_URL = "https://blob.8004scan.app/ae6661ea5f6c31c764a08602269398691465ffd3d5b95441c2da36d74eba458d.jpg";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Agent Chat", href: "/agent" },
  { label: "Wallet", href: "/wallet" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Trends", href: "/trends" },
  { label: "Token", href: "/token" },
  { label: "Social", href: "/feed" },
  { label: "Docs", href: "/docs" },
];

const externalLinks = [
  { label: "Smart Oracle", href: "https://baseoracle.lovable.app" },
  { label: "Digital Wardrobe", href: "https://fx1hubs.lovable.app" },
];

export default function SiteNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-foreground/10">
      <div className="container flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={LOGO_URL} alt="BasedOracle" className="w-10 h-10 rounded-xl group-hover:scale-110 transition-transform shadow-glow" />
          <div className="flex flex-col">
            <span className="font-display font-extrabold text-xl text-foreground tracking-tight leading-none">BasedOracle</span>
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">AI Intelligence</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              className={cn(
                "text-sm font-bold transition-all hover:text-foreground",
                location.pathname === item.href ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          
          <div className="relative group">
            <button className="text-sm text-muted-foreground hover:text-foreground transition-colors font-bold flex items-center gap-1 py-4">
              Community
              <ChevronDown className="w-4 h-4" />
            </button>
            <div className="absolute top-full right-0 mt-0 w-56 py-3 rounded-2xl bg-card border border-foreground/15 shadow-card opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
              {externalLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between px-5 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors font-bold"
                >
                  {item.label}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <ConnectButton showBalance={false} chainStatus="icon" accountStatus="avatar" />
          </div>
          <button 
            className="xl:hidden p-2 rounded-lg bg-secondary text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div className={cn(
        "xl:hidden absolute top-full left-0 w-full bg-background border-b border-foreground/10 overflow-hidden transition-all duration-300",
        isOpen ? "max-h-screen py-6" : "max-h-0 py-0"
      )}>
        <div className="container flex flex-col gap-4">
          {navItems.map((item) => (
            <Link 
              key={item.label} 
              to={item.href} 
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-bold p-4 rounded-xl",
                location.pathname === item.href ? "bg-secondary text-foreground" : "text-muted-foreground"
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="md:hidden p-4 border-t border-foreground/10 pt-6">
            <ConnectButton showBalance={false} />
          </div>
        </div>
      </div>
    </nav>
  );
}
