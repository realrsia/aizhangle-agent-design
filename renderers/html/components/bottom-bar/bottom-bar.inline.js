/*
 * Unified Bottom Bar runtime for single-file HTML demos.
 * Inline bottom-bar.assets.inline.js before this file, then use:
 *   <xzl-bottom-bar scene="home|chat|stock" theme="light|dark" companion="on|off">
 * Omit the element on secondary or campaign pages that do not use a Bottom Bar.
 * Static by default. Attach interactions only when explicitly requested.
 */
(function registerBottomBar() {
  const assets = globalThis.XZL_BOTTOM_BAR_ASSETS || {};
  const asset = (name) => assets[name] || "";
  const mic = `
    <svg viewBox="0 0 16 18" aria-hidden="true">
      <rect x="4.25" y=".75" width="7.5" height="11" rx="3.75" fill="currentColor"/>
      <path d="M2.25 8.75a5.75 5.75 0 0 0 11.5 0M8 14.5v2.5M5.25 17h5.5"
        fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
    </svg>`;
  const chevron = `
    <svg viewBox="0 0 14 14" aria-hidden="true">
      <path d="m5.2 2.8 4.1 4.2-4.1 4.2" fill="none" stroke="currentColor"
        stroke-width="1.1" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  const favoriteIcon = `
    <svg viewBox="0 0 14 14" aria-hidden="true" data-asset="bottom-bar-agent-favorite-question.svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.08553 1.6228C6.48733 .910688 7.51403 .910438 7.91561 1.6228L8.9869 3.52319C9.13676 3.78886 9.39492 3.97654 9.69393 4.03687L11.8316 4.46851C12.633 4.63046 12.9499 5.60564 12.3971 6.20776L10.9205 7.81421 10.8482 7.9021C10.6917 8.11469 10.6204 8.38023 10.651 8.64526L10.901 10.8123C10.989 11.574 10.2648 12.1515 9.56111 11.9402L9.42147 11.8875 7.43709 10.9802C7.15989 10.8534 6.8413 10.8536 6.56404 10.9802L4.57967 11.8875C3.88232 12.2065 3.10965 11.6963 3.09334 10.9617L3.10018 10.8123 3.35018 8.64526C3.38071 8.38026 3.30943 8.11466 3.15291 7.9021L3.08065 7.81421 1.60408 6.20776C1.08512 5.64313 1.33129 4.75012 2.02498 4.50757L2.16951 4.46851 4.30721 4.03687C4.56878 3.98396 4.79992 3.83362 4.95369 3.6189L5.01424 3.52319 6.08553 1.6228ZM7.19197 2.03003C7.10784 1.88121 6.89352 1.88146 6.80916 2.03003L5.73787 3.93042C5.46974 4.40613 5.00745 4.74209 4.47225 4.85034L2.33358 5.28198C2.16558 5.31588 2.09942 5.52007 2.21541 5.64624L3.691 7.25269C4.06066 7.65482 4.23797 8.19836 4.17537 8.74097L3.9244 10.908C3.90501 11.078 4.07921 11.2038 4.23494 11.1326L6.21834 10.2253C6.71503 9.9982 7.28616 9.99805 7.78279 10.2253L9.76619 11.1326C9.92186 11.2036 10.0961 11.0779 10.0767 10.908L9.82576 8.74097C9.76313 8.1983 9.94043 7.65485 10.3101 7.25269L11.7857 5.64624C11.9011 5.52013 11.8351 5.31606 11.6676 5.28198L9.52889 4.85034C8.99348 4.74219 8.53147 4.40627 8.26326 3.93042L7.19197 2.03003Z" fill="currentColor"/>
    </svg>`;
  const taskIcon = `
    <svg viewBox="0 0 14 14" aria-hidden="true" data-asset="bottom-bar-agent-selection-assistant.svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12.4274 9.65161C12.6369 9.55892 12.8824 9.65406 12.9752 9.86352C13.0677 10.0729 12.9734 10.3185 12.7643 10.4114L7.99279 12.5256C7.36957 12.8018 6.65797 12.8019 6.03479 12.5256L1.26819 10.4104C1.05871 10.3175 .964394 10.073 1.05725 9.86352C1.15017 9.65404 1.39463 9.55972 1.60412 9.65259L6.3717 11.7668C6.78046 11.9479 7.24709 11.9479 7.65588 11.7668L12.4274 9.65161ZM12.4274 6.79223C12.6369 6.69954 12.8824 6.79469 12.9752 7.00415C13.0677 7.21348 12.9734 7.45909 12.7643 7.552L7.99279 9.66626C7.36957 9.94247 6.65797 9.94254 6.03479 9.66626L1.26819 7.55102C1.05871 7.45811 .964394 7.21364 1.05725 7.00415C1.15017 6.79466 1.39463 6.70034 1.60412 6.79321L6.3717 8.90747C6.78046 9.08855 7.24709 9.0885 7.65588 8.90747L12.4274 6.79223ZM5.90979 1.56958C6.60329 1.21386 7.42599 1.21437 8.11877 1.57153L12.6754 3.92114C13.1385 4.16047 13.1127 4.83176 12.6324 5.03442L7.94983 7.0061C7.35191 7.25786 6.67709 7.25776 6.07873 7.00708L1.37268 5.03442C.890585 4.83235 .863907 4.15905 1.32873 3.92016L5.90979 1.56958ZM7.73889 2.30884C7.28425 2.07443 6.74382 2.07448 6.28869 2.30786L2.11877 4.44751 6.40002 6.24145C6.79268 6.40589 7.23521 6.40568 7.62756 6.24048L11.8863 4.44751 7.73889 2.30884Z" fill="currentColor"/>
    </svg>`;

  class XzlBottomBar extends HTMLElement {
    static get observedAttributes() { return ["scene", "theme", "companion"]; }

    connectedCallback() {
      this.attachShadow({ mode: "open" });
      this.render();
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }

    render() {
      const scene = ["home", "chat", "stock"].includes(this.getAttribute("scene"))
        ? this.getAttribute("scene")
        : "home";
      const light = this.getAttribute("theme") === "light";
      const companion = this.getAttribute("companion") === "on";
      const barHeight = scene === "chat" ? 171 : 130;
      const inputWidth = scene === "stock" ? 168 : 220;
      const suffix = light ? "light" : "dark";
      const sceneContent = scene === "stock"
        ? `${this.input(inputWidth)}${this.tradeActions()}`
        : `${this.round("trade", asset(`trading-entry-${suffix}.svg`))}${this.input(inputWidth)}${this.round("assistant", asset(`assistant-entry-${suffix}.svg`))}`;

      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 390px;
            height: ${barHeight}px;
            overflow: visible;
            color: ${light ? "#2d3a67" : "#b2cfff"};
            font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", sans-serif;
          }
          * { box-sizing: border-box; }
          .anchor { position: relative; width: 390px; height: ${barHeight}px; overflow: visible; }
          .base {
            position: absolute; inset: 0;
            display: flex; flex-direction: column; align-items: center; justify-content: flex-end;
            padding-top: ${scene === "chat" ? "48px" : "48px"};
            background: ${light
              ? "linear-gradient(to bottom, rgba(243,245,249,0) 8.85%, rgba(243,245,249,.82) 35.77%)"
              : "linear-gradient(to bottom, rgba(7,16,37,0) 2.05%, rgba(7,16,37,.82) 34.62%)"};
          }
          .controls { display: flex; align-items: center; justify-content: center; gap: 16px; height: 48px; }
          .round, .action {
            position: relative; display: grid; place-items: center; width: 48px; height: 48px;
            border-radius: 50%;
            border: ${light ? ".96px solid #fff" : ".96px solid rgba(255,255,255,.04)"};
            background: ${light
              ? "linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.9))"
              : "linear-gradient(156.6deg,rgba(40,54,99,.4),rgba(20,26,52,.01) 53%),#071025"};
            box-shadow: ${light ? "none" : "inset 3px 6px 10px rgba(77,110,153,.4)"};
          }
          .round img { width: 28px; height: 28px; object-fit: contain; }
          .round.trade img { transform: scaleX(-1); }
          .round.assistant img { width: 24px; height: 24px; }
          .input {
            position: relative; display: flex; align-items: center; justify-content: center; gap: 5px;
            width: ${inputWidth}px; height: 48px; border-radius: 999px; color: #2d3a67;
            padding: ${scene === "stock" ? "0 51px 0 35px" : "0 18px"};
            border: ${light ? ".6px solid #cddcf5" : "1px solid #fff"};
            background: ${light
              ? "linear-gradient(180deg,rgba(255,255,255,.6),rgba(255,255,255,.9))"
              : "linear-gradient(205deg,rgba(73,113,255,0) 69%,rgba(73,113,255,.2) 97%),linear-gradient(164deg,rgba(255,80,80,0) 64%,rgba(255,80,80,.2) 104%),linear-gradient(134deg,#a0e2ff 14%,#d7efff 37%,#cde8ff 57%,#95bdff 104%)"};
            box-shadow: ${light ? "none" : "inset 0 0 4px rgba(62,65,118,.24)"};
          }
          .mic { width: 13px; height: 16px; display: grid; place-items: center; }
          .mic svg { width: 13px; height: 16px; }
          .label { flex: none; font-size: 16px; line-height: 1; font-weight: 500; white-space: nowrap; }
          .keyboard {
            position: absolute; right: ${light ? "5px" : scene === "stock" ? "12px" : "5px"};
            top: 50%; transform: translateY(-50%);
            width: ${light ? "42px" : "30px"}; height: ${light ? "42px" : "30px"};
          }
          .keyboard img { display: block; width: 100%; height: 100%; object-fit: contain; }
          .action img { position: absolute; display: block; }
          .action .action-bg { inset: 0; width: 48px; height: 48px; }
          .action .main { left: 14px; top: 12px; width: 20px; height: 22px; object-fit: fill; }
          .action.buy .main { top: 14px; height: 20px; }
          .action.cancel .main { left: 14px; top: 14px; width: 20px; height: 20px; }
          .action .detail { left: 26px; top: 28px; width: 8px; height: 6px; object-fit: fill; }
          .action.sell .detail { transform: rotate(180deg); }
          .safe { position: relative; width: 390px; height: 34px; color: ${light ? "#030303" : "#fff"}; }
          .home { position: absolute; left: 50%; bottom: 9px; transform: translateX(-50%); width: 134px; height: 5px; border-radius: 99px; background: currentColor; }
          .chips {
            display: ${scene === "chat" ? "flex" : "none"};
            align-items: center; justify-content: center; gap: 8px;
            width: 100%; height: 25px; margin-top: 15px;
          }
          .chip {
            height: 25px; display: flex; align-items: center; gap: 4px;
            padding: 4px 12px; border-radius: 20px; white-space: nowrap;
            font-size: 13px; line-height: 17px; background: rgba(121,159,255,.1);
          }
          .chip.selected { border: ${light ? ".6px" : ".5px"} solid currentColor; }
          .chip.task { gap: 6px; padding-right: 8px; }
          .chip img, .chip > svg { width: 14px; height: 14px; object-fit: contain; flex: 0 0 14px; }
          .divider { width: 1px; height: 12px; background: currentColor; opacity: .28; }
          .arrow { width: 14px; height: 14px; }
          .arrow svg { display: block; width: 14px; height: 14px; }
          .companion {
            position: absolute; left: 0; bottom: ${barHeight - 32}px;
            width: 390px; height: 129px; pointer-events: none;
          }
          .yomi {
            position: absolute; left: 19px; bottom: 0; width: 80px; height: 100px;
            overflow: hidden;
          }
          .yomi img {
            position: absolute; left: -3.5px; top: 4px;
            width: 90px; height: 292px; max-width: none;
          }
          .bubble {
            position: absolute;
            left: 99px; top: 60px; width: 278px; height: 58px;
            overflow: ${light ? "visible" : "hidden"}; color: ${light ? "#030303" : "#fff"};
            font-size: 14px; line-height: 1.6;
          }
          .bubble-bg {
            position: absolute;
            ${light
              ? "left: -20px; top: -20px; width: 318px; height: 98px;"
              : "inset: 0; width: 100%; height: 100%;"}
          }
          .bubble-text {
            position: absolute; inset: 7px ${light ? "18px" : "20px"} 7px 27px;
            overflow: hidden; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;
          }
          .collapse {
            position: absolute; right: 8px; top: 12px; width: 12px; height: 12px;
          }
          .collapse svg { display: block; width: 12px; height: 12px; overflow: visible; }
        </style>
        <div class="anchor"
          data-component="component.bottom-bar"
          data-component-family="bottom-bar"
          data-binding-status="html-runtime"
          data-scene="${scene}"
          data-theme="${light ? "light" : "dark"}"
          data-companion="${companion ? "on" : "off"}">
          ${companion ? this.companion(light) : ""}
          <div class="base">
            <div class="controls">${sceneContent}</div>
            <div class="chips">
              <span class="chip selected"><img src="${asset(`deep-thinking-selected-${suffix}.svg`)}" alt=""><span>深度思考</span></span>
              <span class="chip">${favoriteIcon}<span>收藏问题</span></span>
              <span class="chip task">${taskIcon}<span>任务助手</span><i class="divider"></i><i class="arrow">${chevron}</i></span>
            </div>
            <div class="safe"><i class="home"></i></div>
          </div>
        </div>`;
    }

    round(type, source) {
      return `<span class="round ${type}"><img src="${source}" alt=""></span>`;
    }

    input(width) {
      const light = this.getAttribute("theme") === "light";
      return `<span class="input" style="width:${width}px">
        <span class="mic">${mic}</span><span class="label">按住说话</span>
        <span class="keyboard">
          <img src="${asset(`bottom-bar-mode-keyboard-${light ? "light" : "dark"}.svg`)}" alt="">
        </span>
      </span>`;
    }

    tradeActions() {
      const suffix = this.getAttribute("theme") === "light" ? "light" : "dark";
      const background = asset(`stock-action-bg-${suffix}.svg`);
      return `
        <span class="action buy">
          <img class="action-bg" src="${background}" alt="">
          <img class="main" src="${asset(`buy-${suffix}-main.svg`)}" alt="买">
          <img class="detail" src="${asset(`buy-${suffix}-detail.svg`)}" alt="">
        </span>
        <span class="action sell">
          <img class="action-bg" src="${background}" alt="">
          <img class="main" src="${asset(`sell-${suffix}-main.svg`)}" alt="卖">
          <img class="detail" src="${asset(`sell-${suffix}-detail.svg`)}" alt="">
        </span>
        <span class="action cancel">
          <img class="action-bg" src="${background}" alt="">
          <img class="main" src="${asset(`cancel-${suffix}.svg`)}" alt="撤">
        </span>`;
    }

    companion(light) {
      return `<div class="companion">
        <span class="yomi"><img src="${asset("yomi.png")}" alt=""></span>
        <span class="bubble">
          <img class="bubble-bg" src="${asset(`companion-bubble-${light ? "light" : "dark"}.svg`)}" alt="">
          <span class="bubble-text"><slot name="companion-message">自选股出现放量异动，点击查看资金流向与关键价位</slot></span>
          <i class="collapse">
            <svg viewBox="0 0 12 12" fill="none" aria-hidden="true"
              data-asset="Figma 12:9237/12:9243 dark/下滑关闭按钮">
              <path d="M3.5 3L6.21716 5.71716C6.37337 5.87337 6.62663 5.87337 6.78284 5.71716L9.5 3"
                stroke="${light ? "#CCD0D8" : "#9BC1FF"}" stroke-opacity=".6" stroke-linecap="round"/>
              <path d="M3.5 7L6.21716 9.71716C6.37337 9.87337 6.62663 9.87337 6.78284 9.71716L9.5 7"
                stroke="${light ? "#9FABC4" : "#9BC1FF"}" stroke-linecap="round"/>
            </svg>
          </i>
        </span>
      </div>`;
    }
  }

  if (!customElements.get("xzl-bottom-bar")) customElements.define("xzl-bottom-bar", XzlBottomBar);
})();
