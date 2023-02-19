
async function showAbout() {
    let html = "<p><strong>Error getting file: about.md</strong></p>";
    await fetch("/public/about.md").then(x => x.text()).then((y) => {
        html = marked.parse(y, {
            renderer: new marked.Renderer(),
            gfm: true,
            extra: true,
            smartLists: true,
            smartypants: false,
            pedantic: false,
            breaks: false,
            highlight: function(code, lang, cb) {
                let res = hljs.highlight(code, {language: lang}).value;
                if (cb) {
                    cb(null, res);
                }
                return res;    
            }
        });
        return html;
    });
    document.getElementById("preview").innerHTML = html;
}

async function showBook(fName) {
    let html = "<p><strong>Error getting file: " + fName + "</strong></p>";
    await fetch("/sdyxz/" + fName).then(x => x.text()).then((y) => {
        html = marked(y, {
            renderer: new marked.Renderer(),
            gfm: true,
            extra: true,
            tables: true,
            smartLists: true,
            smartypants: false,
            breaks: false,
            pedantic: false
        });
        return html;
    });
    document.getElementById("preview").innerHTML = html;
}

async function showGitHub(fName) {
    let html = "<p><strong>Error getting file: " + fName + "</strong></p>";
    await fetch("/github/" + fName).then(x => x.text()).then((y) => {
        html = marked(y, {
            renderer: new marked.Renderer(),
            gfm: true,
            extra: true,
            tables: true,
            smartLists: true,
            smartypants: false,
            breaks: false,
            pedantic: false,
            sanitize: false
        });
        return html;
    });
    document.getElementById("preview").innerHTML = html;
}

fetch("/sdyxz/intro.md")
.then(x => x.text())
.then((y) => {
    document.getElementById("preview").innerHTML = marked.parse(y, { 
        renderer: new marked.Renderer(),
        gfm: true,
        extra: true,
        smartLists: true,
        tables: true,
        smartypants: false,
        sanitize: false,
        pedantic: false,
        breaks: false
    });
});

