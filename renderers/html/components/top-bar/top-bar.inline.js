/*
 * Unified Top Bar runtime for single-file HTML demos.
 * Inline top-bar.assets.inline.js before this file, then use:
 *   <xzl-home-top-bar theme="light|dark"></xzl-home-top-bar>
 *   <xzl-chat-top-bar theme="light|dark"></xzl-chat-top-bar>
 *   <xzl-trade-top-bar theme="light|dark"></xzl-trade-top-bar>
 *   <xzl-morning-top-bar theme="light|dark"></xzl-morning-top-bar>
 *   <xzl-watchlist-top-bar theme="light|dark" active="自选|触发|模拟|持股"></xzl-watchlist-top-bar>
 *   <xzl-stock-top-bar theme="light|dark"></xzl-stock-top-bar>
 *   <xzl-secondary-top-bar theme="light|dark" title="标题"></xzl-secondary-top-bar>
 */
(function registerTopBars() {
  const assets = globalThis.XZL_TOP_BAR_ASSETS || {};
  const tabAssets = assets.watchlistTabs || {};

  const THEME = {
    dark: {
      textA: "#fff",
      textB: "rgba(255,255,255,.9)",
      textC: "rgba(255,255,255,.7)",
      chip: "rgba(255,255,255,.1)",
      closeColor: "#fff",
      blue: "#3b84ff",
      tabText: "rgba(255,255,255,.7)",
      tabActiveText: "#fff"
    },
    light: {
      textA: "#030303",
      textB: "#030303",
      textC: "#353739",
      chip: "#e3eefd",
      closeColor: "#2d3a67",
      blue: "#f62f3f",
      tabText: "#353739",
      tabActiveText: "#030303"
    }
  };

  const messageIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 5C20.657 5 22 6.259 22 7.813v9.374C22 18.741 20.657 20 19 20H5c-1.657 0-3-1.259-3-2.813V7.813C2 6.259 3.343 5 5 5h14ZM5 6.5c-.921 0-1.5.677-1.5 1.313v9.374c0 .636.579 1.313 1.5 1.313h14c.921 0 1.5-.677 1.5-1.313V7.813c0-.636-.579-1.313-1.5-1.313H5Zm13.538 1.659a.75.75 0 0 1 .924 1.182l-6.693 5.229a1.55 1.55 0 0 1-1.943-.027L4.521 9.328a.75.75 0 1 1 .957-1.156l6.304 5.215a.05.05 0 0 0 .063.001l6.693-5.229Z"/>
    </svg>`;
  const playIcon = `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M10.503 20.34c1.306 1.065 3.263.136 3.264-1.55V5.955c0-1.57-1.72-2.527-3.048-1.704L6.309 7.44a2 2 0 0 1-1.174.38H4.2a2 2 0 0 0-2 2v4.674a2 2 0 0 0 2 2h.871a2 2 0 0 1 1.264.45l4.168 3.396Zm1.764-1.55a.5.5 0 0 1-.817.388l-4.167-3.397a3.5 3.5 0 0 0-2.212-.787H4.2a.5.5 0 0 1-.5-.5V9.819a.5.5 0 0 1 .5-.5h.935a3.5 3.5 0 0 0 2.053-.665l4.285-3.104a.5.5 0 0 1 .794.405V18.79Zm5.428-.67a6.15 6.15 0 0 0 .001-11.695l-.461 1.428a4.65 4.65 0 0 1-.001 8.84l.461 1.427Zm-1.867-2.567a3.45 3.45 0 0 0 .001-6.562l-.462 1.428a1.95 1.95 0 0 1 0 3.706l.461 1.428Z"/>
    </svg>`;

  function normalizeTheme(value) {
    return value === "light" ? "light" : "dark";
  }

  function statusMarkup() {
    return `
      <div class="status">
        <span class="time">9:41</span>
        <div class="system">
          <span class="signal"><i></i><i></i><i></i><i></i></span>
          <span class="wifi"><i></i></span>
          <span class="battery"></span>
        </div>
      </div>`;
  }

  function sharedCss(theme, height) {
    const t = THEME[theme];
    return `
      :host {
        display: block;
        width: 390px;
        height: ${height}px;
        color: ${t.textA};
        font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "SF Pro Text", sans-serif;
      }
      * { box-sizing: border-box; }
      .topbar { width: 390px; height: ${height}px; overflow: hidden; color: ${t.textA}; }
      .status { position: relative; height: 47px; color: ${t.textA}; }
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
      .close-chip {
        position: relative; display: inline-grid; place-items: center; flex: 0 0 19px;
        width: 19px; height: 19px; border-radius: 50%; color: ${t.closeColor};
        background: ${t.chip}; backdrop-filter: blur(4px);
      }
      .close-chip::before, .close-chip::after {
        content: ""; position: absolute; width: 9px; height: 1.4px; border-radius: 2px; background: currentColor;
      }
      .close-chip::before { transform: rotate(45deg); }
      .close-chip::after { transform: rotate(-45deg); }
      .round-chip {
        display: inline-flex; align-items: center; justify-content: center; height: 35px; padding: 0 11px;
        border: .6px solid ${theme === "dark" ? "#b4d7ff" : "#fff"}; border-radius: 30px;
        color: ${t.textC}; font-size: 14px; line-height: 1; white-space: nowrap;
        background: ${theme === "dark"
          ? "linear-gradient(140deg, rgba(0,26,71,.4), rgba(5,44,97,.025) 58%), rgba(255,255,255,.04)"
          : "linear-gradient(140deg, rgba(210,223,245,.4), rgba(255,255,255,.12) 62%)"};
        box-shadow: ${theme === "dark" ? "inset 3px 3px 2px rgba(19,50,96,.15)" : "inset 3px 3px 2px rgba(192,214,248,.1)"};
      }
      .round-chip.active {
        color: ${t.textB};
        background: ${theme === "dark"
          ? "linear-gradient(140deg, rgba(32,96,164,.58), rgba(12,44,88,.16))"
          : "linear-gradient(140deg, rgba(211,228,249,.95), rgba(255,255,255,.82))"};
        box-shadow: ${theme === "dark"
          ? "0 2px 2px rgba(0,0,0,.24), inset 0 0 12px rgba(70,137,233,.24)"
          : "0 2px 2px rgba(158,193,230,.25), inset 0 0 12px rgba(125,166,225,.15)"};
      }
      .back { position: absolute; left: 12px; top: 9px; width: 24px; height: 24px; color: ${t.textA}; }
      .back::before {
        content: ""; position: absolute; left: 8px; top: 5px; width: 9px; height: 9px;
        border-left: 1.8px solid currentColor; border-bottom: 1.8px solid currentColor;
        border-radius: 1px; transform: rotate(45deg);
      }`;
  }

  class BaseTopBar extends HTMLElement {
    static get observedAttributes() { return ["theme", "active", "title"]; }

    connectedCallback() {
      if (!this.shadowRoot) this.attachShadow({ mode: "open" });
      this.render();
    }

    attributeChangedCallback() {
      if (this.shadowRoot) this.render();
    }

    theme() {
      return normalizeTheme(this.getAttribute("theme"));
    }
  }

  class XzlHomeTopBar extends BaseTopBar {
    render() {
      const theme = this.theme();
      const light = theme === "light";
      this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block; width: 390px; height: 103px; overflow: hidden;
            color: ${light ? "#2d3a67" : "#d7efff"};
            font-family: -apple-system, BlinkMacSystemFont, "PingFang SC", "SF Pro Text", sans-serif;
          }
          * { box-sizing: border-box; }
          .topbar { position: relative; width: 390px; height: 103px; overflow: hidden; }
          .home-status { position: relative; width: 390px; height: 44px; color: ${light ? "#030303" : "#fff"}; }
          .home-time {
            position: absolute; left: 27px; top: 14px; width: 54px; height: 21px;
            font-size: 16px; font-weight: 600; line-height: 21px; letter-spacing: -.32px; text-align: center;
          }
          .dynamic-island { position: absolute; left: 143px; top: 13px; width: 104px; height: 28px; border-radius: 100px; background: #000; }
          .system-icon { position: absolute; display: block; color: currentColor; }
          .signal { left: 286px; top: 20px; width: 18px; height: 12px; }
          .wifi { left: 312px; top: 20px; width: 17px; height: 12px; }
          .battery { left: 336px; top: 19px; width: 28px; height: 13px; }
          .header { display: flex; align-items: center; justify-content: space-between; width: 390px; height: 38px; padding: 0 12px; margin-top: 6px; }
          .brand { display: flex; align-items: center; gap: 10px; height: 38px; }
          .menu {
            position: relative; width: 34px; height: 34px; flex: 0 0 34px; border-radius: 50%;
            border: ${light ? ".895px solid #fff" : "1px solid rgba(255,255,255,.15)"};
            background: ${light ? "#f9fcff" : "linear-gradient(157deg,rgba(40,54,99,.4),rgba(20,26,52,.01)),#091531"};
            box-shadow: ${light ? "1px 7px 8px rgba(90,105,131,.1)" : "1px 7px 8px rgba(0,0,0,.1),inset 4px 4px 10px rgba(77,110,153,.2)"};
          }
          .menu-figma-icon { position: absolute; left: 10px; top: 10px; width: 14px; height: 12.54px; overflow: visible; color: inherit; }
          .title { font-size: 22px; font-weight: 500; line-height: normal; white-space: nowrap; }
          .market {
            display: flex; align-items: center; gap: 3px; height: 38px; padding: 7px 10px; border-radius: 20px;
            border: ${light ? ".895px solid #fff" : "1px solid rgba(255,255,255,.15)"};
            background: ${light ? "#f9fcff" : "linear-gradient(157deg,rgba(40,54,99,.4),rgba(20,26,52,.01)),#091531"};
            box-shadow: ${light ? "1px 7px 4px rgba(90,105,131,.1)" : "1px 7px 4px rgba(0,0,0,.1),inset 4px 4px 10px rgba(77,110,153,.2)"};
          }
          .wallet { display: flex; align-items: center; justify-content: center; width: 16px; height: 16px; flex: 0 0 16px; }
          .wallet svg { display: block; width: 13.33px; height: 12.98px; fill: currentColor; }
          .market-copy { display: flex; flex-direction: column; align-items: flex-start; white-space: nowrap; }
          .market-title { color: ${light ? "#2d3a67" : "#d7efff"}; font-size: 12px; line-height: normal; }
          .market-value { color: #f62f3f; font-family: "ZLCaiFuTi-Regular", "PingFang SC", sans-serif; font-size: 11px; line-height: normal; }
        </style>
        <div class="topbar"
          data-component="component.home-topbar"
          data-component-family="home-top-bar"
          data-binding-status="html-runtime"
          data-theme="${theme}"
          data-visual-reference="${light ? "921:6238" : "921:6255"}">
          <div class="home-status">
            <span class="home-time">9:41</span><span class="dynamic-island"></span>
            <svg class="system-icon signal" viewBox="0 0 18 12" aria-hidden="true"><path d="M0 9a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V9Zm5-2.5a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1V11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6.5ZM10 3a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V3Zm5-2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V1Z" fill="currentColor"/></svg>
            <svg class="system-icon wifi" viewBox="0 0 17 12" aria-hidden="true"><path d="M6.12 8.92a3.72 3.72 0 0 1 4.91 0 .35.35 0 0 1 .01.52l-2.22 2.29a.34.34 0 0 1-.49 0L6.1 9.44a.35.35 0 0 1 .02-.52ZM3.11 6.18a7.88 7.88 0 0 1 10.85 0 .36.36 0 0 1 .01.52l-1.29 1.33a.34.34 0 0 1-.48.01 5.38 5.38 0 0 0-7.33 0 .34.34 0 0 1-.48-.01L3.1 6.7a.36.36 0 0 1 .01-.52ZM.11 3.44a12 12 0 0 1 16.78 0 .36.36 0 0 1 .01.52l-1.29 1.33a.34.34 0 0 1-.48 0 9.5 9.5 0 0 0-13.26 0 .34.34 0 0 1-.48 0L.1 3.96a.36.36 0 0 1 .01-.52Z" fill="currentColor"/></svg>
            <svg class="system-icon battery" viewBox="0 0 28 13" aria-hidden="true"><rect x=".5" y=".5" width="24" height="12" rx="3.5" fill="none" stroke="currentColor" opacity=".35"/><path d="M26 5v4.22a2.29 2.29 0 0 0 0-4.22Z" fill="currentColor" opacity=".4"/><rect x="2" y="2" width="21" height="9" rx="2" fill="currentColor"/></svg>
          </div>
          <div class="header">
            <div class="brand"><span class="menu" aria-hidden="true"><svg class="menu-figma-icon" viewBox="0 0 14 12.54" fill="none"><path d="M.9.9H12.71M.9 6.27H7.8M.9 11.64H12.71" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/><path d="M9.886 4.12 13.61 6.27 9.886 8.42Z" fill="currentColor"/></svg></span><span class="title">首页</span></div>
            <div class="market"><span class="wallet" aria-hidden="true"><svg viewBox="0 0 13.333 12.981"><path d="M10 2.981a2 2 0 0 1 2 2v1.333h.666a.667.667 0 0 1 .667.667v2a.666.666 0 0 1-.667.666H12v1.334a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2h8ZM2 3.981a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V9.647h-1a.667.667 0 0 1-.667-.666v-2a.667.667 0 0 1 .667-.667h1V4.981a1 1 0 0 0-1-1H2Zm8.333 4.666h2v-1.333h-2v1.333ZM8.192.018a.5.5 0 0 1 .608.334l.41 1.321a.5.5 0 0 1-.955.297l-.268-.863-4.467 1.198a.5.5 0 0 1-.26-.966L8.192.018Z"/></svg></span><span class="market-copy"><span class="market-title">今日股票</span><span class="market-value">+233.12</span></span></div>
          </div>
        </div>`;
    }
  }

  class XzlChatTopBar extends BaseTopBar {
    render() {
      const theme = this.theme();
      this.shadowRoot.innerHTML = `
        <style>
          ${sharedCss(theme, 91)}
          .actions { height: 44px; display: flex; align-items: center; justify-content: space-between; padding: 0 16px; }
          .close {
            width: 22px; height: 22px; border: 0; border-radius: 50%; color: inherit;
            background: ${theme === "dark" ? "rgba(255,255,255,.1)" : "rgba(255,255,255,.5)"};
            backdrop-filter: blur(4.6px); position: relative; padding: 0;
          }
          .close::before, .close::after {
            content: ""; position: absolute; left: 6.5px; top: 10.25px; width: 9px; height: 1.5px;
            border-radius: 1px; background: currentColor;
          }
          .close::before { transform: rotate(45deg); } .close::after { transform: rotate(-45deg); }
          .right { display: flex; align-items: center; gap: 24px; color: ${theme === "light" ? "#2d3a67" : "currentColor"}; }
          .icon { width: 22px; height: 22px; display: grid; place-items: center; }
          .icon svg { width: 22px; height: 22px; fill: currentColor; }
        </style>
        <div class="topbar"
          data-component="component.chat-topbar"
          data-component-family="chat-top-bar"
          data-binding-status="html-runtime"
          data-theme="${theme}"
          data-visual-reference="${theme === "dark" ? "392:75358" : "392:75374"}">
          ${statusMarkup()}
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

  class XzlTradeTopBar extends BaseTopBar {
    render() {
      const theme = this.theme();
      const t = THEME[theme];
      this.shadowRoot.innerHTML = `
        <style>
          ${sharedCss(theme, 100)}
          .main { display: flex; justify-content: space-between; align-items: flex-start; height: 53px; padding: 0 18px; }
          .identity { display: flex; gap: 10px; align-items: flex-start; }
          .identity .close-chip { margin-top: 7px; }
          .title { height: 33px; font-size: 24px; font-weight: 500; line-height: 33px; }
          .account { display: flex; align-items: center; gap: 4px; height: 17px; color: ${t.textC}; font-size: 14px; }
          .caret { width: 0; height: 0; border-left: 3px solid transparent; border-right: 3px solid transparent; border-top: 4px solid currentColor; }
          .tabs { display: flex; gap: 10px; height: 39px; }
        </style>
        <div class="topbar"
          data-component="component.topbar"
          data-component-family="trade-top-bar"
          data-binding-status="html-runtime"
          data-theme="${theme}"
          data-visual-reference="${theme === "dark" ? "774:47670" : "774:47669"}">
          ${statusMarkup()}
          <div class="main">
            <div class="identity">
              <span class="close-chip" aria-label="关闭"></span>
              <div>
                <div class="title">交易</div>
                <div class="account"><span>普通 21**327</span><i class="caret"></i></div>
              </div>
            </div>
            <div class="tabs">
              <span class="round-chip active">委托</span>
              <span class="round-chip">新建条件单</span>
            </div>
          </div>
        </div>`;
    }
  }

  class XzlMorningTopBar extends BaseTopBar {
    render() {
      const theme = this.theme();
      const t = THEME[theme];
      this.shadowRoot.innerHTML = `
        <style>
          ${sharedCss(theme, 91)}
          .main { display: flex; align-items: center; justify-content: space-between; height: 44px; padding: 0 22px 0 16px; }
          .left { display: flex; align-items: center; gap: 10px; }
          .down { position: relative; width: 19px; height: 19px; border-radius: 50%; background: ${t.chip}; }
          .down::after {
            content: ""; position: absolute; left: 6px; top: 6px; width: 6px; height: 6px;
            border-right: 1.4px solid ${theme === "dark" ? "#b2cfff" : "#2d3a67"};
            border-bottom: 1.4px solid ${theme === "dark" ? "#b2cfff" : "#2d3a67"};
            transform: rotate(45deg);
          }
          .logo {
            display: block; width: 53px; height: ${theme === "dark" ? "24px" : "30px"};
            color: ${theme === "dark" ? "#fff" : "#294f8f"};
            font-size: 22px; font-weight: 600; line-height: ${theme === "dark" ? "24px" : "30px"};
            letter-spacing: -1px; text-shadow: ${theme === "light" ? "2px 2px 0 #92c7ff" : "none"};
          }
          .actions { display: flex; align-items: center; gap: 27px; color: ${t.textA}; }
          .tune { position: relative; width: 17px; height: 15px; }
          .tune::before, .tune::after {
            content: ""; position: absolute; left: 0; width: 17px; height: 1.6px; border-radius: 1px; background: currentColor;
          }
          .tune::before { top: 4px; box-shadow: 0 6px 0 currentColor; }
          .tune::after { top: 1px; left: 7px; width: 1.6px; height: 7px; box-shadow: -5px 7px 0 currentColor; }
          .share { position: relative; width: 17px; height: 14px; }
          .share::before {
            content: ""; position: absolute; left: 2px; top: 5px; width: 12px; height: 8px;
            border-top: 2px solid currentColor; border-right: 2px solid currentColor;
            transform: skewY(-28deg);
          }
          .share::after {
            content: ""; position: absolute; right: 0; top: 2px; width: 7px; height: 7px;
            border-top: 2px solid currentColor; border-right: 2px solid currentColor; transform: rotate(45deg);
          }
        </style>
        <div class="topbar"
          data-component="component.topbar"
          data-component-family="morning-top-bar"
          data-binding-status="html-runtime"
          data-theme="${theme}"
          data-visual-reference="${theme === "dark" ? "774:55970" : "774:55971"}">
          ${statusMarkup()}
          <div class="main">
            <div class="left"><span class="down" aria-hidden="true"></span><span class="logo">早点听</span></div>
            <div class="actions"><span class="tune" aria-label="设置"></span><span class="share" aria-label="分享"></span></div>
          </div>
        </div>`;
    }
  }

  class XzlWatchlistTopBar extends BaseTopBar {
    render() {
      const theme = this.theme();
      const t = THEME[theme];
      const active = ["自选", "触发", "模拟", "持股"].includes(this.getAttribute("active"))
        ? this.getAttribute("active")
        : "自选";
      const idle = theme === "light" ? tabAssets.light : tabAssets.dark;
      const activeBg = theme === "light" ? tabAssets.lightActive : tabAssets.darkActive;
      const tabs = ["自选", "触发", "模拟", "持股"].map((label) => {
        const selected = label === active;
        return `<span class="tab${selected ? " active" : ""}"><span class="tab-label">${label}</span></span>`;
      }).join("");

      this.shadowRoot.innerHTML = `
        <style>
          ${sharedCss(theme, 99)}
          .main { display: flex; justify-content: space-between; align-items: flex-start; height: 44px; padding: 0 18px; }
          .title { display: flex; align-items: center; gap: 10px; height: 34px; }
          .title strong { font-size: 24px; line-height: 34px; font-weight: 500; }
          .tabs { display: flex; align-items: flex-start; gap: 10px; height: 45px; }
          .tab {
            position: relative; display: inline-flex; align-items: center; justify-content: center;
            flex: 0 0 50px; width: 50px; height: 35px; color: ${t.tabText};
            font-size: 14px; line-height: 14px; white-space: nowrap;
            background: url("${idle || ""}") center / 50px 35px no-repeat;
          }
          .tab.active {
            flex-basis: 56px; width: 56px; height: 45px; margin: 0 -3px -6px;
            color: ${t.tabActiveText}; background-image: url("${activeBg || ""}"); background-size: 56px 45px;
          }
          .tab-label { position: relative; z-index: 1; }
          .tab.active .tab-label { top: -5px; }
        </style>
        <div class="topbar"
          data-component="component.topbar"
          data-component-family="watchlist-top-bar"
          data-binding-status="html-runtime"
          data-theme="${theme}"
          data-active="${active}"
          data-visual-reference="${theme === "dark" ? "774:66816" : "774:66866"}">
          ${statusMarkup()}
          <div class="main">
            <div class="title"><span class="close-chip" aria-label="关闭"></span><strong>我的</strong></div>
            <div class="tabs">${tabs}</div>
          </div>
        </div>`;
    }
  }

  class XzlStockTopBar extends BaseTopBar {
    render() {
      const theme = this.theme();
      const t = THEME[theme];
      this.shadowRoot.innerHTML = `
        <style>
          ${sharedCss(theme, 100)}
          .main { position: relative; height: 53px; }
          .stock-back { top: 9px; }
          .name { position: absolute; left: 50%; top: 0; display: flex; flex-direction: column; align-items: center; gap: 2px; transform: translateX(-50%); }
          .title { display: flex; align-items: center; gap: 6px; height: 25px; font-size: 18px; font-weight: 500; }
          .arrow { width: 0; height: 0; border-top: 4px solid transparent; border-bottom: 4px solid transparent; }
          .arrow.prev { border-right: 7px solid ${t.textA}; }
          .arrow.next { border-left: 7px solid ${t.textA}; }
          .meta { display: flex; align-items: center; gap: 4px; color: ${t.textC}; font-size: 12px; line-height: 14px; }
          .margin { padding: 0 2px; border: .5px solid currentColor; border-radius: 2px; font-size: 11px; }
          .lv2 { display: grid; place-items: center; width: 16px; height: 14px; border-radius: 2px; color: #e5c381; border: 1px solid currentColor; font-size: 8px; font-weight: 700; }
          .pull { width: 5px; height: 5px; border-right: 1px solid currentColor; border-bottom: 1px solid currentColor; transform: rotate(45deg); }
          .actions { position: absolute; right: 18px; top: 18px; display: flex; align-items: center; gap: 17px; }
          .bell { position: relative; width: 16px; height: 19px; color: ${theme === "dark" ? "#3b84ff" : "#f62f3f"}; }
          .bell::before {
            content: ""; position: absolute; left: 3px; top: 3px; width: 10px; height: 12px;
            border: 2px solid currentColor; border-top-left-radius: 8px; border-top-right-radius: 8px; border-bottom: 0;
          }
          .bell::after {
            content: ""; position: absolute; left: 5px; top: 14px; width: 6px; height: 3px;
            border-bottom: 2px solid currentColor; border-radius: 50%;
          }
          .bell i::before, .bell i::after {
            content: ""; position: absolute; right: -3px; top: 4px; width: 7px; height: 1.5px; border-radius: 1px; background: currentColor;
          }
          .bell i::after { transform: rotate(90deg); }
          .plus { position: relative; width: 20px; height: 20px; border: 2px solid ${theme === "dark" ? "#3b84ff" : "#f62f3f"}; border-radius: 50%; color: ${theme === "dark" ? "#3b84ff" : "#f62f3f"}; }
          .plus::before, .plus::after {
            content: ""; position: absolute; left: 5px; top: 8px; width: 8px; height: 2px; border-radius: 1px; background: currentColor;
          }
          .plus::after { transform: rotate(90deg); }
        </style>
        <div class="topbar"
          data-component="component.topbar"
          data-component-family="stock-detail-top-bar"
          data-binding-status="html-runtime"
          data-theme="${theme}"
          data-visual-reference="${theme === "dark" ? "774:67059" : "774:67217"}">
          ${statusMarkup()}
          <div class="main">
            <span class="back stock-back" aria-label="返回"></span>
            <div class="name">
              <div class="title"><span class="arrow prev"></span><span>格力电器</span><span class="arrow next"></span></div>
              <div class="meta"><span>000651</span><span class="margin">融</span><span class="lv2">L2</span><span class="pull"></span></div>
            </div>
            <div class="actions"><span class="bell" aria-label="提醒"><i></i></span><span class="plus" aria-label="加自选"></span></div>
          </div>
        </div>`;
    }
  }

  class XzlSecondaryTopBar extends BaseTopBar {
    render() {
      const theme = this.theme();
      const title = this.getAttribute("title") || "标题";
      this.shadowRoot.innerHTML = `
        <style>
          ${sharedCss(theme, 91)}
          .main { position: relative; height: 44px; }
          .title {
            position: absolute; left: 50%; top: 8px; width: 120px; transform: translateX(-50%);
            text-align: center; font-size: 17px; font-weight: 500; line-height: 24px;
          }
        </style>
        <div class="topbar"
          data-component="component.topbar"
          data-component-family="secondary-top-bar"
          data-binding-status="html-runtime"
          data-theme="${theme}"
          data-visual-reference="${theme === "dark" ? "774:67337" : "774:67397"}">
          ${statusMarkup()}
          <div class="main"><span class="back" aria-label="返回"></span><span class="title">${title}</span></div>
        </div>`;
    }
  }

  const definitions = [
    ["xzl-home-top-bar", XzlHomeTopBar],
    ["xzl-chat-top-bar", XzlChatTopBar],
    ["xzl-trade-top-bar", XzlTradeTopBar],
    ["xzl-morning-top-bar", XzlMorningTopBar],
    ["xzl-watchlist-top-bar", XzlWatchlistTopBar],
    ["xzl-stock-top-bar", XzlStockTopBar],
    ["xzl-secondary-top-bar", XzlSecondaryTopBar]
  ];

  definitions.forEach(([name, klass]) => {
    if (!customElements.get(name)) customElements.define(name, klass);
  });
})();
