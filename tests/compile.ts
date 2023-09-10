import * as esbuild from 'esbuild';
import mdx from 'mdx-js/esbuild';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

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

for (const src of sources) {
    console.log(`compiling: ./sdyxz/${src} => ./sdyxz/lib/contents/${src}.js`);
    await esbuild.build({
        entryPoints: ['./sdyxz/' + src ],
        outfile: './sdyxz/lib/contents/' + src + '.js',
        format: 'esm',
        plugins: [mdx({
            outputFormat: 'program',
            remarkPlugins: [remarkGfm],
            rehypePlugins: [rehypeHighlight]
        })]
    });
    esbuild.stop();    
}
