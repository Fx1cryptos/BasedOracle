import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";
import { 
  Bot, 
  Sparkles, 
  Zap, 
  Globe, 
  Shield, 
  Wallet, 
  Code, 
  Layers,
  ExternalLink,
  Rocket,
  Search,
  FileUp,
  CreditCard,
  Database,
  Cpu,
  Infinity
} from "lucide-react";

const baseEcosystemProjects = [
  {
    name: "Virtuals Protocol",
    symbol: "VIRTUAL",
    description: "AI agent launchpad and economic substrate for Agentic GDP (aGDP). Supports autonomous AI agents that can earn, trade, and interact on-chain. One of the leading platforms for creating and tokenizing AI agents.",
    category: "AI Agent Launchpad",
    website: "https://virtuals.io",
    highlight: "Over $25M cumulative revenue, 580K+ transactions",
    icon: Bot
  },
  {
    name: "Clanker",
    symbol: "CLANKER",
    description: "Autonomous AI token deployment agent on Base. Users simply tag @clanker on Farcaster with a token name and ticker to auto-deploy ERC-20 tokens. Acquired by Farcaster in October 2025.",
    category: "Token Deployment",
    website: "https://clanker.world",
    highlight: "$8M+ weekly fees, 500K+ tokens launched",
    icon: Rocket
  },
  {
    name: "OpenClaw",
    symbol: "CLAW",
    description: "Open-source AI agent framework (formerly ClawdBot/Moltbot). The viral framework that kicked off the AI agent season on Base. One of the fastest-growing GitHub repos in history.",
    category: "AI Framework",
    website: "https://www.openclaw.xyz",
    highlight: "149K GitHub stars, 22K forks in one week",
    icon: Cpu
  },
  {
    name: "Moltbook",
    symbol: "MOLT",
    description: "AI-native social platform where autonomous agents post, debate, and form communities. Similar to Reddit but for AI agents. Sparked the AI agent social media craze.",
    category: "Social Platform",
    website: "https://moltbook.com",
    highlight: "1.5M+ registrations, viral agent conversations",
    icon: Globe
  },
  {
    name: "AgentKit",
    symbol: "—",
    description: "Coinbase's official toolkit for building AI agents with onchain capabilities. Enables any agent to hold funds, send payments, trade tokens, and execute onchain operations.",
    category: "Development Tools",
    website: "https://base.org/builders/agentkit",
    highlight: "Give any agent a wallet with built-in security",
    icon: Code
  },
  {
    name: "Agentic Wallets",
    symbol: "—",
    description: "Coinbase's new wallet infrastructure specifically designed for autonomous AI agents. Supports EVM chains and Solana with gasless transactions and programmable spending limits.",
    category: "Wallet Infrastructure",
    website: "https://coinbase.com",
    highlight: "First wallet infra for autonomous AI agents",
    icon: Wallet
  },
  {
    name: "Xyber Network",
    symbol: "—",
    description: "AI agent ability marketplace integrating with Base for on-chain payments via x402 protocol. Enables professional billing for AI agent services with automated pay-per-use rails.",
    category: "Payments & Infrastructure",
    website: "https://xyber.network",
    highlight: "x402 payments for AI agent services",
    icon: Zap
  },
  {
    name: "AgentScan",
    symbol: "—",
    description: "ERC-8004 AI agent discovery layer on Base. Enables decentralized reputation and service discovery for autonomous agents. Built by ZeruAI with behavioral intelligence.",
    category: "Discovery & Identity",
    website: "https://agentscan.io",
    highlight: "17,887 agents registered, 12K+ feedback events",
    icon: Search
  },
  {
    name: "Warden Protocol",
    symbol: "WARD",
    description: "Infrastructure project providing Verifiable Intelligence (SPEx) for AI agents. Focused on moving from black box AI to verifiable on-chain execution.",
    category: "Infrastructure",
    website: "https://wardenprotocol.org",
    highlight: "Verifiable AI execution on-chain",
    icon: Shield
  },
  {
    name: "Bankr",
    symbol: "BNKR",
    description: "DeFAI terminal and AI trading assistant extending to Twitter/X interactions. Based on Clanker ecosystem, provides financial AI agent capabilities.",
    category: "DeFi AI",
    website: "https://bankr.ai",
    highlight: "AI-powered DeFi terminal",
    icon: Layers
  },
  {
    name: "Clawnch",
    symbol: "CLAWNCH",
    description: "AI-only asset launch platform where only agents can deploy tokens and collect fees. 80% of fees go to agents, forming an economic closed loop.",
    category: "Launchpad",
    website: "https://clawnch.com",
    highlight: "Agent-only token launches with fee sharing",
    icon: Sparkles
  }
];

