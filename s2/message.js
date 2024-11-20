const Message = ((document) => {
  const defaultCls = 'zd-message';
  const itemCls = 'zd-message-item';
  const DEFAULT_DELAY = 3 * 1000;
  let root;

  function buildRoot() {
    if (!root) {
      root = document.createElement('div');
      root.classList.add(defaultCls);
      document.body.appendChild(root);
    }
  }

  function createMsg(cnt, delay, cls) {
    buildRoot();

    const dom = document.createElement('div');

    dom.classList.add(itemCls, cls);
    
    const ops = {
      close: () => {
        root.removeChild(dom);
        ops.timer && clearTimeout(ops.timer);
      },
      setInfo: (msg) => {
        if (typeof msg === 'string') {
          dom.innerText = msg;
        } else if (msg instanceof HTMLElement) {
          dom.appendChild(msg);
        } else {
          throw new TypeError(`提示内容格式错误：${msg}`);
        }
      }
    }

    ops.timer = setTimeout(ops.close, delay >= 0 ? delay : DEFAULT_DELAY);

    ops.setInfo(cnt);
    root.appendChild(dom);

    return ops;
  }

  return class {
    static info(msg, delay, cls) {
      return createMsg(msg, delay, cls);
    }
  }
})(document);