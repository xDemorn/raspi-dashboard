import { translate } from './i18n.js';
import { $, $$ } from './utils.js';

Array.from($$('[i18n]')).forEach(el => {
    const key = el.getAttribute('i18n');

    el.textContent = translate(key);
});

// TODO: get all buttons with an href attribute and link to them an onclick event that opens a new tab
