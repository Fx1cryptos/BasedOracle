import SiteNav from "@/components/SiteNav";
import SocialFeedSection from "@/components/SocialFeedSection";
import SiteFooter from "@/components/SiteFooter";

export default function FeedPage() {
  return (
    <div className="min-h-screen bg-background font-body">
      <SiteNav />
      <main className="pt-16">
        <SocialFeedSection />
      </main>
      <SiteFooter />
    </div>
  );
}
