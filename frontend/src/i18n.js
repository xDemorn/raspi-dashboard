import { $$ } from './utils.js';

// we define the variables for the supported languages, the translation object and a default fallback language in case we can't detect the user's language
const FALLBACK = 'en';
const SUPPORTED = ['en', 'ca', 'es', 'pl'];
const TRANSLATIONS = {};

// we detect the user's language from the URL query parameter, the browser's language or the fallback language
const params = new URLSearchParams(window.location.search);
const detected = (params.get('lang') || navigator.language || FALLBACK).split('-')[0];
let locale = SUPPORTED.includes(detected) ? detected : FALLBACK;

// we define the URLs for the translation files for the supported languages
const locales = SUPPORTED.map(lang => new URL(`../public/i18n/${lang}.json`, import.meta.url));

// we load the translation files for the supported languages and store them in the TRANSLATIONS object
const messages = await Promise.all(locales.map(url => fetch(url).then(res => {
  if (!res.ok) throw new Error(`i18n: failed to load ${url} (${res.status})`);
  return res.json();
})));
SUPPORTED.forEach((lang, i) => TRANSLATIONS[lang] = messages[i]);

/**
 * It translates a given key to the current language. You can pass nested keys with a '.' as a separator.
 * @example translate('welcome') // returns 'Hello'
 * @example translate('header.title') // returns 'Dashboard'
 * @param {string} key the key that we want to translate
 * @returns {string} the translated string
 */
export function translate(key) {
    if (!doesLocaleExist(locale)) {
        console.error(`The locale "${locale}" is not supported.`);
        return key;
    }

    return key.split('.').reduce((acc, part) => acc?.[part], TRANSLATIONS[locale]) ?? key;
}

/**
 * @returns the current locale
 */
export function getLocale() {
    return locale;
}

/**
 * Changes the current locale and re-translates the page in place.
 * @param {string} lang the locale to switch to
 */
export function setLocale(lang) {
    if (!SUPPORTED.includes(lang)) return;

    locale = lang;
    document.documentElement.lang = lang;

    translatePage();
}

/**
 * Translates every element with an `i18n` attribute inside the given root.
 * @param {ParentNode} root
 */
function translatePage(root = document) {
    $$('[i18n]', root).forEach(el => {
        // custom elements translate their own content; overwriting textContent would wipe it
        if (el.localName.includes('-')) return;

        el.textContent = translate(el.getAttribute('i18n'));
    });
}

/**
 * Checks if a given locale exists in the supported locales and has translations loaded.
 * @param {string} locale the locale to check
 * @returns `true` if exists, `false` otherwise
 */
function doesLocaleExist(locale) {
    return SUPPORTED.includes(locale) && TRANSLATIONS[locale] !== undefined;
}

translatePage();