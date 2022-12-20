import { Component, ElementRef } from '@angular/core';

declare var $: any;

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = 'tesoreria';

	constructor(private _elementRef: ElementRef) {
    }

    ngOnInit(): void {
        this._elementRef.nativeElement.removeAttribute("ng-version");
    }
}
