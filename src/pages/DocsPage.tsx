import SiteNav from "@/components/SiteNav";
import ApiDocsSection from "@/components/ApiDocsSection";
import SiteFooter from "@/components/SiteFooter";

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <main className="pt-16">
        <ApiDocsSection />
      </main>
      <SiteFooter />
    </div>
  );
}