const agentAPIs = [
  {
    name: "StableEnrich",
    provider: "StableLabs",
    description: "Unified data enrichment API combining 6 premium sources for people & company data, web search, and web scraping. Pay-per-request with x402 micropayments.",
    category: "Data Enrichment",
    pricing: "$0.015-0.045 per request",
    website: "https://stableenrich.dev",
    features: ["People Enrichment", "Company Data", "Web Search", "Web Scraping", "Places & Location"]
  },
  {
    name: "StableUpload",
    provider: "StableLabs",
    description: "File hosting and upload API for AI agents. Files publicly accessible for 6 months with permanent download URLs.",
    category: "File Storage",
    pricing: "Pay-per-upload via x402",
    website: "https://stableupload.dev",
    features: ["Universal file upload", "6-month hosting", "Permanent URLs", "No account required"]
  },
  {
    name: "StableSocial",
    provider: "StableLabs",
    description: "Social media data API covering Twitter, Instagram, TikTok, YouTube, Reddit, and Facebook for AI agent research.",
    category: "Social Data",
    pricing: "Pay-per-request via x402",
    website: "https://agentcash.dev",
    features: ["Twitter/X data", "Instagram", "TikTok", "YouTube", "Reddit"]
  },
  {
    name: "StableStudio",
    provider: "StableLabs",
    description: "State-of-the-art AI media generation API for images and videos. Integrated via AgentCash for autonomous creation.",
    category: "Media Generation",
    pricing: "Pay-per-generation via x402",
    website: "https://agentcash.dev",
    features: ["Image generation", "Video generation", "AI-powered creation"]
  },
  {
    name: "StableEmail",
    provider: "StableLabs",
    description: "Transactional and outreach email service for AI agents. Send emails directly from agent workflows.",
    category: "Communication",
    pricing: "Pay-per-email via x402",
    website: "https://agentcash.dev",
    features: ["Transactional emails", "Outreach campaigns", "No manual setup"]
  }
];

const infrastructure = [
  {
    name: "x402 Protocol",
    description: "HTTP 402 payment protocol developed by Coinbase enabling instant USDC micropayments. Powers the AI agent economy with pay-per-use payments.",
    website: "https://x402.org"
  },
  {
    name: "ERC-8004",
    description: "Ethereum standard for AI agent identity, reputation, and validation. Enables trustless agent-to-agent interactions and service discovery.",
    website: "https://eips.ethereum.org/EIPS/eip-8004"
  },
  {
    name: "AgentCash",
    description: "CLI giving AI agents unified access to 280+ paid APIs via x402 micropayments. Universal balance for research, enrichment, and media tools.",
    website: "https://agentcash.dev"
  }
];

