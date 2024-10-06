import * as i0 from '@angular/core';
import { EventEmitter, Component, Input, Output, Injectable } from '@angular/core';

class FnButtonComponent {
    constructor() {
        this.label = 'Click';
        this.onClick = new EventEmitter();
    }
    clickHandler() {
        this.onClick.emit();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FnButtonComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: FnButtonComponent, isStandalone: true, selector: "lib-fn-button", inputs: { label: "label" }, outputs: { onClick: "onClick" }, ngImport: i0, template: "<button (click)=\"clickHandler()\" class=\"fn-btn\">\n    {{label}}\n</button>", styles: [".fn-btn{padding:12px 16px;border-radius:6px;background-color:#b4f4b4;color:#f6f2f2;transition:background-color .5s ease;cursor:pointer}.fn-btn:hover{background-color:#69ef69}\n"] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FnButtonComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-fn-button', standalone: true, imports: [], template: "<button (click)=\"clickHandler()\" class=\"fn-btn\">\n    {{label}}\n</button>", styles: [".fn-btn{padding:12px 16px;border-radius:6px;background-color:#b4f4b4;color:#f6f2f2;transition:background-color .5s ease;cursor:pointer}.fn-btn:hover{background-color:#69ef69}\n"] }]
        }], propDecorators: { label: [{
                type: Input
            }], onClick: [{
                type: Output
            }] } });

class FnInputComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FnInputComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: FnInputComponent, isStandalone: true, selector: "lib-fn-input", ngImport: i0, template: "<p>fn-input works!</p>\n", styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: FnInputComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-fn-input', standalone: true, imports: [], template: "<p>fn-input works!</p>\n" }]
        }] });

class MyLibService {
    constructor() { }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibService, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibService, providedIn: 'root' }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [] });

class MyLibComponent {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibComponent, deps: [], target: i0.ɵɵFactoryTarget.Component }); }
    static { this.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "14.0.0", version: "17.3.12", type: MyLibComponent, isStandalone: true, selector: "lib-my-lib", ngImport: i0, template: `
    <p>
      my-lib works!
    </p>
  `, isInline: true, styles: [""] }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: MyLibComponent, decorators: [{
            type: Component,
            args: [{ selector: 'lib-my-lib', standalone: true, imports: [], template: `
    <p>
      my-lib works!
    </p>
  ` }]
        }] });

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { FnButtonComponent, FnInputComponent, MyLibComponent, MyLibService };
//# sourceMappingURL=my-lib.mjs.map
