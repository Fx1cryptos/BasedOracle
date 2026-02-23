import { useState } from "react";
import { motion } from "framer-motion";
import { Image, ExternalLink, Loader2 } from "lucide-react";

interface IPFSMediaProps {
  cid: string;
  alt?: string;
  className?: string;
}

const IPFS_GATEWAY = "https://gateway.pinata.cloud/ipfs";

export default function IPFSMedia({ cid, alt = "IPFS Media", className = "" }: IPFSMediaProps) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const ipfsUrl = `${IPFS_GATEWAY}/${cid}`;

  return (
    <div className={`relative ${className}`}>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary rounded-xl">
          <Loader2 className="w-8 h-8 animate-spin text-muted-foreground" />
        </div>
      )}
      {error ? (
        <div className="flex flex-col items-center justify-center p-8 bg-secondary rounded-xl border border-foreground/15">
          <Image className="w-12 h-12 text-muted-foreground mb-2" />
          <span className="text-sm text-muted-foreground font-medium">Failed to load image</span>
        </div>
      ) : (
        <motion.img
          src={ipfsUrl}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoading(false)}
          onError={() => {
            setLoading(false);
            setError(true);
          }}
          className={`rounded-xl ${loading ? "opacity-0" : "opacity-100"} transition-opacity`}
        />
      )}
      <a
        href={ipfsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-2 right-2 p-2 rounded-lg bg-background/80 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity group"
      >
        <ExternalLink className="w-4 h-4 text-foreground" />
      </a>
    </div>
  );
}

// Logo display component
const LOGO_CID = "ae6661ea5f6c31c764a08602269398691465ffd3d5b95441c2da36d74eba458d.jpg";
const LOGO_URL = "https://blob.8004scan.app/ae6661ea5f6c31c764a08602269398691465ffd3d5b95441c2da36d74eba458d.jpg";

export function SiteLogo({ size = 32 }: { size?: number }) {
  return (
    <img
      src={LOGO_URL}
      alt="BasedOracle Logo"
      width={size}
      height={size}
      className="rounded-lg"
    />
  );
}

// Hero media component
export function HeroMedia() {
  const MEDIA_CID = "bafybeic47vvaklh47t4me5iqxayzaozvc3urhx2fmcv4rrfxon3xrgusca";

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <IPFSMedia cid={MEDIA_CID} alt="BasedOracle Hero Art" className="w-full" />
    </div>
  );
}
