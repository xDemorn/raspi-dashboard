import { translate } from '../i18n.js';

const template = document.createElement('template');

template.innerHTML = `
    <article class="card">
        <div class="content">
            <div class="row">
                <div class="image-container">
                    <img alt="Service" class="icon">
                </div>
            </div>
            <p class="title"></p>
        </div>
        <button type="button" i18n="services.launch"></button>
    </article>
`;

class ServiceComponent extends HTMLElement {
    static observedAttributes = ['icon', 'name', 'i18n', 'href'];

    #button;
    #image;
    #title;

    connectedCallback() {
        if (!this.#button) {
            this.appendChild(template.content.cloneNode(true));

            this.#image = this.querySelector('.image-container .icon');
            this.#title = this.querySelector('.title');
            this.#button = this.querySelector('button');
            this.#button.addEventListener('click', () => {
                const href = this.getAttribute('href');

                if (href) window.open(href, '_blank', 'noopener');
            });
        }

        this.#render();
    }

    attributeChangedCallback() {
        if (this.#button) this.#render();
    }

    #render() {
        const icon = this.getAttribute('icon');
        const title = this.getAttribute('name');
        const key = title ? null : this.getAttribute('i18n');
        const label = title ?? (key ? translate(key) : '');

        if (icon) {
            this.#image.src = icon;
        } else {
            this.#image.removeAttribute('src');
        }

        this.#image.alt = label || 'Service';
        this.#title.textContent = label;

        if (key) {
            this.#title.setAttribute('i18n', key);
        } else {
            this.#title.removeAttribute('i18n');
        }

        this.#button.textContent = translate('services.launch');
    }
}

window.customElements.define('service-component', ServiceComponent);
