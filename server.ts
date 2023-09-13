import {serve} from 'https://deno.land/std@0.201.0/http/server.ts';

async function showBook(request: Request): Promise<Response> {
    const pathname = (new URL(request.url)).pathname;
    console.log(`Request: ${pathname}`);

    const ext = pathname.substring(pathname.lastIndexOf('.') + 1);
    if (ext.match("jpg|png|ico|svg")) {
        const img = await Deno.readFile("." + pathname);
        if (img === null) {
            return new Response("Not found: " + pathname, {
                status: 404,
                headers: { "content-type": "text/plain" }
            });
        }
        let strType = "image/icon";
        if (ext === "jpg") {
            strType = "image/jpeg";
        }
        else if (ext === "png") {
            strType = "image/png";
        }
        else if (ext === "svg") {
            strType = "image/svg";
        }
        return new Response(img, {
            status: 200,
            headers: { "content-type": strType }
        })
    }
    else if (ext.match("css|js|txt")) {
        const s = await Deno.readTextFile("." + pathname);
        let strType = "text/plain";
        if (ext === "js") {
            strType = "text/javascript";
        }
        else if (ext === "css") {
            strType = "text/css";
        }
        return new Response(s, {
            status: 200,
            headers: { "content-type": strType }
        })
    }
    else if (ext.match("md|mdx")) {
        const s = await Deno.readTextFile("./sdyxz/" + pathname + "/index.html");
        return new Response(s, {
            status: 200,
            headers: { "content-type": "text/html" }
        });
    }

    let strText = "";
    if (pathname === "/") {
        strText = await Deno.readTextFile("./index.html");
        return new Response(strText, {
            status: 200,
            headers: {
                "content-type": "text/html"
            }
        });
    }
    else {
        const sources = [
            "bab1", "bab2", "bab3", "bab4",
            "bab5", "bab6", "bab7", "bab8",
            "bab9", "bab10", "bab11", "bab12",
            "bab13", "bab14", "bab15", "bab16",
            "bab17", "bab18", "bab19", "bab20",
            "bab21", "bab22", "bab23", "bab24",
            "bab25", "bab26", "bab27", "bab28",
            "bab29", "bab30", "bab31", "bab32",
            "bab33", "bab34", "bab35", "bab36",
            "bab37", "bab38", "bab39", "bab40",
            "intro", "nama-tokoh", "panggilan", "dao-de-jing",
            "referensi-karakter", "referensi-unit", "yijing"
        ];

        strText = "<p>Not Found: " + pathname;
        for (const source of sources) {
            if (pathname === "/" + source) {
                strText = await Deno.readTextFile("./" + source + "/index.html");
            }
        }

        return new Response(strText, {
            status: 200,
            headers: {
                "content-type": "text/html"
            }
        });
    }
}

await serve(showBook, { port: 3000 });

/*
<link rel="stylesheet" href="https://esm.sh/highlight.js@11.7.0/styles/base16/railscasts.css">
<link rel="stylesheet" href="https://esm.sh/highlight.js@11.7.0/styles/vs2015.css">
*/
