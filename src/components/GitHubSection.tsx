import { motion } from "framer-motion";
import { Github, Star, GitFork, ExternalLink, Code2, BookOpen } from "lucide-react";

const REPO_INFO = {
  name: "BasedOracle-AI-Agent",
  description: "Autonomous AI agent for onchain intelligence on Base blockchain. Features wallet analysis, trading automation, airdrop tracking, and social signal detection.",
  stars: 1247,
  forks: 234,
  language: "TypeScript",
  url: "https://github.com/fx1digital/basedoracle-agent",
};

const FEATURES = [
  { icon: "🤖", title: "AI-Powered", desc: "GPT-based reasoning with autonomous agent mode" },
  { icon: "⛓️", title: "Onchain Ready", desc: "Bankr & Coinbase AgentKit integrations" },
  { icon: "🧠", title: "Memory", desc: "Pinecone-powered long-term memory storage" },
  { icon: "🔊", desc: "Voice output with ElevenLabs TTS" },
];

export default function GitHubSection() {
  return (
    <section id="github" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Open Source Agent
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Built for developers, powered by the community
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Repo Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-foreground/15 bg-card shadow-card overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-foreground/10 bg-gradient-to-r from-foreground/5 to-transparent">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-foreground/10 flex items-center justify-center">
                    <Github className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-extrabold text-foreground">
                      {REPO_INFO.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-medium">
                      {REPO_INFO.description}
                    </p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <a
                    href={REPO_INFO.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-foreground text-background font-bold text-sm hover:opacity-90 transition-all"
                  >
                    <Star className="w-4 h-4" />
                    Star
                  </a>
                  <a
                    href={`${REPO_INFO.url}/fork`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/20 text-foreground font-bold text-sm hover:bg-foreground/10 transition-all"
                  >
                    <GitFork className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Star className="w-4 h-4 text-yellow-400" />
                  <span className="font-display text-2xl font-extrabold text-foreground">
                    {REPO_INFO.stars.toLocaleString()}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Stars</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <GitFork className="w-4 h-4 text-blue-400" />
                  <span className="font-display text-2xl font-extrabold text-foreground">
                    {REPO_INFO.forks}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Forks</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code2 className="w-4 h-4 text-green-400" />
                  <span className="font-display text-2xl font-extrabold text-foreground">
                    {REPO_INFO.language}
                  </span>
                </div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">Language</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-secondary/50">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <BookOpen className="w-4 h-4 text-purple-400" />
                  <span className="font-display text-2xl font-extrabold text-foreground">MIT</span>
                </div>
                <div className="text-xs text-muted-foreground font-bold uppercase tracking-wider">License</div>
              </div>
            </div>

            {/* Features */}
            <div className="p-6 border-t border-foreground/10">
              <h4 className="font-bold text-foreground mb-4">Key Features</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {FEATURES.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/30"
                  >
                    <span className="text-2xl">{feature.icon}</span>
                    <div>
                      {feature.title && (
                        <div className="font-bold text-foreground text-sm">{feature.title}</div>
                      )}
                      <div className="text-xs text-muted-foreground">{feature.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Links */}
            <div className="p-6 border-t border-foreground/10 flex flex-wrap gap-3">
              <a
                href={REPO_INFO.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary text-foreground font-bold text-sm hover:bg-secondary/80 transition-all"
              >
                <Github className="w-4 h-4" />
                Repository
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={`${REPO_INFO.url}/issues`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/15 text-foreground font-bold text-sm hover:bg-secondary transition-all"
              >
                Issues
              </a>
              <a
                href={`${REPO_INFO.url}/pulls`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/15 text-foreground font-bold text-sm hover:bg-secondary transition-all"
              >
                Pull Requests
              </a>
              <a
                href={`${REPO_INFO.url}/blob/main/README.md`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-foreground/15 text-foreground font-bold text-sm hover:bg-secondary transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Docs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
