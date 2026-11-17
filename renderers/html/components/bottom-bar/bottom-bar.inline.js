/*
 * Unified Bottom Bar runtime for single-file HTML demos.
 * Inline bottom-bar.assets.inline.js before this file, then use:
 *   <xzl-bottom-bar scene="home|chat|stock" theme="light|dark" companion="on|off">
 * The home scene uses the 165px V2 navigation runtime and ignores the legacy
 * companion overlay because Yomi voice entry is built into the home bar.
 * Omit the element on secondary or campaign pages that do not use a Bottom Bar.
 * Static by default. Attach interactions only when explicitly requested.
 */
(function registerBottomBar() {
  const assets = globalThis.XZL_BOTTOM_BAR_ASSETS || {};
  const homeAssets = globalThis.XZL_HOME_V2_ASSETS || {};
  const asset = (name) => assets[name] || "";
  const homeAsset = (name) => homeAssets[name] || "";
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
      if (scene === "home") {
        this.renderHome(light);
        return;
      }
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

    renderHome(light) {
      const theme = light ? "light" : "dark";
      const key = (name) => homeAsset(`home-v2-${theme}-${name}`);
      const nav = [
        ["首页", `<span class="nav-icon"><img class="home-icon" src="${key("nav-home.svg")}" alt=""></span>`],
        ["自选", `<span class="nav-icon watch-icon"><img src="${key("nav-watch-a.svg")}" alt=""><img src="${key("nav-watch-b.svg")}" alt=""></span>`],
        ["机会", `<span class="nav-icon"><img class="opportunity-icon" src="${key("nav-opportunity.svg")}" alt=""></span>`],
        ["交易", `<span class="nav-icon"><img class="trade-icon" src="${key("nav-trade.svg")}" alt=""></span>`]
      ].map(([label, icon]) => `<div class="nav-item">${icon}<span class="nav-label">${label}</span></div>`).join("");

      this.shadowRoot.innerHTML = `
        <style>
          :host { display:block; width:390px; height:165px; overflow:hidden; font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif; }
          * { box-sizing:border-box; }
          .bar { position:relative; width:390px; height:165px; overflow:hidden; color:${light ? "#2d3a67" : "#d7efff"}; background:${light ? "linear-gradient(to bottom,rgba(235,240,252,0) 0,#ebf0fc 18.37%)" : "linear-gradient(to bottom,rgba(7,16,37,0) 0,#071025 18.37%)"}; }
          .input-row { position:absolute; left:0; top:30px; width:390px; height:44px; padding:0 15px; }
          .input { position:relative; display:flex; align-items:center; gap:7px; width:360px; height:44px; padding:7px 12px; border:1px solid #fff; border-radius:200px; background:${light ? "linear-gradient(180deg,rgba(255,255,255,.6) 4.46%,rgba(255,255,255,.9) 103.57%)" : "linear-gradient(195.17deg,rgba(73,113,255,0) 69.18%,rgba(73,113,255,.2) 96.58%),linear-gradient(170.82deg,rgba(255,80,80,0) 64%,rgba(255,80,80,.2) 104.31%),linear-gradient(149.26deg,#a0e2ff 13.88%,#d7efff 37.07%,#cde8ff 57.32%,#95bdff 104.19%)"}; box-shadow:${light ? "0 0 15px rgba(84,116,172,.1)" : "inset 0 0 4px rgba(62,65,118,.24)"}; }
          .input-control { position:relative; flex:0 0 30px; width:30px; height:30px; }
          .input-control > img { position:absolute; display:block; max-width:none; }
          .dark-left-ring { width:18.13px; height:18.13px; left:5.94px; top:5.94px; }
          .dark-left-glyph { width:7.72px; height:7.72px; left:11.14px; top:11.14px; }
          .dark-right { width:9.17px; height:7.5px; left:10.4px; top:11.5px; }
          .dark-right-ring { position:absolute; inset:6.5px; border:1.13px solid #2d3a67; border-radius:50%; }
          .light-left { width:50px; height:50px; left:-10px; top:-6px; }
          .light-right { width:42px; height:42px; left:-6px; top:-6px; }
          .input-copy { display:flex; flex:1; min-width:0; align-items:center; justify-content:center; gap:5px; color:#2d3a67; font-size:16px; font-weight:500; white-space:nowrap; }
          .input-copy img { display:block; width:11.2px; height:15.4px; }
          .bottom { position:absolute; left:0; top:78px; width:390px; height:87px; }
          .navigation { display:flex; align-items:flex-start; justify-content:center; gap:9px; width:366px; height:58px; margin:0 auto; }
          .nav-list { display:grid; grid-template-columns:repeat(4,75.25px); width:301px; height:58px; padding:8px 0; }
          .nav-item { position:relative; height:42px; text-align:center; font-size:10px; }
          .nav-icon { position:absolute; left:50%; top:1px; transform:translateX(-50%); display:block; width:24px; height:24px; }
          .nav-label { position:absolute; top:27px; left:0; width:100%; line-height:14px; }
          .nav-icon > img { position:absolute; display:block; max-width:none; }
          .home-icon { left:2px; top:0; width:20px; height:20.72px; }
          .opportunity-icon { left:2.88px; top:0; width:18.24px; height:22px; }
          .trade-icon { left:1px; top:0; width:22px; height:22px; }
          .watch-icon img { width:8.7px; height:16.3px; }
          .watch-icon img:first-child { left:12.9px; top:1.95px; }
          .watch-icon img:last-child { left:2.4px; top:5.35px; }
          .yomi { position:relative; width:56px; height:56px; flex:0 0 56px; border-radius:30px; }
          .yomi img { position:absolute; display:block; max-width:none; }
          .yomi-dark .glow-a { width:104.7px; height:104.7px; left:-24.35px; top:-24.35px; }
          .yomi-dark .glow-b { width:65.74px; height:65.74px; left:-4.87px; top:-4.87px; }
          .yomi-dark .avatar-base, .yomi-dark .avatar-inset, .yomi-dark .texture { inset:0; width:56px; height:56px; }
          .yomi-light { overflow:visible; background:linear-gradient(91.5deg,rgba(193,227,255,0) 67.4%,rgba(193,227,255,.56) 123%),linear-gradient(97.13deg,rgba(227,240,255,.69) 8.74%,rgba(253,237,255,.36) 90.08%),#fff; }
          .yomi-light .glow-a { width:93px; height:81px; left:-18.5px; top:-2px; }
          .yomi-light .avatar-halo { width:62.22px; height:62.22px; left:-3.11px; top:-3.11px; }
          .texture { inset:0; width:56px; height:56px; object-fit:cover; mix-blend-mode:overlay; opacity:.8; border-radius:50%; }
          .character-mask { position:absolute; left:2.86px; top:2.67px; width:50.28px; height:53.33px; overflow:hidden; -webkit-mask-repeat:no-repeat; mask-repeat:no-repeat; }
          .yomi-dark .character-mask { -webkit-mask-image:url('${key("yomi-avatar-mask.svg")}'); mask-image:url('${key("yomi-avatar-mask.svg")}'); -webkit-mask-size:56px 56px; mask-size:56px 56px; -webkit-mask-position:-2.81px -2.67px; mask-position:-2.81px -2.67px; }
          .yomi-light .character-mask { left:2px; top:.67px; height:55.33px; -webkit-mask-image:url('${key("yomi-avatar-mask.svg")}'); mask-image:url('${key("yomi-avatar-mask.svg")}'); -webkit-mask-size:50px 61px; mask-size:50px 61px; -webkit-mask-position:-.84px -2.67px; mask-position:-.84px -2.67px; }
          .character-mask img { left:0; top:0; width:50.28px; height:164.33px; }
          .avatar-glow { width:${light ? "71.68px" : "73.93px"}; height:${light ? "41.44px" : "40.86px"}; left:${light ? "-7.84px" : "-10px"}; top:${light ? "20.8px" : "17.1px"}; }
          .yomi-label { position:absolute; z-index:10; left:0; bottom:-6px; width:56px; height:23px; overflow:visible; }
          .yomi-label text { fill:#fff; font-family:-apple-system,BlinkMacSystemFont,"PingFang SC",sans-serif; font-size:9px; font-weight:600; letter-spacing:.15px; paint-order:stroke; stroke:rgba(33,32,86,.45); stroke-width:.7px; }
          .footer { position:absolute; left:0; top:58px; width:390px; height:29px; overflow:hidden; }
          .disclaimer { position:absolute; top:1px; left:50%; transform:translateX(-50%); color:${light ? "#9fabc4" : "rgba(255,255,255,.3)"}; font-size:9px; line-height:13px; white-space:nowrap; }
          .home-indicator { position:absolute; left:128px; bottom:9px; width:134px; height:5px; border-radius:100px; background:${light ? "#030303" : "#fff"}; }
        </style>
        <div class="bar" data-component="component.bottom-bar" data-component-family="bottom-bar.home-v2" data-binding-status="html-runtime" data-scene="home" data-theme="${theme}" data-companion="off" data-visual-reference="${light ? "921:26096" : "921:26060"}">
          <div class="input-row"><div class="input">
            <span class="input-control">${light ? `<img class="light-left" src="${key("input-left.svg")}" alt="">` : `<img class="dark-left-ring" src="${key("input-left-ring.svg")}" alt=""><img class="dark-left-glyph" src="${key("input-left-glyph.svg")}" alt="">`}</span>
            <span class="input-copy"><img src="${homeAsset("home-v2-microphone.svg")}" alt=""><span>按住提问或搜索</span></span>
            <span class="input-control">${light ? `<img class="light-right" src="${key("input-right.svg")}" alt="">` : `<i class="dark-right-ring"></i><img class="dark-right" src="${key("input-right-glyph.svg")}" alt="">`}</span>
          </div></div>
          <div class="bottom"><div class="navigation"><div class="nav-list">${nav}</div>
            <div class="yomi ${light ? "yomi-light" : "yomi-dark"}">
              <img class="glow-a" src="${key("yomi-glow-outer.png")}" alt="">
              ${light ? `<img class="avatar-halo" src="${key("yomi-avatar-halo.svg")}" alt="">` : `<img class="glow-b" src="${key("yomi-glow-inner.png")}" alt=""><img class="avatar-base" src="${key("yomi-avatar-base.svg")}" alt=""><img class="avatar-inset" src="${key("yomi-avatar-inset.svg")}" alt="">`}
              <span class="character-mask"><img src="${homeAsset("home-v2-yomi-character.png")}" alt="Yomi"></span>
              <img class="texture" src="${homeAsset("home-v2-yomi-texture.png")}" alt=""><img class="avatar-glow" src="${key("yomi-avatar-glow.svg")}" alt="">
              <svg class="yomi-label" viewBox="0 0 56 23" aria-label="长按说话"><path id="yomi-label-arc-${theme}" d="M 8 7 Q 28 14 48 7" fill="none"></path><text><textPath href="#yomi-label-arc-${theme}" startOffset="50%" text-anchor="middle">长按说话</textPath></text></svg>
            </div>
          </div><div class="footer"><span class="disclaimer">内容由AI生成，不构成投资建议</span><i class="home-indicator"></i></div></div>
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
