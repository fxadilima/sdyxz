import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

function handler(req) {
    if (req.url.pathname.startsWith("/test1.html")) {
        const file = await Deno.readFile("./test1.html");
        return new Response(file, {
            headers: {
                "content-type": "text/html",
            },
        });
    }
    
    // Now, the following link should works
    let html = `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Memanah Rajawali | Deno Test</title>
        <link href="https://www.w3schools.com/w3css/4/w3.css" rel="stylesheet">
        <script src="https://kit.fontawesome.com/acda0af544.js" crossorigin="anonymous"></script>
    </head>
    <body>
        <div class="w3-main w3-padding">
            <div class="w3-container" id="contents">
                <h1>Memanah Rajawali</h1>
                <p>
                    Halaman ini baru sekedar contoh...
                </p>
                <p><a href="/test1.html">Ke Test1</a></p>
            </div>
        </div>
    </body>
</html>
    `;
    return new Response(html, {
        headers: {
            "content-type": "text/html"
        }
    });
}

serve(handler);
