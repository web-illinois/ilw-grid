export class ManualSlotController {
    /**
     * @type import("lit").LitElement
     * @private
     */
    _host;

    /**
     * @type MutationObserver
     * @private
     */
    _observer;

    /**
     *
     * @param {import("lit").LitElement} host
     */
    constructor(host) {
        this._host = host;
        this._observer = new MutationObserver((list) => {
            this._host.requestUpdate();
        });
        host.addController(this);
    }

    _refreshInternal() {
        let items = Array.from(this._host.children);
        let slots = Array.from(this._host.shadowRoot.querySelectorAll('slot'));
        for (let slot of slots) {
            if (items.length > 0) {
                slot.assign(items.shift());
            }
        }
    }

    hostUpdated() {
        this._refreshInternal();
    }

    hostConnected() {
        this._observer.observe(this._host, {childList: true});
    }

    disconnect() {
        this._observer.disconnect();
    }
}