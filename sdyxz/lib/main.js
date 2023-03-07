import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
    return new Response("Hello, Deno!");
}

serve(handler);
