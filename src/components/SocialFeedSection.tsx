import { motion } from "framer-motion";
import { Twitter, Github, MessageCircle, ExternalLink, Heart, Repeat, BarChart3 } from "lucide-react";

const X_POSTS = [
  {
    id: "2020514389976023437",
    username: "fx1_hubs",
    content: "🚀 BasedOracle AI is live! Your onchain intelligence oracle for Base. Wallet analysis, trading insights, airdrop tracking & more. Try the agent now!",
    likes: 234,
    reposts: 89,
    replies: 45,
  },
  {
    id: "2013992873465635113",
    username: "fx1_hubs",
    content: "🔥 New feature: Autonomous mode! BasedOracle AI now monitors the Base ecosystem 24/7 and surfaces opportunities automatically. Game changer for traders.",
    likes: 456,
    reposts: 178,
    replies: 92,
  },
  {
    id: "2013992822626451925",
    username: "fx1_hubs",
    content: "📈 BasedOracle just hit 184K+ wallets analyzed! Thank you Base community. The future of onchain intelligence is here.",
    likes: 312,
    reposts: 124,
    replies: 67,
  },
];

const SOCIAL_LINKS = [
  { name: "Base", url: "https://x.com/base", icon: "🔵", description: "Official Base" },
  { name: "Base App", url: "https://x.com/baseapp", icon: "📱", description: "Base Mobile App" },
];

export default function SocialFeedSection() {
  return (
    <section id="social" className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Social Feed
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            Latest updates from the BasedOracle ecosystem
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* X Posts Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {X_POSTS.map((post, i) => (
              <motion.a
                key={post.id}
                href={`https://x.com/${post.username}/status/${post.id}`}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="block p-6 rounded-2xl border border-foreground/15 bg-card hover:bg-secondary/50 transition-all hover:scale-[1.02] hover:shadow-card group"
              >
                {/* Post Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">FX</span>
                  </div>
                  <div>
                    <div className="font-bold text-foreground text-sm">FX1 Hubs</div>
                    <div className="text-muted-foreground text-xs">@{post.username}</div>
                  </div>
                  <Twitter className="w-4 h-4 text-blue-400 ml-auto" />
                </div>

                {/* Post Content */}
                <p className="text-sm text-foreground mb-4 line-clamp-4 leading-relaxed">
                  {post.content}
                </p>

                {/* Post Stats */}
                <div className="flex items-center gap-4 text-muted-foreground text-xs">
                  <span className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {post.replies}
                  </span>
                  <span className="flex items-center gap-1">
                    <Repeat className="w-3 h-3" />
                    {post.reposts}
                  </span>
                  <span className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    {post.likes}
                  </span>
                </div>

                {/* View on X */}
                <div className="mt-4 pt-4 border-t border-foreground/10 flex items-center gap-2 text-xs text-blue-400 font-bold">
                  View on X
                  <ExternalLink className="w-3 h-3" />
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="text-center mb-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Follow the Ecosystem
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {SOCIAL_LINKS.map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 px-6 py-4 rounded-xl border border-foreground/15 bg-secondary hover:bg-secondary/80 transition-all hover:shadow-card"
              >
                <span className="text-2xl">{link.icon}</span>
                <div className="text-left">
                  <div className="font-bold text-foreground text-sm">{link.name}</div>
                  <div className="text-xs text-muted-foreground">{link.description}</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </motion.a>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://x.com/fx1_hubs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-display font-extrabold text-base transition-all hover:scale-105 hover:shadow-lg"
            >
              <Twitter className="w-5 h-5" />
              Follow @fx1_hubs
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
