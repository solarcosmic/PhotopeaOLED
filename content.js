console.log("Hi");
console.log(document.documentElement);

async function retrieveCSS() {
    try {
        const url = chrome.runtime.getURL("theme.css");
        const resp = await fetch(url);
        const text = await resp.text();
        console.log(text);
        document.documentElement.setAttribute("style", text);
        console.log(document.documentElement.style)
        return text;
    } catch (err) {
        console.error("Failed to read theme CSS: " + error);
    }
}

setTimeout(() => {
    retrieveCSS();
}, 2000);
