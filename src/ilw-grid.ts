import { LitElement, html, unsafeCSS } from 'lit';
import { map } from 'lit/directives/map.js';
import styles from './ilw-grid.styles';
import { ManualSlotController } from "./ManualSlotController";
import './ilw-grid.css';

import { customElement, property, query, state } from "lit/decorators.js";
@customElement('ilw-grid')
export default class Grid extends LitElement {
    static shadowRootOptions: ShadowRootInit = { ...LitElement.shadowRootOptions, slotAssignment: "manual" };

    @property() 
    theme: string = "";

    @property() 
    innerwidth: string = "";

    @property() 
    width: string = "";

    @property() 
    gap: string = "";

    @property() 
    padding: string = "";

    static get styles() {
        return styles;
    }

    private manual = new ManualSlotController(this);

    constructor() {
        super();
        this.theme = '';
        this.innerwidth = '250px';
        this.width = '';
        this.gap = '';
        this.padding = '0 0 40px 0';
    }

    get paddingStyle() {
        return this.padding == '' ? '' : 'padding: ' + this.padding + ';';
    }

    get gapStyle() {
      return this.gap == '' ? '10px' : this.gap;
    }

    get templateColumnStyle() {
        return `grid-template-columns: repeat(auto-fit, minmax(${this.innerwidth}, 1fr));`;
    }

    get outerWidth() {
      return this.width == 'full' || this.width == 'auto' ? 'fixed' : '';
    }
  
    get gridWidth() {
      return this.width == 'auto' || this.width == 'page' ? 'fixed' : '';
    }

    render() {
      return html`
      <style>:host { --ilw-grid--gap: ${this.gapStyle}; } </style>
      <div class="grid-outer ${this.theme} ${this.outerWidth}">
          <ul class="grid ${this.gridWidth}" style="${this.templateColumnStyle} ${this.paddingStyle}">
            ${map(Array.from(this.children), () => html`<li><div><slot></slot></div></li>`)}
          </ul>
      </div>
      `;
    }
}

declare global {
interface HTMLElementTagNameMap {
    "ilw-grid": Grid;
  }
}