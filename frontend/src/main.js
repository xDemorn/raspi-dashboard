import { getLocale, setLocale } from './i18n.js';
import { $, $$ } from './utils.js';

const elements = {
    sidebarToggle: $('#sidebar-toggle'),
    aside: $('aside'),
}

const selector = $('.language-selector');
const trigger = $('.language-trigger', selector);
const menu = $('.language-menu', selector);
const code = $('.language-code', trigger);
const options = $$('.language-option', menu);

function closeMenu() {
    menu.hidden = true;
    trigger.setAttribute('aria-expanded', 'false');
}

function renderSelector() {
    const locale = getLocale();

    code.textContent = locale.toUpperCase();

    options.forEach(option => {
        option.setAttribute('aria-selected', String(option.dataset.locale === locale));
    });
}

trigger.addEventListener('click', () => {
    const open = menu.hidden;

    menu.hidden = !open;
    trigger.setAttribute('aria-expanded', String(open));
});

menu.addEventListener('click', event => {
    const option = event.target.closest('.language-option');

    if (!option) return;

    setLocale(option.dataset.locale);
    renderSelector();
    closeMenu();
});

document.addEventListener('click', event => {
    if (!selector.contains(event.target)) closeMenu();
});

document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
});

renderSelector();

function toggleSidebarClass() {
    $$('.btn-sidebar-toggle')?.forEach(btn => btn.classList.toggle('active'));
    document.body.classList.toggle('show-sidebar');
}

$('#open-sidebar', elements.sidebarToggle)?.addEventListener('click', toggleSidebarClass);

$('#close-sidebar', elements.sidebarToggle)?.addEventListener('click', toggleSidebarClass);
