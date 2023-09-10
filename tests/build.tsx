import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import {compile} from 'https://esm.sh/v131/@mdx-js/mdx@2.3.0/deno/lib/compile.js'
import {run} from 'mdx-js/mdx';
import * as runtime from 'react/jsx-runtime';
import remarkGfm from "https://esm.sh/remark-gfm@3.0.1";
import rehypeHighlight from "https://esm.sh/rehype-highlight@6.0.0";

const sources = [
    "bab1.md", "bab2.md", "bab3.md", "bab4.md",
    "bab5.md", "bab6.md", "bab7.md", "bab8.md",
    "bab9.md", "bab10.md", "bab11.md", "bab12.md",
    "bab13.md", "bab14.md", "bab15.md", "bab16.md",
    "bab17.md", "bab18.md", "bab19.md", "bab20.md",
    "bab21.md", "bab22.md", "bab23.md", "bab24.md",
    "bab25.md", "bab26.md", "bab27.md", "bab28.md",
    "bab29.md", "bab30.md", "bab31.md", "bab32.md",
    "bab33.md", "bab34.md", "bab35.md", "bab36.md",
    "bab37.md", "bab38.md", "bab39.md", "bab40.md",
    "intro.md", "nama-tokoh.md", "panggilan.md", "dao-de-jing.md",
    "referensi-karakter.md", "referensi-unit.md", "yijing.md"
];

for (const isi of sources) {
    // It must be executed by deno
    console.log(`Building: ${isi} => ${isi}.html`);
    const src = await Deno.readTextFile("./sdyxz/" + isi);
    const res = await compile(src, {
        outputFormat: 'function-body',
        rehypePlugins: [rehypeHighlight],
        remarkPlugins: [remarkGfm]
    });
    const {default:Contents} = await run(res, runtime);
    const html = renderToStaticMarkup(<Contents/>);
    const page =  `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Memanah Burung Rajawali</title>
<link rel="stylesheet" href="/styles/w3.css">
<style>
body, h1, h2, h3, h4, h5, h6 {
    font-family: 'Segoe UI', Verdana, Tahoma, Helvetica;
}
a { text-decoration: none; color: royalblue; }
code {
    font-family: 'Consolas', monospace, Monospace, Monaco;
}
.hljs {
    border: solid 1px #e0e0e0;
    border-radius: 8px;
    overflow-x: auto;
}
</style>
</head>
<body>
<div class="w3-bar w3-top w3-card w3-white">
    <a class="w3-button w3-bar-item w3-hover-black" href="/"><i class="fa fa-home"></i> HOME</a>
    <a class="w3-button w3-bar-item w3-hover-black w3-right" href="/bab1.md"><i class="fa fa-bars"></i> Bab 1</a>
</div>
<main class="w3-main w3-container w3-padding-32">
<div class="w3-content">
${html}
</div>
</main>
</body>
</html>`;
    await Deno.writeTextFile("./sdyxz/lib/contents/" + isi + ".html", page);
}
