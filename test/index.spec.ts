import markdownit from "markdown-it";
import observablePlugin from "../src/index.ts";

import "./style.css";

const md = markdownit({
    html: true,
    linkify: true,
    typographer: true
});

md.use(observablePlugin);

const minimalMd = fetch("test/Basic usage/Minimal Example.md").then(response => response.text());
const minimalHtml = md.render(await minimalMd);
document.querySelector<HTMLDivElement>("#min")!.innerHTML = minimalHtml;

const fullMd = fetch("test/Basic usage/Full Example.md").then(response => response.text());
const fullHtml = md.render(await fullMd);
document.querySelector<HTMLDivElement>("#full")!.innerHTML = md.render(await fullHtml);
