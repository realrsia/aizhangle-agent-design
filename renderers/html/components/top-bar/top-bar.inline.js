/*
 * Unified Top Bar runtime for single-file HTML demos.
 * Inline top-bar.assets.inline.js before this file, then use one of:
 *   <xzl-home-top-bar theme="light|dark"></xzl-home-top-bar>
 *   <xzl-chat-top-bar theme="light|dark"></xzl-chat-top-bar>
 */
(function registerTopBars() {
  const assets = globalThis.XZL_TOP_BAR_ASSETS || {};

  const messageIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 5C20.657 5 22 6.259 22 7.813v9.374C22 18.741 20.657 20 19 20H5c-1.657 0-3-1.259-3-2.813V7.813C2 6.259 3.343 5 5 5h14ZM5 6.5c-.921 0-1.5.677-1.5 1.313v9.374c0 .636.579 1.313 1.5 1.313h14c.921 0 1.5-.677 1.5-1.313V7.813c0-.636-.579-1.313-1.5-1.313H5Zm13.538 1.659a.75.75 0 0 1 .924 1.182l-6.693 5.229a1.55 1.55 0 0 1-1.943-.027L4.521 9.328a.75.75 0 1 1 .957-1.156l6.304 5.215a.05.05 0 0 0 .063.001l6.693-5.229Z"/>
    </svg>`;
  const playIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.503 20.34c1.306 1.065 3.263.136 3.264-1.55V5.955c0-1.57-1.72-2.527-3.048-1.704L6.309 7.44a2 2 0 0 1-1.174.38H4.2a2 2 0 0 0-2 2v4.674a2 2 0 0 0 2 2h.871a2 2 0 0 1 1.264.45l4.168 3.396Zm1.764-1.55a.5.5 0 0 1-.817.388l-4.167-3.397a3.5 3.5 0 0 0-2.212-.787H4.2a.5.5 0 0 1-.5-.5V9.819a.5.5 0 0 1 .5-.5h.935a3.5 3.5 0 0 0 2.053-.665l4.285-3.104a.5.5 0 0 1 .794.405V18.79Zm5.428-.67a6.15 6.15 0 0 0 .001-11.695l-.461 1.428a4.65 4.65 0 0 1-.001 8.84l.461 1.427Zm-1.867-2.567a3.45 3.45 0 0 0 .001-6.562l-.462 1.428a1.95 1.95 0 0 1 0 3.706l.461 1.428Z"/>
    </svg>`;

  class XzlHomeTopBar extends HTMLElement {
    static get observedAttributes() { return ["theme"]; }

    connectedCallback() {
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      this.render();
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }

    render() {
      const light = this.getAttribute("theme") === "light";
      const suffix = light ? "light" : "dark";

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 390px;
            height: 115px;
            color: ${light ? "#030303" : "#fff"};
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
          }
          * { box-sizing: border-box; }
          .topbar {
            width: 390px;
            height: 115px;
            display: flex;
            flex-direction: column;
            gap: 12px;
          }
          .status {
            position: relative;
            width: 390px;
            height: 44px;
            overflow: hidden;
          }
          .time {
            position: absolute;
            left: 27px;
            top: 14px;
            width: 54px;
            height: 21px;
            font-size: 16px;
            font-weight: 600;
            line-height: 21px;
            letter-spacing: -.32px;
            text-align: center;
          }
          .system {
            position: absolute;
            right: 28px;
            top: 19px;
            display: flex;
            align-items: center;
            gap: 7px;
            height: 13px;
          }
          .signal {
            display: flex;
            align-items: end;
            gap: 2px;
            width: 18px;
            height: 12px;
          }
          .signal i { width: 3px; border-radius: 1px; background: currentColor; }
          .signal i:nth-child(1) { height: 4px; }
          .signal i:nth-child(2) { height: 7px; }
          .signal i:nth-child(3) { height: 10px; }
          .signal i:nth-child(4) { height: 12px; }
          .wifi {
            position: relative;
            width: 17px;
            height: 12px;
            overflow: hidden;
          }
          .wifi::before, .wifi::after {
            content: "";
            position: absolute;
            left: 50%;
            border: 1.5px solid currentColor;
            border-right-color: transparent;
            border-bottom-color: transparent;
            border-left-color: transparent;
            border-radius: 50%;
            transform: translateX(-50%);
          }
          .wifi::before { width: 17px; height: 17px; top: 1px; }
          .wifi::after { width: 9px; height: 9px; top: 5px; }
          .wifi i {
            position: absolute;
            left: 7px;
            bottom: 0;
            width: 3px;
            height: 3px;
            border-radius: 50%;
            background: currentColor;
          }
          .battery {
            position: relative;
            width: 27px;
            height: 13px;
            padding: 2px;
            border: 1px solid currentColor;
            border-radius: 3px;
            opacity: .9;
          }
          .battery::before {
            content: "";
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 1px;
            background: currentColor;
          }
          .battery::after {
            content: "";
            position: absolute;
            right: -3px;
            top: 4px;
            width: 2px;
            height: 5px;
            border-radius: 0 2px 2px 0;
            background: currentColor;
            opacity: .5;
          }
          .entry-row {
            position: relative;
            width: 390px;
            height: 59px;
          }
          .avatar {
            position: absolute;
            right: 20px;
            top: 0;
            width: 40px;
            height: 40px;
          }
          .avatar img {
            position: absolute;
            left: -19px;
            top: -19px;
            width: 78px;
            height: 78px;
            object-fit: contain;
          }
        </style>
        <div class="topbar"
          data-component="component.home-topbar"
          data-component-family="home-top-bar"
          data-binding-status="html-runtime"
          data-theme="${suffix}"
          data-visual-reference="${light ? "713:40841" : "713:40812"}">
          <div class="status">
            <span class="time">9:41</span>
            <div class="system">
              <span class="signal"><i></i><i></i><i></i><i></i></span>
              <span class="wifi"><i></i></span>
              <span class="battery"></span>
            </div>
          </div>
          <div class="entry-row">
            <span class="avatar" aria-label="Yomi 助手入口">
              <img src="${assets[suffix] || ""}" alt="">
            </span>
          </div>
        </div>`;
    }
  }

  class XzlChatTopBar extends HTMLElement {
    connectedCallback() {
      if (this.shadowRoot) return;
      const theme = this.getAttribute("theme") === "light" ? "light" : "dark";
      this.attachShadow({ mode: "open" }).innerHTML = `
        <style>
          :host {
            --component-width: 390px;
            --top-bar-height: 91px;
            display: block;
            width: min(100%, var(--component-width));
            height: var(--top-bar-height);
            color: ${theme === "dark" ? "rgba(255,255,255,.9)" : "#030303"};
            font-family: -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif;
          }
          * { box-sizing: border-box; }
          .topbar { width: 100%; height: 91px; overflow: hidden; }
          .status { position: relative; height: 47px; }
          .time {
            position: absolute; left: 27px; top: 14px; width: 54px; height: 21px;
            font-size: 16px; font-weight: 600; line-height: 21px; letter-spacing: -.32px;
            text-align: center;
          }
          .system { position: absolute; right: 28px; top: 19px; display: flex; align-items: center; gap: 7px; height: 13px; }
          .signal { display: flex; align-items: end; gap: 2px; width: 18px; height: 12px; }
          .signal i { width: 3px; border-radius: 1px; background: currentColor; }
          .signal i:nth-child(1) { height: 4px; } .signal i:nth-child(2) { height: 7px; }
          .signal i:nth-child(3) { height: 10px; } .signal i:nth-child(4) { height: 12px; }
          .wifi { width: 17px; height: 12px; position: relative; overflow: hidden; }
          .wifi::before, .wifi::after {
            content: ""; position: absolute; left: 50%; border: 1.5px solid currentColor;
            border-left-color: transparent; border-right-color: transparent; border-bottom-color: transparent;
            border-radius: 50%; transform: translateX(-50%);
          }
          .wifi::before { width: 17px; height: 17px; top: 1px; }
          .wifi::after { width: 9px; height: 9px; top: 5px; }
          .wifi i { position: absolute; left: 7px; bottom: 0; width: 3px; height: 3px; border-radius: 50%; background: currentColor; }
          .battery { width: 27px; height: 13px; border: 1px solid currentColor; border-radius: 3px; padding: 2px; position: relative; opacity: .9; }
          .battery::before { content: ""; display: block; width: 100%; height: 100%; border-radius: 1px; background: currentColor; }
          .battery::after { content: ""; position: absolute; right: -3px; top: 4px; width: 2px; height: 5px; border-radius: 0 2px 2px 0; background: currentColor; opacity: .5; }
          .actions { height: 44px; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; }
          .close {
            width: 22px; height: 22px; border: 0; border-radius: 50%;
            color: inherit; background: ${theme === "dark" ? "rgba(255,255,255,.1)" : "rgba(255,255,255,.5)"};
            backdrop-filter: blur(4.6px); position: relative; padding: 0;
          }
          .close::before, .close::after {
            content: ""; position: absolute; left: 6.5px; top: 10.25px; width: 9px; height: 1.5px;
            border-radius: 1px; background: currentColor;
          }
          .close::before { transform: rotate(45deg); } .close::after { transform: rotate(-45deg); }
          .right { display: flex; align-items: center; gap: 24px; }
          .icon { width: 22px; height: 22px; display: grid; place-items: center; }
          .icon svg { width: 22px; height: 22px; fill: currentColor; }
          ${theme === "light" ? ".actions .right { color: #2d3a67; }" : ""}
        </style>
        <div class="topbar" data-component="component.chat-topbar" data-visual-reference="${theme === "dark" ? "392:75358" : "392:75374"}">
          <div class="status">
            <span class="time">9:41</span>
            <div class="system">
              <span class="signal"><i></i><i></i><i></i><i></i></span>
              <span class="wifi"><i></i></span>
              <span class="battery"></span>
            </div>
          </div>
          <div class="actions">
            <span class="close" aria-label="关闭"></span>
            <span class="right">
              <span class="icon">${messageIcon}</span>
              <span class="icon">${playIcon}</span>
            </span>
          </div>
        </div>`;
    }
  }

  if (!customElements.get("xzl-home-top-bar")) {
    customElements.define("xzl-home-top-bar", XzlHomeTopBar);
  }
  if (!customElements.get("xzl-chat-top-bar")) {
    customElements.define("xzl-chat-top-bar", XzlChatTopBar);
  }
})();
