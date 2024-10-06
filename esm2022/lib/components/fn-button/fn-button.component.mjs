import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class FnButtonComponent {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL215LWxpYi9zcmMvbGliL2NvbXBvbmVudHMvZm4tYnV0dG9uL2ZuLWJ1dHRvbi5jb21wb25lbnQudHMiLCIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9teS1saWIvc3JjL2xpYi9jb21wb25lbnRzL2ZuLWJ1dHRvbi9mbi1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQzs7QUFTdkUsTUFBTSxPQUFPLGlCQUFpQjtJQVA5QjtRQVFXLFVBQUssR0FBVyxPQUFPLENBQUE7UUFDdEIsWUFBTyxHQUFFLElBQUksWUFBWSxFQUFRLENBQUM7S0FLN0M7SUFIQyxZQUFZO1FBQ1YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN0QixDQUFDOytHQU5VLGlCQUFpQjttR0FBakIsaUJBQWlCLHNJQ1Q5QixnRkFFUzs7NEZET0ksaUJBQWlCO2tCQVA3QixTQUFTOytCQUNFLGVBQWUsY0FDYixJQUFJLFdBQ1AsRUFBRTs4QkFLRixLQUFLO3NCQUFiLEtBQUs7Z0JBQ0ksT0FBTztzQkFBaEIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2xpYi1mbi1idXR0b24nLFxuICBzdGFuZGFsb25lOiB0cnVlLFxuICBpbXBvcnRzOiBbXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZuLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9mbi1idXR0b24uY29tcG9uZW50LmNzcydcbn0pXG5leHBvcnQgY2xhc3MgRm5CdXR0b25Db21wb25lbnQge1xuICBASW5wdXQoKSBsYWJlbDogc3RyaW5nID0gJ0NsaWNrJ1xuICBAT3V0cHV0KCkgb25DbGljaz0gbmV3IEV2ZW50RW1pdHRlcjx2b2lkPigpO1xuXG4gIGNsaWNrSGFuZGxlcigpe1xuICAgIHRoaXMub25DbGljay5lbWl0KCk7XG4gIH1cbn1cbiIsIjxidXR0b24gKGNsaWNrKT1cImNsaWNrSGFuZGxlcigpXCIgY2xhc3M9XCJmbi1idG5cIj5cbiAgICB7e2xhYmVsfX1cbjwvYnV0dG9uPiJdfQ==