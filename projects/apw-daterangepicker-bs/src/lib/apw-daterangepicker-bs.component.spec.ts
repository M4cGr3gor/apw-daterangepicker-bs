import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApwDaterangepickerBsComponent } from './apw-daterangepicker-bs.component';

describe('ApwDaterangepickerBsComponent', () => {
	let component: ApwDaterangepickerBsComponent;
	let fixture: ComponentFixture<ApwDaterangepickerBsComponent>;

	beforeEach(async () => {
		TestBed.configureTestingModule({
			declarations: [ApwDaterangepickerBsComponent]
		});
		fixture = TestBed.createComponent(ApwDaterangepickerBsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
