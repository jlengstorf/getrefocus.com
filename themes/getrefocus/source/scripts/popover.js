export default class Popover {

  constructor(config) {
    this.__config = this.__getConfig(config);

    this.popover = document.querySelector(this.__config.popoverSelector);
    this.buttons = toArray(document.querySelectorAll(this.__config.buttonSelector));

    if (!this.popover) {
      return false;
    }

    // Add a close button
    this.closeBtn = document.createElement('a');
    this.closeBtn.classList.add('js__close-button');
    this.closeBtn.setAttribute('href', '#close');
    this.closeBtn.innerHTML = '&times;';
    this.closeBtn.addEventListener('click', this.hidePopover.bind(this));

    this.popover.appendChild(this.closeBtn);

    // Hide the popover
    this.popover.classList.add('js__is-popover');
    this.popover.classList.add(this.__config.transitionClasses.hide);
    this.popover.classList.add(this.__config.transitionClasses.animate);

    // Add a click handler
    document.addEventListener('click', this.showPopover.bind(this));
  }

  showPopover(event) {
    if (this.buttons.indexOf(event.target) !== -1) {
      event.preventDefault();

      this.popover.classList.remove(this.__config.transitionClasses.hide);
      setTimeout(() => {
        this.popover.classList.remove(this.__config.transitionClasses.animate);
      }, 200);
    }
  }

  hidePopover(event) {
    event.preventDefault();
    this.popover.classList.add(this.__config.transitionClasses.animate);
    setTimeout(() => {
      this.popover.classList.add(this.__config.transitionClasses.hide);
    }, 200);
  }

  __getConfig({
    popoverSelector = '.js__popover',
    buttonSelector = '.js__popover-open',
    transitionClasses = {
      animate: 'js__popover--fade-out',
      hide: 'js__popover--hidden',
    }
  } = {}) {
    return {
      popoverSelector: popoverSelector,
      buttonSelector: buttonSelector,
      transitionClasses: transitionClasses,
    };
  }

}

function toArray(val) {

  // Or array-like objects.
  let arr;

  if (typeof val.concat === 'function') {
    return val;
  }

  switch (typeof val) {

    case 'object':
      arr = Object.keys(val).map(key => val[key]);
      break;

    /*
     * This will help with strings and integers, but otherwise you'll probably
     * see unexpected results. It's only here to avoid an error.
     */
    default:
      arr = [val];
  }

  return arr;
}
