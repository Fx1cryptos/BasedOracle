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
    const body = await req.json();
    const { action } = body;

    // Static token info — always available
    if (action === "token_info") {
      return new Response(
        JSON.stringify({
          token: {
            name: "$BASEORACLE",
            symbol: "BASEORACLE",
            contract: "0x1402fB10817527C06Ec8AE145844A71c78c18B07",
            chain: "Base",
            source: "Clanker",
            clanker_url: "https://www.clanker.world/clanker/0x1402fB10817527C06Ec8AE145844A71c78c18B07",
            creator_coin_ca: "0x7216fe9ab99a838ce4df9e12eadd78705433c79b",
            zora_url: "https://zora.co/@basedoracle",
            base_app_url: "https://base.app/profile/basedoracle",
          },
        }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Bankr uses x402 payment protocol — each request costs $0.10 USDC
    // The BANKR_API_KEY secret should be the wallet private key for payment signing
    if (action === "prompt") {
      const { prompt } = body;
      if (!prompt) {
        return new Response(
          JSON.stringify({ error: "prompt is required" }),
          { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      // Forward to the AI chat-agent which can handle Bankr-style queries natively
      const apiKey = Deno.env.get("LOVABLE_API_KEY");
      if (!apiKey) {
        return new Response(
          JSON.stringify({ error: "AI not configured" }),
          { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const systemPrompt = `You are a Bankr-powered trading assistant for the Base ecosystem. You help users with:
- Token price lookups and market data
- Swap recommendations and routing
- Portfolio analysis
- $BASEORACLE token information (CA: 0x1402fB10817527C06Ec8AE145844A71c78c18B07, on Clanker)

When users ask to execute trades, explain that they can use the Bankr bot directly at bankr.bot or through the BasedOracle live app at base-oracle--fx1digital.replit.app.

Be concise, data-driven, and Base-native.`;

      const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: prompt },
          ],
          max_tokens: 512,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        return new Response(
          JSON.stringify({ error: "AI service unavailable" }),
          { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }

      const data = await response.json();
      const reply = data.choices?.[0]?.message?.content ?? "Could not process.";

      return new Response(
        JSON.stringify({ response: reply, source: "basedoracle-ai" }),
        { headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ error: "Unknown action", supported: ["token_info", "prompt"] }),
      { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("bankr-trade error:", err);
    return new Response(
      JSON.stringify({ error: "Internal error", message: String(err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
