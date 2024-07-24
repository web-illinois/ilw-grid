import { LitElement, html } from 'lit';
import { map } from 'lit/directives/map.js';
import styles from './ilw-grid.styles';
import './ilw-grid.css';
import { ManualSlotController } from "./ManualSlotController.js";

class Grid extends LitElement {
    static shadowRootOptions = {...LitElement.shadowRootOptions, slotAssignment: "manual"};
    static get properties() {
        return {
            theme: { type: String, attribute: true },
            innerwidth: { type: String, attribute: true },
            width: { type: String, attribute: true },
            padding: { type: String, attribute: true }
        };
    }

    static get styles() {
        return styles;
    }

    _observer = new ManualSlotController(this);

    constructor() {
        super();
        this.theme = '';
        this.innerwidth = '250px';
        this.width = '';
        this.padding = '';
    }

    get paddingStyle() {
        return this.padding == '' ? '' : 'padding: ' + this.padding + ';';
    }

    get templateColumnStyle() {
        return `grid-template-columns: repeat(auto-fit, minmax(${this.innerwidth}, 1fr));`;
    }

    get outerWidth() {
      return this.width == 'full' || this.width == 'auto' ? 'fixed' : '';
    }
  
    get gridWidth() {
      return this.width == 'auto' ? 'fixed' : '';
    }

    render() {
      return html`
      <div class="grid-outer ${this.theme} ${this.outerWidth}">
          <ul class="grid ${this.gridWidth}" style="${this.templateColumnStyle} ${this.paddingStyle}">
            ${map(Array.from(this.children), () => html`<li><div><slot></slot></div></li>`)}
          </ul>
      </div>
      `;
    }
}

customElements.define('ilw-grid', Grid);