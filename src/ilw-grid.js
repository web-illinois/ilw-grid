import { LitElement, html } from 'lit';
import styles from './ilw-grid.styles';
import './ilw-grid.css';

class Grid extends LitElement {

    static get properties() {
        return {
            theme: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    constructor() {
        super();
        this.align = '';
        this.focus = '';
        this.shadow = false;
        this.collapse = false;
        this.theme = '';
    }

    render() {
        return html`
      <div>
          <slot></slot>
      </div>
    `;
    }
}

customElements.define('ilw-grid', Grid);