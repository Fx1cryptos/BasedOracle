import SiteNav from "@/components/SiteNav";
import ChatSection from "@/components/ChatSection";

export default function AgentPage() {
  return (
    <div className="h-screen flex flex-col bg-background font-body overflow-hidden">
      <SiteNav />
      <main className="flex-1 flex flex-col pt-20">
        <ChatSection />
      </main>
    </div>
  );
}
