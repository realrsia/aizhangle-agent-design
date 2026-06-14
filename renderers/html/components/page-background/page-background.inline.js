/*
 * Primary page background runtime for single-file HTML demos.
 * Inline page-background.assets.inline.js before this file, then use:
 *   <xzl-page-background scene="home|chat|morning-brief|limit-up-hunter|event-catcher"
 *     theme="light|dark">
 */
(function registerPageBackground() {
  const assets = globalThis.XZL_PAGE_BACKGROUND_ASSETS || {};
  const primaryScenes = new Set([
    "home",
    "chat",
    "morning-brief",
    "limit-up-hunter",
    "event-catcher"
  ]);

  class XzlPageBackground extends HTMLElement {
    static get observedAttributes() { return ["scene", "theme"]; }

    connectedCallback() {
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      this.render();
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }

    render() {
      const scene = primaryScenes.has(this.getAttribute("scene"))
        ? this.getAttribute("scene")
        : "home";
      const light = this.getAttribute("theme") === "light";
      const suffix = light ? "light" : "dark";

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 390px;
            height: 844px;
            overflow: hidden;
            background: ${light ? "#f3f5f9" : "#091531"};
          }
          img {
            display: block;
            width: 390px;
            height: 844px;
            object-fit: fill;
          }
        </style>
        <img
          src="${assets[suffix] || ""}"
          alt=""
          data-component="component.page-background"
          data-component-family="page-background.primary"
          data-binding-status="html-runtime"
          data-scene="${scene}"
          data-theme="${suffix}"
          data-visual-reference="${light ? "400:26805" : "400:26896"}">`;
    }
  }

  if (!customElements.get("xzl-page-background")) {
    customElements.define("xzl-page-background", XzlPageBackground);
  }
})();
