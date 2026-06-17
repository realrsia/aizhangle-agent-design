/* Runtime asset payload for AI message components. */
(function registerAiMessageAssets() {
  const icon = (svg) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;

  globalThis.XZL_AI_MESSAGE_ASSETS = Object.freeze({
    think: icon('<svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 1.2 8.2 5.1 12 6.3 8.2 7.6 7 11.5 5.8 7.6 2 6.3 5.8 5.1 7 1.2Z" fill="url(#g)"/><defs><linearGradient id="g" x1="2" y1="1" x2="12" y2="12" gradientUnits="userSpaceOnUse"><stop stop-color="#FF3A4B"/><stop offset=".68" stop-color="#7839FF"/><stop offset="1" stop-color="#4EA3FF"/></linearGradient></defs></svg>'),
    voice: icon('<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.5 1.6a2 2 0 0 0-2 2v3.5a2 2 0 1 0 4 0V3.6a2 2 0 0 0-2-2Z" stroke="currentColor" stroke-width="1.4"/><path d="M3.4 6.5a4.1 4.1 0 0 0 8.2 0M7.5 10.8v2.4M5.2 13.2h4.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>'),
    doc: icon('<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 1.5h5.2L11 4.3v9.2H3v-12Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><path d="M8.2 1.7v2.8H11M5 7h4M5 9.5h4" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/></svg>'),
    like: icon('<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.5 12.5h5.1c.8 0 1.5-.5 1.7-1.3l.9-3.4c.3-1.1-.5-2.1-1.6-2.1H9.2l.3-1.9c.1-.8-.5-1.5-1.3-1.5h-.3L5.5 6v6.5ZM2 6.2h2.1v6.3H2V6.2Z" stroke="currentColor" stroke-width="1.25" stroke-linejoin="round"/></svg>'),
    share: icon('<svg width="17" height="13" viewBox="0 0 17 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.2 1.5 15 6.3l-4.8 4.8V8.3H8.4c-2.7 0-4.8 1-6.4 3 .4-3.9 2.5-6 6.4-6h1.8V1.5Z" stroke="currentColor" stroke-width="1.35" stroke-linejoin="round"/></svg>')
  });
})();
