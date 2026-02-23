import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3Provider } from "./components/Web3Provider";
import LandingPage from "./pages/LandingPage";
import AgentPage from "./pages/AgentPage";
import WalletPage from "./pages/WalletPage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import TrendsPage from "./pages/TrendsPage";
import TokenPage from "./pages/TokenPage";
import FeedPage from "./pages/FeedPage";
import DocsPage from "./pages/DocsPage";
import NotFound from "./pages/NotFound";

const App = () => (
  <Web3Provider>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/agent" element={<AgentPage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/trends" element={<TrendsPage />} />
          <Route path="/token" element={<TokenPage />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/docs" element={<DocsPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </Web3Provider>
);

export default App;
