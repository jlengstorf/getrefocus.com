import FloatingBar from './floating-bar.js';
import Popover from './popover.js';
import enableTranscriptToggle from './transcript.js';
import timer from './time-left.js';

// IF YOU CAN READ THIS JAVASCRIPT WORKS OKAY?
document.body.classList.remove('no-js');

/*
 * Some things (like hoverable tooltips) don't work on touch devices, so
 * let's detect for that.
 */
if (!('ontouchstart' in window) || !('msmaxtouchpoints' in window.navigator)) {
  document.body.classList.add('js__not-touch');
}

const optInPopover = new Popover({
  popoverSelector: '.opt-in',
  buttonSelector: 'a[href="#opt-in"]',
  transitionClasses: {
    animate: 'opt-in--fade-out',
    hide: 'opt-in--hidden'
  }
});

/*
 * Enable transcript toggling.
 */
setTimeout(() => {
  enableTranscriptToggle('body-copy--collapsible', true);
}, 1000);

timer('time-left', '2019-01-25T00:00:00-04:00');
