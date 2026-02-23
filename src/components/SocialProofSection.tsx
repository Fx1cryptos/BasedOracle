import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const tweets = [
  {
    id: "2020514389976023437",
    url: "https://x.com/fx1_hubs/status/2020514389976023437",
  },
  {
    id: "2013992873465635113",
    url: "https://x.com/fx1_hubs/status/2013992873465635113",
  },
  {
    id: "2013992822626451925",
    url: "https://x.com/fx1_hubs/status/2013992822626451925",
  },
];

export default function SocialProofSection() {
  return (
    <section id="social" className="py-24 bg-secondary/40">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">
            Social Proof
          </h2>
          <p className="text-muted-foreground text-lg font-medium">
            See what the community is saying about BasedOracle AI.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tweets.map((tweet, i) => (
            <motion.a
              key={tweet.id}
              href={tweet.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="block p-6 rounded-2xl border border-foreground/15 bg-card hover:shadow-glow transition-all hover:scale-[1.02] group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center">
                  <span className="text-foreground font-display font-extrabold text-sm">FX1</span>
                </div>
                <div>
                  <div className="font-display font-bold text-foreground text-sm">@fx1_hubs</div>
                  <div className="text-xs text-muted-foreground font-medium">on X</div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground ml-auto group-hover:text-foreground transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground font-medium leading-relaxed">
                Building with BasedOracle AI — real onchain intelligence for the Base ecosystem. Not generic crypto AI. Base-first. 🔵
              </p>
              <div className="mt-4 text-xs text-muted-foreground font-bold">
                View on X →
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://x.com/i/communities/1991809112070557893"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-foreground/20 text-foreground font-display font-bold text-sm hover:bg-foreground/10 transition-all hover:scale-105"
          >
            Join Baseposting Community
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
