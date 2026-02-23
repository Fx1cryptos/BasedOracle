import { ExternalLink, Copy } from "lucide-react";
import { useState } from "react";

const LOGO_URL = "https://blob.8004scan.app/ae6661ea5f6c31c764a08602269398691465ffd3d5b95441c2da36d74eba458d.jpg";

const CLANKER_CA = "0x1402fB10817527C06Ec8AE145844A71c78c18B07";
const ZORA_CA = "0x7216fe9ab99a838ce4df9e12eadd78705433c79b";

const footerLinks = [
  { label: "GitHub", url: "https://github.com/fx1digital/basedoracle-agent" },
  { label: "X Community", url: "https://x.com/i/communities/1991809112070557893" },
  { label: "Base", url: "https://x.com/base" },
  { label: "Base App", url: "https://x.com/baseapp" },
  { label: "Zora", url: "https://zora.co/@basedoracle" },
  { label: "Clanker", url: "https://www.clanker.world/clanker/0x1402fB10817527C06Ec8AE145844A71c78c18B07" },
  { label: "Base Profile", url: "https://base.app/profile/basedoracle" },
];

function ContractAddress({ ca, label }: { ca: string; label: string }) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(ca);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center gap-2">
      <span className="text-xs text-muted-foreground">{label}:</span>
      <code className="text-xs font-mono text-foreground bg-secondary px-2 py-1 rounded">
        {ca.slice(0, 6)}...{ca.slice(-4)}
      </code>
      <button
        onClick={copyToClipboard}
        className="p-1 hover:bg-secondary rounded transition-colors"
        title="Copy address"
      >
        {copied ? (
          <span className="text-xs text-green-400">✓</span>
        ) : (
          <Copy className="w-3 h-3 text-muted-foreground" />
        )}
      </button>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="py-12 border-t border-foreground/10 bg-card/50">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
          <div className="flex items-center gap-3">
            <img src={LOGO_URL} alt="BasedOracle" className="w-10 h-10 rounded-lg" />
            <span className="font-display font-extrabold text-lg text-foreground">BasedOracle AI</span>
          </div>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors font-bold"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </div>

        {/* Contract Addresses */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 py-4 border-y border-foreground/10">
          <ContractAddress ca={CLANKER_CA} label="$BASEORACLE CA" />
          <span className="hidden sm:inline text-foreground/30">|</span>
          <ContractAddress ca={ZORA_CA} label="$BASEDORACLE CA" />
        </div>

        <div className="text-center text-sm text-muted-foreground font-bold">
          <p>© 2026 BaseOracle. All rights reserved.</p>
          <p className="mt-1">
            Powered by{" "}
            <a
              href="https://base.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:underline"
            >
              Base
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
