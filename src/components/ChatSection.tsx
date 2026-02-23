import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Send, Loader2, Bot, User, Sparkles, Volume2, VolumeX, Zap, 
  Paperclip, Mic, Plus, History, Settings, MoreHorizontal,
  X, FileText, Globe, Wallet, TrendingUp, Shield
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { cn } from "@/lib/utils";

// Simple markdown-like rendering
function MessageContent({ content }: { content: string }) {
  const lines = content.split('\n');
  return (
    <div className="space-y-2">
      {lines.map((line, i) => {
        if (line.startsWith('### ')) return <h3 key={i} className="font-bold text-foreground mt-3 mb-1">{line.slice(4)}</h3>;
        if (line.startsWith('## ')) return <h2 key={i} className="font-bold text-lg text-foreground mt-3 mb-1">{line.slice(3)}</h2>;
        if (line.startsWith('# ')) return <h1 key={i} className="font-bold text-xl text-foreground mt-3 mb-1">{line.slice(2)}</h1>;
        if (line.includes('`')) {
          const parts = line.split(/(`[^`]+`)/g);
          return (
            <p key={i} className="text-sm leading-relaxed">
              {parts.map((part, j) => 
                part.startsWith('`') && part.endsWith('`') ? (
                  <code key={j} className="px-1.5 py-0.5 rounded bg-foreground/10 text-foreground font-mono text-xs">{part.slice(1, -1)}</code>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </p>
          );
        }
        if (line.startsWith('- ') || line.startsWith('* ')) return <li key={i} className="text-sm ml-4 leading-relaxed list-disc">{line.slice(2)}</li>;
        if (/^\d+\.\s/.test(line)) return <li key={i} className="text-sm ml-4 list-decimal leading-relaxed">{line.replace(/^\d+\.\s/, '')}</li>;
        if (line.includes('**')) {
          const parts = line.split(/(\*\*[^*]+\*\*)/g);
          return (
            <p key={i} className="text-sm leading-relaxed">
              {parts.map((part, j) => 
                part.startsWith('**') && part.endsWith('**') ? (
                  <strong key={j} className="font-bold">{part.slice(2, -2)}</strong>
                ) : (
                  <span key={j}>{part}</span>
                )
              )}
            </p>
          );
        }
        if (!line.trim()) return <div key={i} className="h-2" />;
        return <p key={i} className="text-sm leading-relaxed">{line}</p>;
      })}
    </div>
  );
}

export default function ChatSection() {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [autoMode, setAutoMode] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: `⚡ **Welcome to BaseOracle AI Agent** — your autonomous intelligence layer for Base.

I'm ready to assist with:
• **Wallet Analysis**: Deep dives into any Base address
• **Opportunity Scanning**: Finding unclaimed airdrops & rewards
• **Market Insights**: Trending tokens & social signal tracking
• **Autonomous Execution**: Onchain interactions & trade suggestions

How can I help you today?` },
  ]);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const speakText = (text: string) => {
    if (!voiceEnabled || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text.replace(/[*#`]/g, ''));
    window.speechSynthesis.speak(utterance);
  };

  const handleSend = async () => {
    if ((!query.trim() && files.length === 0) || loading) return;
    
    const userMsg = query.trim() || (files.length > 0 ? `Uploaded ${files.length} file(s)` : "");
    setMessages((prev) => [...prev, { role: "user", content: userMsg }]);
    setQuery("");
    setFiles([]);
    setLoading(true);

    try {
      const { data, error } = await supabase.functions.invoke("chat-agent", {
        body: { 
          message: userMsg,
          autonomousMode: autoMode
        },
      });

      if (error) throw error;

      const reply = data.reply || "I couldn't process that.";
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      if (voiceEnabled) speakText(reply);

      if (autoMode) {
        // Mocking autonomous follow-up
        setTimeout(() => {
          setMessages(prev => [...prev, { role: "assistant", content: "🔄 **Autonomous Insight:** Detected new liquidity pool activity on Base. Potential yield opportunity identified." }]);
        }, 2000);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ **System Error:** Failed to connect to AI gateway. Please check your connection." }]);
    } finally {
      setLoading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  return (
    <section id="chat" className="py-12 bg-background min-h-[calc(100vh-80px)] flex flex-col">
      <div className="container flex-1 flex flex-col max-w-6xl">
        <div className="flex-1 flex gap-6">
          
          {/* Sidebar - Threads & Controls */}
          <div className="hidden lg:flex w-72 flex-col gap-4">
            <button className="flex items-center gap-3 p-4 rounded-2xl bg-foreground text-background font-bold hover:opacity-90 transition-all">
              <Plus className="w-5 h-5" />
              New Conversation
            </button>
            
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto p-2">
              <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-3 mb-2">History</div>
              {[
                "Wallet Analysis 0x721...",
                "Airdrop Scan Mar 2026",
                "Trending Tokens Base",
                "Swap ETH -> USDC",
                "Protocol Research"
              ].map((thread, i) => (
                <button key={i} className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-all text-left group">
                  <FileText className="w-4 h-4 text-muted-foreground group-hover:text-foreground" />
                  <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground truncate">{thread}</span>
                </button>
              ))}
            </div>

            <div className="p-4 rounded-2xl bg-secondary/30 border border-foreground/5 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Zap className={cn("w-4 h-4", autoMode ? "text-purple-400" : "text-muted-foreground")} />
                  <span className="text-sm font-bold">Autonomous</span>
                </div>
                <button 
                  onClick={() => setAutoMode(!autoMode)}
                  className={cn(
                    "w-10 h-5 rounded-full relative transition-all duration-300",
                    autoMode ? "bg-purple-500" : "bg-muted"
                  )}
                >
                  <div className={cn(
                    "w-3 h-3 rounded-full bg-white absolute top-1 transition-all duration-300",
                    autoMode ? "left-6" : "left-1"
                  )} />
                </button>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Volume2 className={cn("w-4 h-4", voiceEnabled ? "text-green-400" : "text-muted-foreground")} />
                  <span className="text-sm font-bold">Voice Output</span>
                </div>
                <button 
                  onClick={() => setVoiceEnabled(!voiceEnabled)}
                  className={cn(
                    "w-10 h-5 rounded-full relative transition-all duration-300",
                    voiceEnabled ? "bg-green-500" : "bg-muted"
                  )}
                >
                  <div className={cn(
                    "w-3 h-3 rounded-full bg-white absolute top-1 transition-all duration-300",
                    voiceEnabled ? "left-6" : "left-1"
                  )} />
                </button>
              </div>
            </div>
          </div>

          {/* Main Chat Area */}
          <div className="flex-1 flex flex-col rounded-3xl border border-foreground/15 bg-card/50 shadow-card overflow-hidden backdrop-blur-xl">
            {/* Chat Header */}
            <div className="p-4 border-b border-foreground/10 flex items-center justify-between bg-card">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-background border-2 border-background flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  </div>
                </div>
                <div>
                  <div className="font-display font-extrabold text-sm tracking-tight">BaseOracle Agent</div>
                  <div className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
                    {autoMode ? "🔴 Autonomous Mode" : "🟢 Online"}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-all"><History className="w-5 h-5" /></button>
                <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-all"><Settings className="w-5 h-5" /></button>
                <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-all"><MoreHorizontal className="w-5 h-5" /></button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-hide">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn("flex gap-4", msg.role === "user" ? "flex-row-reverse" : "flex-row")}
                >
                  <div className={cn(
                    "w-8 h-8 rounded-lg flex items-center justify-center shrink-0",
                    msg.role === "user" ? "bg-foreground text-background" : "bg-blue-600/20 text-blue-400"
                  )}>
                    {msg.role === "user" ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                  </div>
                  <div className={cn(
                    "max-w-[80%] px-5 py-4 rounded-2xl shadow-sm",
                    msg.role === "user" 
                      ? "bg-foreground text-background rounded-tr-none font-bold" 
                      : "bg-secondary/80 text-foreground rounded-tl-none backdrop-blur-sm border border-foreground/5"
                  )}>
                    <MessageContent content={msg.content} />
                  </div>
                </motion.div>
              ))}
              {loading && (
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div className="bg-secondary/80 px-5 py-4 rounded-2xl rounded-tl-none backdrop-blur-sm border border-foreground/5">
                    <Loader2 className="w-5 h-5 animate-spin text-blue-400" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Section */}
            <div className="p-6 border-t border-foreground/10 bg-card/80">
              <AnimatePresence>
                {files.length > 0 && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="flex flex-wrap gap-2 mb-4"
                  >
                    {files.map((file, idx) => (
                      <div key={idx} className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-secondary/50 border border-foreground/10 text-xs font-bold">
                        <FileText className="w-3 h-3 text-blue-400" />
                        {file.name}
                        <button onClick={() => setFiles(files.filter((_, i) => i !== idx))}><X className="w-3 h-3 hover:text-red-400" /></button>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="flex items-end gap-3">
                <div className="flex-1 relative group">
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && handleSend()}
                    placeholder={autoMode ? "Monitoring Base ecosystem... Ask me anything" : "Ask BasedOracle anything..."}
                    disabled={loading}
                    className="w-full pl-12 pr-12 py-4 rounded-2xl bg-secondary/50 text-foreground border border-foreground/10 focus:outline-none focus:ring-2 focus:ring-blue-500/30 transition-all font-medium placeholder:text-muted-foreground"
                  />
                  <button 
                    onClick={() => fileInputRef.current?.click()}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-lg hover:bg-foreground/5 text-muted-foreground transition-all"
                  >
                    <Paperclip className="w-5 h-5" />
                  </button>
                  <input 
                    type="file" 
                    multiple 
                    ref={fileInputRef} 
                    className="hidden" 
                    onChange={handleFileChange} 
                  />
                  <button 
                    onMouseDown={() => setIsRecording(true)}
                    onMouseUp={() => setIsRecording(false)}
                    className={cn(
                      "absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg transition-all",
                      isRecording ? "bg-red-500/20 text-red-400 scale-110" : "hover:bg-foreground/5 text-muted-foreground"
                    )}
                  >
                    <Mic className="w-5 h-5" />
                  </button>
                </div>
                <button
                  onClick={handleSend}
                  disabled={loading || (!query.trim() && files.length === 0)}
                  className="p-4 rounded-2xl bg-foreground text-background font-display font-extrabold shadow-hero hover:shadow-glow transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { icon: Wallet, label: "Analyze Wallet" },
                  { icon: Globe, label: "Scan Airdrops" },
                  { icon: TrendingUp, label: "Trending" },
                  { icon: Shield, label: "Security Check" }
                ].map((action, i) => (
                  <button 
                    key={i}
                    onClick={() => setQuery(`Can you ${action.label.toLowerCase()}?`)}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-foreground/10 bg-secondary/30 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                  >
                    <action.icon className="w-3 h-3" />
                    {action.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
