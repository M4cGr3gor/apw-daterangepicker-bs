import { TestBed } from '@angular/core/testing';

import { ApwDaterangepickerLocaleService } from './apw-daterangepicker-locale.service';

describe('apwDaterangepickerBsService', () => {
	let service: ApwDaterangepickerLocaleService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ApwDaterangepickerLocaleService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
