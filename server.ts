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
        const s = await Deno.readTextFile("./sdyxz/lib/contents/" + pathname + ".html");
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
    else if (pathname === "/help") {
        strText = await Deno.readTextFile("./help/index.html");
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
