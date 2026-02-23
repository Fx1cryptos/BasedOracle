import SiteNav from "@/components/SiteNav";
import TokenSection from "@/components/TokenSection";
import SiteFooter from "@/components/SiteFooter";

export default function TokenPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <main className="pt-16">
        <TokenSection />
      </main>
      <SiteFooter />
    </div>
  );
}
