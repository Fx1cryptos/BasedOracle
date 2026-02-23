import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message, autonomousMode, walletAddress } = await req.json();
    
    if (!message && !autonomousMode) {
      return new Response(JSON.stringify({ error: "message is required" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "AI not configured" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    let systemPrompt = `You are BasedOracle AI, an advanced onchain intelligence agent for the Base blockchain ecosystem.

Your capabilities:
- Wallet analysis: balances, NFTs, creator coins, memecoins, transaction history
- Trading insights: token recommendations, swap routing, market trends
- Airdrop tracking: eligibility detection, claim status, upcoming drops
- Social signals: X/Twitter trends, Farcaster activity, creator engagement
- Ecosystem intelligence: Base App, Zora, Clanker, emerging projects

You are powered by the $BASEORACLE token (CA: 0x1402fB10817527C06Ec8AE145844A71c78c18B07) on Clanker.

Always be concise, data-driven, and actionable. Format responses with clear sections using markdown. 
When analyzing wallets, provide structured breakdowns. 
When discussing tokens, include relevant metrics.`;

    if (autonomousMode) {
      systemPrompt += `\n\nAUTONOMOUS MODE ACTIVE: You are currently monitoring the Base ecosystem. 
      If no specific query is provided, surface high-value opportunities like new airdrops, whale movements, or trending tokens.
      Be proactive. Use your tools to scan for rewards for the connected wallet if provided: ${walletAddress || 'None provided'}.`;
    }

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: message || "Surface the latest opportunities on Base." },
          ],
          max_tokens: 1024,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("AI gateway error:", errText);
      return new Response(
        JSON.stringify({ error: "AI service unavailable" }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "I couldn't process that request.";

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("chat-agent error:", err);
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
