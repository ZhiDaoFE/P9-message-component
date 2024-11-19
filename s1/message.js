const Message = ((document) => {
  const defaultCls = 'zd-message';
  const DEFAULT_DELAY = 3 * 1000;

  function createMsg(cnt, delay) {
    const dom = document.createElement('div');

    dom.classList.add(defaultCls);
    dom.innerText = cnt;

    document.body.appendChild(dom);
    setTimeout(() => {
      document.body.removeChild(dom);
    }, delay >= 0 ? delay : DEFAULT_DELAY);
  }

  return class {
    static info(msg, delay) {
      createMsg(msg, delay);
    }
  }
})(document);