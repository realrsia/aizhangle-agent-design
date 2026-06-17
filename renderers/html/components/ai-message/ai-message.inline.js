/* Reusable AI message components for New Zhangle HTML prototypes. */
(function registerAiMessageComponents() {
  const assets = globalThis.XZL_AI_MESSAGE_ASSETS || {};
  const themes = {
    dark: {
      userColor: 'rgba(255,255,255,.9)',
      userBorder: '1px solid rgba(255,255,255,.04)',
      userBackground: 'linear-gradient(177.781deg, rgba(40,54,99,.4) 6.706%, rgba(20,26,52,0) 108.42%)',
      userShadow: 'inset 5px 5px 18px rgba(77,110,153,.4)',
      nameColor: 'rgba(255,255,255,.7)',
      nameOpacity: '.6',
      pillBackground: 'rgba(121,159,255,.1)',
      pillBorder: 'none',
      statusColor: 'rgba(255,255,255,.5)',
      answerColor: 'rgba(255,255,255,.9)',
      actionBackground: 'rgba(96,138,206,.08)',
      actionBorder: 'none',
      actionColor: 'rgba(255,255,255,.72)'
    },
    light: {
      userColor: 'rgba(3,3,3,.9)',
      userBorder: '.6px solid #a1c7ff',
      userBackground: '#dbe9ff',
      userShadow: 'none',
      nameColor: '#353739',
      nameOpacity: '1',
      pillBackground: 'rgba(246,47,63,.06)',
      pillBorder: '.5px solid rgba(246,47,63,.16)',
      statusColor: '#6d778b',
      answerColor: '#030303',
      actionBackground: 'transparent',
      actionBorder: '.467px solid rgba(166,172,184,.4)',
      actionColor: '#45548b'
    }
  };

  function currentTheme(el) {
    return themes[el.getAttribute('theme') === 'light' ? 'light' : 'dark'];
  }

  function createShadow(el, template) {
    const root = el.shadowRoot || el.attachShadow({ mode: 'open' });
    root.innerHTML = template;
  }

  class XzlUserBubble extends HTMLElement {
    static get observedAttributes() { return ['theme']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
      const t = currentTheme(this);
      createShadow(this, `
        <style>
          :host { display: flex; justify-content: flex-end; width: 100%; min-width: 0; }
          .bubble {
            width: fit-content;
            max-width: 288px;
            min-height: 46px;
            margin-left: auto;
            padding: 10px 16px;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            border-radius: 15px 15px 0 15px;
            border: ${t.userBorder};
            background: ${t.userBackground};
            box-shadow: ${t.userShadow};
            color: ${t.userColor};
            font-size: 16px;
            line-height: 1.6;
            font-weight: 400;
            word-break: break-word;
            white-space: normal;
          }
        </style>
        <div class="bubble"><slot></slot></div>
      `);
    }
  }

  class XzlYomiIdentity extends HTMLElement {
    static get observedAttributes() { return ['theme', 'name']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
      const t = currentTheme(this);
      const name = this.getAttribute('name') || 'Yomi';
      createShadow(this, `
        <style>
          :host { display: block; width: 100%; }
          .row {
            display: flex;
            align-items: center;
            gap: 6px;
            width: 100%;
            height: 40px;
          }
          .avatar {
            position: relative;
            flex: 0 0 40px;
            width: 40px;
            height: 40px;
            overflow: hidden;
            border-radius: 79px;
            background:
              radial-gradient(circle at 18% 16%, rgba(0,64,255,.7) 0, rgba(128,90,255,.42) 42%, rgba(255,117,255,0) 74%),
              linear-gradient(144.09deg, rgba(122,98,255,.5) 45.919%, #7a62ff 104.55%);
          }
          .avatar:before {
            content: "";
            position: absolute;
            inset: 7px 9px 10px;
            border-radius: 999px 999px 12px 12px;
            background: linear-gradient(145deg, #d7efff 0%, #95bdff 96%);
            opacity: .92;
          }
          .avatar:after {
            content: "";
            position: absolute;
            left: 12px;
            top: 12px;
            width: 16px;
            height: 12px;
            border-radius: 12px;
            background: linear-gradient(135deg, #ffffff 0%, #cde8ff 100%);
            box-shadow: 0 9px 0 -4px rgba(255,80,80,.45);
          }
          .name {
            flex: 1 1 auto;
            min-width: 0;
            color: ${t.nameColor};
            opacity: ${t.nameOpacity};
            font-size: 13px;
            line-height: normal;
            font-weight: 600;
          }
        </style>
        <div class="row"><span class="avatar" aria-hidden="true"></span><span class="name">${name}</span></div>
      `);
    }
  }

  class XzlYomiStatus extends HTMLElement {
    static get observedAttributes() { return ['theme', 'thinking', 'label', 'expanded']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
      const t = currentTheme(this);
      const thinking = this.getAttribute('thinking') || '深度思考';
      const label = this.getAttribute('label') || '模型完成答案生成';
      const iconSrc = assets.think || '';
      createShadow(this, `
        <style>
          :host { display: block; width: 100%; }
          .status-row {
            display: flex;
            align-items: center;
            gap: 2px;
            width: 100%;
            height: 24px;
            padding: 2px 0;
          }
          .think-pill {
            height: 20px;
            display: flex;
            align-items: center;
            gap: 2px;
            padding: 2px 8px;
            border-radius: 20px;
            flex: 0 0 auto;
            background: ${t.pillBackground};
            border: ${t.pillBorder};
          }
          .think-pill img { width: 14px; height: 14px; display: block; object-fit: contain; }
          .think-label {
            font-size: 13px;
            line-height: 1;
            font-weight: 400;
            color: transparent;
            background-image: linear-gradient(160.907deg, #ff3a4b 0%, #7839ff 73.658%, #4ea3ff 100%);
            background-clip: text;
            -webkit-background-clip: text;
            white-space: nowrap;
          }
          .copy {
            flex: 0 0 auto;
            color: ${t.statusColor};
            font-size: 14px;
            line-height: 1;
            font-weight: 400;
            white-space: nowrap;
          }
          .arrow {
            width: 18px;
            height: 18px;
            position: relative;
            flex: 0 0 18px;
            color: ${t.statusColor};
            transform: translateY(-2px);
          }
          .arrow:before {
            content: "";
            position: absolute;
            left: 5px;
            top: 5px;
            width: 7px;
            height: 7px;
            border-right: 1.25px solid currentColor;
            border-bottom: 1.25px solid currentColor;
            transform: rotate(45deg);
          }
        </style>
        <div class="status-row">
          <span class="think-pill"><img src="${iconSrc}" alt=""><span class="think-label">${thinking}</span></span>
          <span class="copy">${label}</span>
          <span class="arrow" aria-hidden="true"></span>
        </div>
      `);
    }
  }

  class XzlYomiAssistActions extends HTMLElement {
    static get observedAttributes() { return ['theme']; }
    connectedCallback() { this.render(); }
    attributeChangedCallback() { this.render(); }
    render() {
      const t = currentTheme(this);
      const button = (type, label, src) => `<span class="btn ${type}" role="button" aria-label="${label}"><span class="icon" style="--icon: url('${src || ''}')"></span></span>`;
      createShadow(this, `
        <style>
          :host { display: block; width: 100%; }
          .actions {
            display: flex;
            align-items: center;
            gap: 10px;
            width: 100%;
            height: 28px;
          }
          .btn {
            position: relative;
            width: 28px;
            height: 28px;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: ${t.actionBackground};
            border: ${t.actionBorder};
            color: ${t.actionColor};
          }
          .icon {
            display: block;
            background: currentColor;
            mask: var(--icon) center / contain no-repeat;
            -webkit-mask: var(--icon) center / contain no-repeat;
          }
          .voice .icon { width: 15px; height: 15px; }
          .doc .icon { width: 14px; height: 15px; }
          .like .icon, .dislike .icon { width: 15px; height: 15px; }
          .share .icon { width: 17px; height: 13px; }
          .dislike .icon { transform: scaleY(-1); }
        </style>
        <div class="actions">
          ${button('voice', '语音播放', assets.voice)}
          ${button('doc', '查看文档', assets.doc)}
          ${button('like', '赞', assets.like)}
          ${button('dislike', '踩', assets.like)}
          ${button('share', '分享', assets.share)}
        </div>
      `);
    }
  }

  if (!customElements.get('xzl-user-bubble')) customElements.define('xzl-user-bubble', XzlUserBubble);
  if (!customElements.get('xzl-yomi-identity')) customElements.define('xzl-yomi-identity', XzlYomiIdentity);
  if (!customElements.get('xzl-yomi-status')) customElements.define('xzl-yomi-status', XzlYomiStatus);
  if (!customElements.get('xzl-yomi-assist-actions')) customElements.define('xzl-yomi-assist-actions', XzlYomiAssistActions);
})();