export default function EcosystemReportPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary text-sm font-bold text-secondary-foreground mb-8">
              <Sparkles className="w-4 h-4" />
              2026 Market Report
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight">
              Base Ecosystem
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">
                AI Agent Report
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground font-medium max-w-2xl mx-auto mb-12">
              Comprehensive guide to the hottest AI agent projects, tools, and infrastructure powering the agentic economy on Base in 2026.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="#projects"
                className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors"
              >
                Explore Projects
              </a>
              <a 
                href="#apis"
                className="px-8 py-4 rounded-full border-2 border-foreground/20 font-bold hover:bg-foreground/5 transition-colors"
              >
                View APIs
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Stats */}
      <section className="py-16 border-y border-foreground/10 bg-card/50">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Base TVL", value: "$4.1B+", desc: "Largest L2 by TVL" },
              { label: "AI Agent Tokens", value: "500K+", desc: "Launched on Base" },
              { label: "Weekly Protocol Fees", value: "$8M+", desc: "From AI agents alone" },
              { label: "Active Agents", value: "17K+", desc: "On-chain registrations" }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="font-display text-3xl md:text-4xl font-black text-primary mb-2">
                  {stat.value}
                </div>
                <div className="font-bold text-foreground">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Agent Projects */}
      <section id="projects" className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
              Leading AI Agent Projects
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The projects driving the agentic revolution on Base
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {baseEcosystemProjects.map((project, i) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="group p-6 rounded-3xl border border-foreground/10 bg-card hover:bg-secondary/30 hover:border-primary/30 transition-all hover:scale-[1.02]"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-secondary/50 text-secondary-foreground">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="font-display text-xl font-black text-foreground mb-1">
                  {project.name}
                </h3>
                {project.symbol !== "—" && (
                  <div className="text-sm font-bold text-primary mb-3">
                    ${project.symbol}
                  </div>
                )}
                
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="pt-4 border-t border-foreground/10">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-accent">{project.highlight}</span>
                    <a 
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Agent APIs Section */}
      <section id="apis" className="py-24 bg-card/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
              AI Agent APIs
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium tools accessible via x402 micropayments through AgentCash
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agentAPIs.map((api, i) => (
              <motion.div
                key={api.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-6 rounded-3xl border border-foreground/10 bg-background hover:border-secondary/30 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center">
                    {api.category === "Data Enrichment" && <Database className="w-5 h-5 text-secondary" />}
                    {api.category === "File Storage" && <FileUp className="w-5 h-5 text-secondary" />}
                    {api.category === "Social Data" && <Globe className="w-5 h-5 text-secondary" />}
                    {api.category === "Media Generation" && <Sparkles className="w-5 h-5 text-secondary" />}
                    {api.category === "Communication" && <CreditCard className="w-5 h-5 text-secondary" />}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{api.name}</h3>
                    <span className="text-xs text-muted-foreground">{api.provider}</span>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {api.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {api.features.map((feature) => (
                    <span 
                      key={feature}
                      className="px-2 py-1 rounded-lg text-xs font-medium bg-secondary/20 text-secondary-foreground"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                
                <div className="pt-4 border-t border-foreground/10 flex items-center justify-between">
                  <span className="text-xs font-bold text-accent">{api.pricing}</span>
                  <a 
                    href={api.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    Docs <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-black text-foreground mb-4">
              Key Infrastructure
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The protocols and standards enabling the agentic economy
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {infrastructure.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-6 rounded-2xl border border-foreground/10 bg-card hover:bg-secondary/30 transition-colors"
              >
                <div>
                  <h3 className="font-display text-xl font-black text-foreground mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
                <a 
                  href={item.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-primary/20 via-background to-secondary/20">
        <div className="container text-center">
          <h2 className="font-display text-3xl md:text-5xl font-black text-foreground mb-6">
            Build Your AI Agent on Base
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            BasedOracle provides the onchain intelligence platform for AI agents. 
            Analyze wallets, track opportunities, and build autonomous trading agents.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/agent"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold hover:bg-primary/90 transition-colors flex items-center gap-2"
            >
              <Bot className="w-5 h-5" />
              Try the AI Agent
            </a>
            <a 
              href="/docs"
              className="px-8 py-4 rounded-full border-2 border-foreground/20 font-bold hover:bg-foreground/5 transition-colors"
            >
              Read Documentation
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
