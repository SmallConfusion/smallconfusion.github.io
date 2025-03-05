import { html, css, LitElement } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeHTML } from "lit/directives/unsafe-html.js";

import { pages, currentPage } from "./pages.ts";

window.addEventListener(
	"load",
	() => (document.title = `SmallConfusion - ${currentPage.name}`)
);

@customElement("f-page")
export class Page extends LitElement {
	static styles = css`
		menu a.current {
			color: #777;
		}

		:host {
			display: inline-block;
			width: 100%;
			min-height: 100vh;
			display: flex;
			flex-direction: column;
		}
	`;

	render() {
		let menu = html`<menu>
			${pages.map(
				(page) => html`<a
					class=${currentPage === page ? "current" : ""}
					href=${page.path}
				>
					${page.name}
				</a>`
			)}
		</menu>`;

		let header = html`<header>
			<h1>SmallConfusion</h1>
			${menu}
		</header>`;

		let footer = html`<div style="flex-grow: 1"></div>
			<footer>&copy2025 SmallConfusion</footer>`;

		return html`${header}
			<article>${unsafeHTML(this.innerHTML)}</article>
			${footer}`;
	}
}
